import * as React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../layouts/layout"
import SEO from "../components/seo"
import styled from "styled-components"

import BottomNav from "@/components/article/BottomNav"

const ArticleContainer = styled.article`
	background: var(--background);
	padding: 1em;
`

const BlogPostTemplate = ({ data, pageContext, location }) => {
	const post = data.markdownRemark
	const siteTitle = data.site.siteMetadata.title
	const { previous, next } = pageContext

	return (
		<Layout className="" shrink location={location} title={siteTitle}>
			<SEO
				title={post.frontmatter.title}
				description={post.frontmatter.description || post.excerpt}
				article={true}
				image={post.frontmatter.featuredImage.childImageSharp.fixed.src}
			/>

			<ArticleContainer>
				<header className="text-center p-4">
					<h1 className="font-bold text-2xl md:text-3xl">{post.frontmatter.title}</h1>
					<p className="font-thin text-sm md:text-xl">{post.frontmatter.date}</p>
				</header>
				<Img className="" fluid={post.frontmatter.featuredImage.childImageSharp.fluid} />
				<section className="content px-4 lg:px-0" dangerouslySetInnerHTML={{ __html: post.html }} />
			</ArticleContainer>

			<BottomNav previous={previous} next={next} />
		</Layout>
	)
}

export default BlogPostTemplate

export const pageQuery = graphql`
	query BlogPostBySlug($slug: String!) {
		site {
			siteMetadata {
				title
			}
		}
		markdownRemark(fields: { slug: { eq: $slug } }) {
			id
			excerpt(pruneLength: 160)
			html
			frontmatter {
				title
				date(formatString: "MMMM DD, YYYY")
				description
				featuredImage {
					childImageSharp {
						fixed(width: 512) {
							...GatsbyImageSharpFixed
						}
						fluid(maxWidth: 1024) {
							...GatsbyImageSharpFluid
						}
					}
				}
			}
		}
	}
`
