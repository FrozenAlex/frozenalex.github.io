import * as React from "react"
import { Link, graphql } from "gatsby"
import styles from "./blog.module.scss";

import Layout from "../layouts/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"

const BlogIndex = ({ data, location }) => {
	const siteTitle = data.site.siteMetadata.title
	const posts = data.allMarkdownRemark.edges

	return (
		<Layout shrink={true} location={location} title={siteTitle}>
			<SEO title="Blog" />
			<div className="mx-auto px-2 md:px-4">
				<h1 className="page-title">Blog</h1>
				<div className={styles.articleList}>
					{posts.map(({ node }) => {
						const title = node.frontmatter.title || node.fields.slug
						return (
							<Link key={node.fields.slug} to={node.fields.slug}>
								<article>
									<Img
										className={styles.articleImage}
										fluid={node.frontmatter.featuredImage.childImageSharp.fluid}
									/>
									{/* Card */}
									<div className={styles.articleInfo}>
										<header>
											<h1>{title}</h1>
											<small>{node.frontmatter.date}</small>
										</header>
										<section>
											<p
												dangerouslySetInnerHTML={{
													__html: node.frontmatter.description || node.excerpt,
												}}
											/>
										</section>
									</div>
								</article>
							</Link>
						)
					})}
				</div>
			</div>
		</Layout>
	)
}

export default BlogIndex

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
						featuredImage {
							childImageSharp {
								fluid(maxWidth: 800) {
									...GatsbyImageSharpFluid
								}
							}
						}
					}
				}
			}
		}
	}
`
