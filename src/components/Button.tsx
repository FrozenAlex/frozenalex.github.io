import styles from "./Button.module.scss"
import classNames from "classnames";

import * as React from "react"
import { Link } from "gatsby"
import { FaSpinner } from "react-icons/fa"

interface PropTypes {
	onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
	children?: React.ReactNode
	type?: "button" | "submit"
	variant?: "primary" | "secondary" | "danger" | "info"
	className?: string
	label?: string
	size?: "sm" | "lg"
	disabledClassName: string
	disabled: boolean
	to?: string
	href?: string
	loading?: boolean
}

class Button extends React.Component<PropTypes> {
	static defaultProps = {
		className: "",
		label: "",
		size: "",
		variant: "basic",
		disabled: false,
		disabledClassName: "",
	}

	render() {

		let buttonClass = [styles.button]

		// Class list formation
		if (this.props.size) {
			switch (this.props.size) {
				case "sm":
					buttonClass.push(styles.small)
					break
				case "lg":
					buttonClass.push(styles.big)
					break
			}
		}


		if (this.props.variant) {
			switch (this.props.variant) {
				case "danger":
					buttonClass.push(styles.danger)
					break
				case "info":
					buttonClass.push(styles.info)
					break
				case "primary":
					buttonClass.push(styles.primary)
					break
				case "secondary":
					buttonClass.push(styles.secondary)
					break
			}
		}

		console.log(classNames(buttonClass))

		let children = this.props.loading ? (
			<FaSpinner className={styles.loadingSpinner}></FaSpinner>
		) : (
			this.props.children
		)

		let button =
			this.props.type == "submit" ? (
				<input
					type="submit"
					disabled={this.props.disabled}
					onClick={this.props.onClick}
					className={styles.button}
					value={this.props.label}
				>
					
				</input>
			) : (
				<button
					disabled={this.props.disabled}
					onClick={this.props.onClick}
					className={classNames(buttonClass)}
				>
					{children}
				</button>
			)

		// button.
		// Attack link to the button
		if (this.props.to) {
			button = <Link to={this.props.to}>{button}</Link>
		} else if (this.props.href) {
			button = <a href={this.props.href}>{button}</a>
		}

		return button
	}
}

export default Button
