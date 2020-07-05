import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../layouts/layout"
import SEO from "../components/seo"

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  const { previous, next } = pageContext

  return (
    <Layout shrink={false} location={location} title={siteTitle}>
      {/* <Img className="h-screen w-full" fluid={post.frontmatter.featuredImage.childImageSharp.fluid} /> */}
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
        article={true}
        image={post.frontmatter.featuredImage.childImageSharp.fixed.src}
      />
      <article
        style={{
        }}
        className="container mx-auto max-w-3xl"
      >
        <header className="text-center p-4">
          <h1 className="font-bold text-2xl md:text-3xl">{post.frontmatter.title}</h1>
          <p className="font-thin text-sm md:text-xl">{post.frontmatter.date}</p>
        </header>
        <section className="content px-4 lg:px-0" 
        style={{
          // padding: "1em",
          // boxSizing:"border-box",
          // maxWidth:"1200px"
        }} 
        dangerouslySetInnerHTML={{ __html: post.html }} />
      </article>

      <nav className="max-w-3xl mx-auto px-4 italic border-top ">
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
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
