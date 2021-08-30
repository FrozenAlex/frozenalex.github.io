import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../layouts/layout"
import SEO from "../components/seo"
import styled from "styled-components"

let Donations = styled.div`
	display: flex;
	flex-wrap: wrap;
	& > div {
		padding: 20px;
		
		& h3 {
			font-size: 20px;
			text-align: left;
			font-weight: 500;
			margin-bottom: 0.5em;
		}
		& a {
			text-align: left;
			display: block;
			font-size: 16px;
		}
		& i {
			font-size: 16px;
			word-wrap: break-word;
			display: block;
			width: 100%;
		}
	}
`

function DonatePage({ data, location }) {
	const siteTitle = data.site.siteMetadata.title
	return (
		<Layout location={location} title={siteTitle}>
			<SEO title="Donate" />
			{/* Hero */}
			<h1 className="page-title">Donation page</h1>
			<div
				className="mx-auto container  bg-teal-400 result m-4 font-bold text-xl text-center"
				style={{
					margin: "1em auto 2em auto",
					textAlign: "center",
				}}
			>
				<p>If you somehow liked what I do, here are some ways to send me moneys</p>
				<Donations>
					<div>
						<h3>Ko-fi</h3>
						<a href="https://ko-fi.com/frozenalex">https://ko-fi.com/frozenalex</a>
					</div>
					<div>
						<h3>Monero</h3>
						<i>
							89eneqnr3rNB9WLGL2VcQpNh1Lz3LysEcamio8RMvSqtd2CAyrecdtHEoMMbskfEZx77k19HuKEeQSeLf2Qot1X4S7JABAp
						</i>
					</div>
				</Donations>
			</div>
		</Layout>
	)
}

export default DonatePage

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
