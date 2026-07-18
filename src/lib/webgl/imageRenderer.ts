export interface WebGLImageRendererOptions {
  canvas: HTMLCanvasElement;
  image: HTMLImageElement;
  vertexShaderSource: string;
  fragmentShaderSource: string;
  onReady: () => void;
  onFallback: (error?: Error) => void;
}

export interface WebGLImageRenderer {
  start: () => void;
  destroy: () => void;
}

const QUAD_VERTICES = new Float32Array([
  // x, y, texture u, texture v
  -1, -1, 0, 0,
  1, -1, 1, 0,
  -1, 1, 0, 1,
  1, 1, 1, 1,
]);

const FLOATS_PER_VERTEX = 4;

export function createWebGLImageRenderer(
  options: WebGLImageRendererOptions,
): WebGLImageRenderer {
  const {
    canvas,
    image,
    vertexShaderSource,
    fragmentShaderSource,
    onReady,
    onFallback,
  } = options;

  let gl: WebGL2RenderingContext | null = null;
  let program: WebGLProgram | null = null;
  let vertexBuffer: WebGLBuffer | null = null;
  let texture: WebGLTexture | null = null;
  let imageLocation: WebGLUniformLocation | null = null;
  let resolutionLocation: WebGLUniformLocation | null = null;
  let timeLocation: WebGLUniformLocation | null = null;
  let animationFrameId: number | null = null;
  let resizeObserver: ResizeObserver | null = null;
  let started = false;
  let destroyed = false;
  let ready = false;
  let startTime = 0;

  const compileShader = (
    context: WebGL2RenderingContext,
    type: number,
    source: string,
    label: string,
  ) => {
    const shader = context.createShader(type);
    if (!shader) {
      throw new Error(`Could not create the ${label} shader.`);
    }

    context.shaderSource(shader, source);
    context.compileShader(shader);

    if (!context.getShaderParameter(shader, context.COMPILE_STATUS)) {
      const log = context.getShaderInfoLog(shader) || "No compiler log was provided.";
      context.deleteShader(shader);
      throw new Error(`${label} shader compilation failed:\n${log}`);
    }

    return shader;
  };

  const createProgram = (context: WebGL2RenderingContext) => {
    const vertexShader = compileShader(
      context,
      context.VERTEX_SHADER,
      vertexShaderSource,
      "Vertex",
    );
    const fragmentShader = compileShader(
      context,
      context.FRAGMENT_SHADER,
      fragmentShaderSource,
      "Fragment",
    );
    const nextProgram = context.createProgram();

    if (!nextProgram) {
      context.deleteShader(vertexShader);
      context.deleteShader(fragmentShader);
      throw new Error("Could not create the WebGL shader program.");
    }

    context.attachShader(nextProgram, vertexShader);
    context.attachShader(nextProgram, fragmentShader);
    context.linkProgram(nextProgram);
    context.deleteShader(vertexShader);
    context.deleteShader(fragmentShader);

    if (!context.getProgramParameter(nextProgram, context.LINK_STATUS)) {
      const log = context.getProgramInfoLog(nextProgram) || "No linker log was provided.";
      context.deleteProgram(nextProgram);
      throw new Error(`WebGL shader program linking failed:\n${log}`);
    }

    return nextProgram;
  };

  const stopAnimation = () => {
    if (animationFrameId !== null) {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = null;
    }
  };

  const stopResizeWatching = () => {
    resizeObserver?.disconnect();
    resizeObserver = null;
    window.removeEventListener("resize", handleResize);
  };

  const releaseGraphicsResources = () => {
    if (gl && !gl.isContextLost()) {
      if (texture) gl.deleteTexture(texture);
      if (vertexBuffer) gl.deleteBuffer(vertexBuffer);
      if (program) gl.deleteProgram(program);
    }

    texture = null;
    vertexBuffer = null;
    program = null;
    imageLocation = null;
    resolutionLocation = null;
    timeLocation = null;
  };

  const useFallback = (error?: Error) => {
    ready = false;
    stopAnimation();
    stopResizeWatching();
    onFallback(error);
  };

  const syncCanvasSize = (context: WebGL2RenderingContext) => {
    const bounds = canvas.getBoundingClientRect();
    const pixelRatio = Math.max(1, window.devicePixelRatio || 1);
    const width = Math.max(1, Math.round(bounds.width * pixelRatio));
    const height = Math.max(1, Math.round(bounds.height * pixelRatio));

    if (canvas.width !== width || canvas.height !== height) {
      canvas.width = width;
      canvas.height = height;
    }

    context.viewport(0, 0, width, height);
  };

  const drawFrame = (now: number) => {
    if (!gl || !program || !vertexBuffer || !texture || !imageLocation) return;
    if (gl.isContextLost()) return;

    syncCanvasSize(gl);
    gl.useProgram(program);
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.uniform1i(imageLocation, 0);

    if (resolutionLocation) {
      gl.uniform2f(resolutionLocation, canvas.width, canvas.height);
    }

    if (timeLocation) {
      gl.uniform1f(timeLocation, (now - startTime) / 1000);
    }

    gl.clearColor(0, 0, 0, 0);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

    const error = gl.getError();
    if (error !== gl.NO_ERROR) {
      throw new Error(`WebGL failed while drawing the image (error ${error}).`);
    }

    if (!ready) {
      ready = true;
      onReady();
    }
  };

  const handleRenderFailure = (value: unknown) => {
    const error = value instanceof Error ? value : new Error(String(value));
    useFallback(error);
    releaseGraphicsResources();
  };

  const animate = (now: number) => {
    try {
      drawFrame(now);
      animationFrameId = requestAnimationFrame(animate);
    } catch (error) {
      handleRenderFailure(error);
    }
  };

  function handleResize() {
    if (timeLocation || !gl || gl.isContextLost()) return;

    try {
      drawFrame(performance.now());
    } catch (error) {
      handleRenderFailure(error);
    }
  }

  const watchSize = () => {
    if ("ResizeObserver" in window) {
      resizeObserver = new ResizeObserver(handleResize);
      resizeObserver.observe(canvas);
    }

    window.addEventListener("resize", handleResize);
  };

  const initialize = () => {
    stopAnimation();
    stopResizeWatching();
    releaseGraphicsResources();

    let context: WebGL2RenderingContext | null;
    try {
      context = canvas.getContext("webgl2", {
        alpha: true,
        antialias: true,
        premultipliedAlpha: false,
      });
    } catch (error) {
      handleRenderFailure(error);
      return;
    }

    if (!context) {
      gl = null;
      useFallback();
      return;
    }

    gl = context;

    try {
      program = createProgram(gl);
      vertexBuffer = gl.createBuffer();
      texture = gl.createTexture();

      if (!vertexBuffer || !texture) {
        throw new Error("Could not allocate the WebGL image resources.");
      }

      const positionLocation = gl.getAttribLocation(program, "a_position");
      const textureCoordinateLocation = gl.getAttribLocation(program, "a_texCoord");
      imageLocation = gl.getUniformLocation(program, "u_image");
      resolutionLocation = gl.getUniformLocation(program, "u_resolution");
      timeLocation = gl.getUniformLocation(program, "u_time");

      if (positionLocation < 0 || textureCoordinateLocation < 0 || !imageLocation) {
        throw new Error("The shaders do not expose the required image attributes and uniform.");
      }

      gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
      gl.bufferData(gl.ARRAY_BUFFER, QUAD_VERTICES, gl.STATIC_DRAW);

      const stride = FLOATS_PER_VERTEX * Float32Array.BYTES_PER_ELEMENT;
      gl.enableVertexAttribArray(positionLocation);
      gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, stride, 0);
      gl.enableVertexAttribArray(textureCoordinateLocation);
      gl.vertexAttribPointer(
        textureCoordinateLocation,
        2,
        gl.FLOAT,
        false,
        stride,
        2 * Float32Array.BYTES_PER_ELEMENT,
      );

      gl.activeTexture(gl.TEXTURE0);
      gl.bindTexture(gl.TEXTURE_2D, texture);
      gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
      gl.texImage2D(
        gl.TEXTURE_2D,
        0,
        gl.RGBA,
        gl.RGBA,
        gl.UNSIGNED_BYTE,
        image,
      );

      const uploadError = gl.getError();
      if (uploadError !== gl.NO_ERROR) {
        throw new Error(`WebGL could not upload the profile image (error ${uploadError}).`);
      }

      startTime = performance.now();
      watchSize();
      drawFrame(startTime);

      // GLSL compilers remove unused uniforms. The default pass-through shader
      // therefore renders once, while using u_time automatically enables a loop.
      if (timeLocation) {
        animationFrameId = requestAnimationFrame(animate);
      }
    } catch (error) {
      handleRenderFailure(error);
    }
  };

  const waitForImage = async () => {
    if (!image.complete) {
      await new Promise<void>((resolve, reject) => {
        image.addEventListener("load", () => resolve(), { once: true });
        image.addEventListener(
          "error",
          () => reject(new Error("The fallback image could not be loaded.")),
          { once: true },
        );
      });
    }

    if (!image.naturalWidth || !image.naturalHeight) {
      throw new Error("The fallback image has no usable dimensions.");
    }

    try {
      await image.decode();
    } catch {
      // A loaded image is still safe to upload in browsers with partial decode support.
    }
  };

  const handleContextLost = (event: Event) => {
    event.preventDefault();
    useFallback();
    releaseGraphicsResources();
    gl = null;
  };

  const handleContextRestored = () => {
    if (!destroyed && started) initialize();
  };

  const start = () => {
    if (started || destroyed) return;
    started = true;
    canvas.addEventListener("webglcontextlost", handleContextLost);
    canvas.addEventListener("webglcontextrestored", handleContextRestored);

    waitForImage()
      .then(() => {
        if (!destroyed) initialize();
      })
      .catch(handleRenderFailure);
  };

  const destroy = () => {
    if (destroyed) return;
    destroyed = true;
    useFallback();
    releaseGraphicsResources();
    gl = null;
    canvas.removeEventListener("webglcontextlost", handleContextLost);
    canvas.removeEventListener("webglcontextrestored", handleContextRestored);
  };

  return { start, destroy };
}
