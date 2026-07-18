#version 300 es

precision highp float;

uniform sampler2D u_image;
uniform vec2 u_resolution;
uniform float u_time;

in vec2 v_texCoord;

out vec4 outColor;

void main() {
  vec2 uv = v_texCoord;
  float time = u_time;

  // Calculate center
  vec2 center = vec2(0.5, 0.5);
  float d = distance(uv, center);
  d = min(d, 1.0);
  d = max(d, 0.0);

  float factor = 0.02;
  uv.x += uv.y * sin(uv.x*20.0 + time*1.0) * factor;
  uv.y += uv.x * sin(uv.y*20.0 + time*1.0) * factor;

  // Modify uv with time when you are ready to add spatial or animated effects.
  outColor = texture(u_image, uv);
  outColor.b = outColor.b + 0.5 * d; 
  outColor.a = d;
}
