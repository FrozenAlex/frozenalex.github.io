import { SnowAnimation } from "@/scripts/snow"
import * as React from "react"

import styled from "styled-components"

var CanvasContainer = styled.div`
	pointer-events: none;
	position: fixed;
	background: transparent;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
  z-index:-100;
`

export default function Snow() {
	let canvasReference = React.useRef<HTMLCanvasElement>(null)

	// Run on start
	React.useEffect(() => {
    let snow = new SnowAnimation(canvasReference.current)
    snow.start()
	}, [canvasReference])

	return (
		<CanvasContainer className="snowCanvas">
			<canvas
				ref={canvasReference}
				id="snowCanvas"
				style={{
					width: "100%",
					height: "100%",
				}}
			></canvas>
		</CanvasContainer>
	)
}
