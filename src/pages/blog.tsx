import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../layouts/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout shrink={true} location={location} title={siteTitle}>
      <div className="mx-auto px-4">
        <h1 className="text-4xl pt-5 text-center pb-6">Blog</h1>
        <SEO title="Blog" />
        {/* <Bio /> */}
        <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-3 content-center w-full">
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <Link key={node.fields.slug} to={node.fields.slug}>
                <article className="rounded overflow-hidden shadow-lg">
                  <Img
                    className="h-64 w-full object-cover"
                    fluid={node.frontmatter.featuredImage.childImageSharp.fluid}
                  />
                  <div className="px-6 py-4">
                    <header>
                      <h3 className="font-bold text-xl mb-2">
                        {/* <Link style={{ boxShadow: `none` }} to={node.fields.slug}> */}
                        {title}
                        {/* </Link> */}
                      </h3>
                      <small className="text-gray-700 text-base text-sm">
                        {node.frontmatter.date}
                      </small>
                    </header>
                    <section>
                      <p
                        className="text-gray-700 text-base"
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
