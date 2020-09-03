import * as React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../layouts/layout"
import SEO from "../components/seo"
import Button from "../components/Button"

import styled from "styled-components"
import { Container } from "@/components/Container"

let Hero = styled.div`
	height: calc(100vh - 65px);
	display: flex;
	text-align: center;
	flex-direction: column;
	justify-content: center;
	padding: 0.5em 0.5em 65px 0.5em;
	& h1 {
		font-weight: 600;
		font-size: 1.75em;
		@media (min-width: 700px) {
			font-size: 2em;
		}
	}
	& h2 {
		font-size: 1.5em;
		@media (min-width: 700px) {
			font-size: 1.75em;
		}
	}
`

const SiteIndex = ({ data, location }) => {
	const siteTitle = data.site.siteMetadata.title
	return (
		<Layout location={location} title={siteTitle}>
			<SEO title="Home" />
			<Hero>
				<Container>
					<h1>
						Hi, my name is <span className="text-accent">Alex Uskov</span>
					</h1>
					<h2>I make responsive websites with React and TypeScript and even more</h2>
					<Button size="lg" to="/contact/">
						Contact me
					</Button>
				</Container>
			</Hero>
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
