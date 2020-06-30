import * as React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../layouts/layout"
import SEO from "../components/seo"

const SiteIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Alex Blog" />
      {/* Hero */}
      <div
        className="py-20"
        style={{ background: "linear-gradient(90deg, #667eea 0%, #764ba2 100%)" }}
      >
        <div className="container text-center mx-auto px-2">
          <h2 className="text-4xl font-bold mb-2 text-white">Hi, my name is Alex</h2>
          <h3 className="text-2xl mb-8 text-gray-200">
            I make responsive websites with React and TypeScript
          </h3>
          <Link
            to="/contact/"
            style={{
              background: "white",
              color: "black"
            }}
            className="bg-white font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider"
          >
            Contact me
          </Link>
        </div>
        
      </div>
      <div
        
        style={{ background: "var(--background-color)" }}
      >
        <div className="container text-center mx-auto px-5">
          <h2 className="text-4xl font-bold mb-2 text-white">Hi, my name is Alex</h2>
          <h3 className="text-2xl mb-8 text-gray-200">
            I make responsive websites with React and TypeScript
          </h3>
          <Link
            to="/contact/"
            style={{
              background: "white",
              color: "black"
            }}
            className="bg-white font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider"
          >
            Contact me
          </Link>
        </div>
        
      </div>
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
