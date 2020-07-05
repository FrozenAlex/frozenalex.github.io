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
      <div className="mx-auto px-2 md:px-4">
        <h1 className="text-2xl md:text-4xl  text-center py-6">Blog</h1>
        <SEO title="Blog" />
        
        <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-3 content-center w-full">
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <Link key={node.fields.slug} to={node.fields.slug}>
                <article className="rounded overflow-hidden shadow-lg bg-background">
                  <Img
                    className="h-64 w-full object-cover"
                    fluid={node.frontmatter.featuredImage.childImageSharp.fluid}
                  />
                  {/* Card */}
                  <div className="px-4 md:px-6 py-4">
                    <header>
                      <h3 className="font-bold text-md -mb-1">
                        {/* <Link style={{ boxShadow: `none` }} to={node.fields.slug}> */}
                        {title}
                        {/* </Link> */}
                      </h3>
                      <small className="opacity-75  text-sm pt-0">
                        {node.frontmatter.date}
                      </small>
                    </header>
                    <section>
                      <p
                        className="opacity-75 text-base"
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
