import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../layouts/layout"
import SEO from "../components/seo"
import LoadingOverlay from "../components/loadingOverlay"
import Button from "@/components/Button"
import FormInput from "@/components/Form/FormInput"

import styled from "styled-components"

let FileInput = styled.input`
	padding: 5px;
	text-align: center;
`


interface ContactPageState {
	form: {
		username: string
		name: string
		message: string
		loading: boolean
		loadingMessage: string
		result: string
	}
}

class ContactPage extends React.Component<any, ContactPageState> {
	constructor(props) {
		super(props)
		this.state = {
			form: {
				username: "",
				message: "",
				name: "",
				loading: false,
				loadingMessage: "",
				result: "",
			},
		}
	}
	render() {
		let { data, location } = this.props
		const siteTitle = data.site.siteMetadata.title

		return (
			<Layout location={location} title={siteTitle}>
				<SEO title="Contact" />
				{/* Hero */}
				<h1 className="page-title">Contact form</h1>
				<div
					className="mx-auto container  bg-teal-400 result m-4 font-bold text-xl text-center"
					style={{
						margin: "1em auto 2em auto",
						textAlign: "center",
					}}
				>
					{this.state.form.result || ""}
				</div>
				<form
					action="https://frozen-feedback.herokuapp.com"
					method="POST"
					className="max-w-md mx-auto"
					encType="multipart/form-data"
					onSubmit={this.handleSubmit.bind(this)}
				>
					
					<div className="mb-4">
						<input name="name" className="hidden" onChange={this.handleChange.bind(this)} />
						<FormInput
							type="text"
							value={this.state.form.username}
							label="Name or Email"
							onChange={this.handleChange.bind(this)}
							name="username"
						/>
					</div>
					
					<div className="mb-4">
						<FormInput
							label="Message"
							onChange={this.handleChange.bind(this)}
							value={this.state.form.message}
							name="message"
							rows={5}
							type="textarea"
							maxLength={3896}
							required
						/>
					</div>
					{/* Filename */}
					<div className="mb-4">
						<label
							className="block text-gray-700 text-md text-center font-bold mb-2 mt-2"
							htmlFor="file"
						>
							File
						</label>
						<FileInput
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							id="file"
							type="file"
							placeholder="File"
							name="file"
							multiple
						/>
					</div>
					<div className="mb-4 text-center">
						<Button type="submit" size="lg" label="submit"></Button>
					</div>
				</form>
				<LoadingOverlay
					isLoading={this.state.form.loading}
					message={this.state.form.loadingMessage}
				/>
			</Layout>
		)
	}
	handleChange(e: React.ChangeEvent<HTMLInputElement>) {
		this.setState({ form: { ...this.state.form, [e.target.name]: e.target.value } })
	}
	validate() {
		return this.state.form.message != "" && this.state.form.username != ""
	}
	async handleSubmit(e: HTMLFormElement) {
		e.preventDefault()
		if (!this.validate()) {
			alert("Invalid input. Check your name and message!")
			return
		}
		let data = new FormData()
		data.append("name", this.state.form.name)
		data.append("username", this.state.form.username)
		data.append("message", this.state.form.message)
		let fileInput = document.getElementById("file") as HTMLInputElement

		let file = fileInput.files

		for (let i = 0; i < file.length; i++) {
			data.append("file", file[i])
		}

		try {
			this.setState({
				form: {
					...this.state.form,
					loadingMessage: "Trying to send a message, please wait...",
					loading: true,
				},
			})
			let result = await fetch("https://frozen-feedback.herokuapp.com/api", {
				method: "POST",
				body: data,
			})
			let text = await result.text()
			if (result.status === 200) {
				this.setState({
					form: {
						...this.state.form,
						result: text,
						loading: false,
					},
				})
			} else {
				this.setState({
					form: {
						...this.state.form,
						result: "Something went wrong, contact me on social media instead...",
						loading: false,
					},
				})
			}
		} catch (e) {
			this.setState({
				form: {
					...this.state.form,
					result: "Something went wrong, contact me on social media instead...",
					loading: false,
				},
			})
		}
	}
}

export default ContactPage

export const pageQuery = graphql`
	query {
		site {
			siteMetadata {
				title
			}
		}
		allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
			edges {
				node {
					excerpt
					fields {
						slug
					}
					frontmatter {
						date(formatString: "MMMM DD, YYYY")
						title
						description
					}
				}
			}
		}
	}
`
