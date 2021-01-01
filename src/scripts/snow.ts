// Snowflake interface
interface SnowFlake {
	x: number
	y: number
	speed: number
	opacity: number
  angle: number,
  size: number
}

export class SnowAnimation {
	// State variables
	running: boolean = false
	ctx: CanvasRenderingContext2D
	snowflakes: Array<SnowFlake> = []
	element: HTMLCanvasElement
	lasttime: number

	constructor(element: HTMLCanvasElement) {
		let ctx = element.getContext("2d", {
			alpha: true,
		})

		this.ctx = ctx
		this.element = element
		this.resizeCanvas()
		this.createSnow(75)
	}

  // Starts snow
	start() {
		this.running = true
		requestAnimationFrame((time) => {
			this.lasttime = time
			this.renderFrame(time)
		})
		window.onresize = this.resizeCanvas.bind(this)
	}

  // Resize canvas with window
	resizeCanvas() {
    this.element.width = window.innerWidth
    this.element.height = window.innerHeight
	}

	createSnow(number: number = 100) {
		let width = this.element.width
		let height = this.element.height

    let array: Array<SnowFlake> = []
    // We want to make sure our snowflakes will be falling down
    let startAngle = Math.PI + Math.PI/4;
		for (let i = 0; i < number; i++) {
      
      let element: SnowFlake = {
				opacity: 1,
				x: randomInt(width),
				y: randomInt(height),
        speed: randomFloat(0.05, 0.2),
        size: randomInt(6),
				angle: startAngle + Math.random() * (Math.PI/2),
			}
			array.push(element)
		}

		this.snowflakes = array
	}

	renderFrame(time: number) {
    let startAngle = Math.PI + Math.PI/4;
    let delta = time - this.lasttime; 
		let width = this.element.width
		let height = this.element.height

		this.snowflakes.forEach((flake) => {
			if ((flake.x < 0 || flake.x > width) || (flake.y < 0 || flake.y > height)) {
        flake.x = randomInt(width)
        flake.y = 0,
        flake.angle = startAngle + Math.random() * (Math.PI/2)
        flake.size = randomInt(6)
        flake.speed = randomFloat(0.05, 0.2)
      }

			flake.x = flake.x + flake.speed * delta * Math.cos(flake.angle)
			flake.y = flake.y - flake.speed * delta * Math.sin(flake.angle)
		})

    this.ctx.clearRect(0,0,width, height);
    // Render step
    
		this.snowflakes.forEach((snowflake) => {
      this.ctx.beginPath()
			this.ctx.arc(snowflake.x, snowflake.y, snowflake.size, 0, 2 * Math.PI )
      this.ctx.fillStyle = "#FFFFFF40"
	    this.ctx.fill()
    })
    

		if (this.running) {
      this.lasttime = time;
			requestAnimationFrame((time) => this.renderFrame(time))
		}
	}
}

function randomInt(max: number): number {
	return Math.floor(Math.random() * max)
}

function randomFloat(min: number, max: number): number {
  return (Math.random() * (max-min)) + min
}
