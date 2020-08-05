import * as React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../layouts/layout"
import SEO from "../components/seo"
import Button from "../components/Button"

const SiteIndex = ({ data, location }) => {
	const siteTitle = data.site.siteMetadata.title
	return (
		<Layout location={location} title={siteTitle}>
			<SEO title="Home" />
			{/* Hero */}
			<div
				className="hero-block flex flex-col justify-center"
				style={{
					height: "calc(100vh - 65px)",
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					paddingBottom: "65px",
				}}
			>
				<div className="container text-center mx-auto px-2">
					<h2
						style={{
							margin: 0,
						}}
						className="text-2xl md:text-4xl font-bold mb-2 text-white"
					>
						Hi, my name is <span className="text-accent">Alex Uskov</span>
					</h2>
					<h3
						style={{
							marginTop: "1em",
						}}
						className="text-xl md:text-2xl mb-8 text-textsecondary"
					>
						I make responsive websites with React and TypeScript and more
						<br />
					</h3>
					<Button size="lg" to="/contact/">
						Contact me
					</Button>
				</div>
			</div>
			{/* <div className="flex lg:flex-crow justify-center m-auto">
        <div>
          <h2 className="text-2xl md:text-4xl font-bold mb-2 text-white">About me</h2>
        </div>
        <div className="container mx-auto px-2 ">
          <h3 className="text-xl md:text-2xl mb-8 text-textsecondary">About me</h3>
        </div>
      </div> */}
		</Layout>
	)
}

export default SiteIndex

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
