import * as React from "react"

import { FaMoon, FaSun } from "react-icons/fa"

class ThemeSwitch extends React.Component<{}, { night: boolean }> {
	constructor(props: any) {
		super(props)
		this.state = {
			night: true,
		}
	}

	render() {
		let icon = this.state.night ? <FaMoon></FaMoon> : <FaSun></FaSun>

		return (
			<div
				style={{ cursor: "pointer", display: "inline-flex" }}
				onClick={this.toggleTheme.bind(this)}
			>
				{icon}
			</div>
		)
	}

	componentDidMount() {
		let theme = localStorage.getItem("theme")
		let dark = theme !== "light"

		if (dark) {
			document.documentElement.setAttribute("data-theme", "dark")
		} else {
			document.documentElement.setAttribute("data-theme", "light")
		}

		this.setState({ night: dark })
	}

	toggleTheme() {
		let dark = !this.state.night

		localStorage.setItem("theme", dark ? "dark" : "light")
		if (dark) {
			document.documentElement.setAttribute("data-theme", "dark")
		} else {
			document.documentElement.setAttribute("data-theme", "light")
		}
		this.setState({ night: dark })
	}
}
export default ThemeSwitch
