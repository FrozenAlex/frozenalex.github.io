import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../layouts/layout"
import SEO from "../components/seo"

import styled from "styled-components"

const AboutContainer = styled.div`
	display: flex;
	margin: 1em 0.5em;
	flex-direction: column;
	& h2 {
		font-size: 1.75em;
		margin: 0;
		padding: 0;
		text-align: center;
		margin-bottom: 10px;
	}

	& > div {
		background: var(--background);
		margin: 20px;
		border-radius: 15px;
		padding: 10px;
	}
	@media (min-width: 600px) {
		& > div {
			width: 50%;
		}
		flex-direction: row;
	}
`

const About = ({ data, location }) => {
	const siteTitle = data.site.siteMetadata.title

	return (
		<Layout shrink={true} location={location} title={siteTitle}>
			<SEO title="About" />
			<AboutContainer>
				<div>
					<h2>About me</h2>
					<div>
						My name is Alexander Uskov I'm a web developer, I always try to use the latest web
						technology to build highly performant and secure websites.
					</div>
				</div>
				<div>
					<h2>What I use:</h2>
					<div>
						<ul
							style={{
								textAlign: "center",
								listStyle: "none",
								padding: 0,
								margin: 0,
							}}
						>
							<li>JavaScript</li>
							<li>CSS</li>
							<li>Docker</li>
							<li>TypeScript</li>
							<li>SQL</li>
							<li>ReactJS</li>
						</ul>
					</div>
				</div>
			</AboutContainer>
		</Layout>
	)
}

export default About

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
