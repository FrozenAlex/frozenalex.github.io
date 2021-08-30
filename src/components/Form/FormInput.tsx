import styles from "./FormInput.module.scss"

import * as React from "react"
import { type } from "os"
import classNames from "classnames"

interface PropTypes {
	onClick?: (event: React.MouseEvent<HTMLInputElement | HTMLTextAreaElement, MouseEvent>) => void
	onChange?: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
	type?:
		| "button"
		| "checkbox"
		| "color"
		| "date"
		| "datetime-local"
		| "email"
		| "file"
		| "hidden"
		| "image"
		| "month"
		| "number"
		| "password"
		| "radio"
		| "range"
		| "reset"
		| "search"
		| "tel"
		| "text"
		| "textarea"
	className?: string
	placeholder?: string
	value?: string
	name?: string
	label?: string
	rows?: number
	required?: boolean
	maxLength?: number
}

class FormInput extends React.Component<PropTypes> {
	render() {
		let label = <label className="mt-4" htmlFor={this.props.name}>{this.props.label}</label>

		let input

		if (this.props.type === "textarea") {
			input = (
				<textarea
					className={styles.input}
					onChange={this.props.onChange}
					onClick={this.props.onClick}
					name={this.props.name}
					placeholder={this.props.placeholder}
					rows={this.props.rows}
					required={this.props.required}
					maxLength={this.props.maxLength}
					value={this.props.value}
				/>
			)
		} else {
			input = (
				<input
					className={styles.input}
					type={this.props.type}
					onChange={this.props.onChange}
					onClick={this.props.onClick}
					name={this.props.name}
					placeholder={this.props.placeholder}
					required={this.props.required}
					maxLength={this.props.maxLength}
					value={this.props.value}
				/>
			)
		}

		// Wrap the input
		input = (
			<div className={classNames(styles.inputWrapper, this.props.className)}>
				{label}
				{input}
			</div>
		)

		return input
	}
}

export default FormInput
