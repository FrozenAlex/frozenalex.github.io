import * as React from "react"
import { Link } from "gatsby"

import Layout from "../layouts/layout"
import Button from "../components/Button"
import FormInput from "@/components/Form/FormInput"

const UIKitView = ({ data, location }) => {
	return (
		<Layout location={location} title={"UI"}>
			<h1 className="text-center">Buttons</h1>
			<div className="container">
				<div style={{ display: "flex", justifyContent: "center" }}>
					<Button>Default Button</Button>
					<Button disabled>Disabled Button</Button>
					<Button loading>Loading button</Button>
					<Button size="sm">Small Button</Button>
					<Button size="lg">Large Button</Button>
					<Button variant="info">Info Button</Button>
				</div>
			</div>
			<h1 className="text-center">Inputs</h1>
			<div className="container mx-auto">
				<div style={{ display: "flex", justifyContent: "center" }}>
					<FormInput label="Text" type="text" placeholder="text"/> 
					<FormInput label="Email" type="email" placeholder="email"/>
					<FormInput type="password" placeholder="password"/>
				</div>
			</div>

			<h1 className="text-center">Text Sizes</h1>
			<div className="container mx-auto text-center">
				<h1>Header 1</h1>
				<h2>Header 2</h2>
				<h3>Header 3</h3>
				<h4>Header 4</h4>
				<h5>Header 5</h5>
				<h6>Header 6</h6>
			</div>
		</Layout>
	)
}

export default UIKitView
