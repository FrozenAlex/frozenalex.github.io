import * as React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../layouts/layout"
import SEO from "../components/seo"

const SiteIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Home" />
      {/* Hero */}
      <div className="min-h-screen flex flex-col justify-center"
        style={
          {
            height: "calc(100vh - 65px)",
            paddingBottom: "65px"
          }
        }
      >
        <div className="container text-center mx-auto px-2">
          <h2 className="text-2xl md:text-4xl font-bold mb-2 text-white">
            Hi, my name is <span className="text-accent">Alex Uskov</span>
          </h2>
          <h3 className="text-xl md:text-2xl mb-8 text-textsecondary">
            I make responsive websites with React and TypeScript,<br/>
          </h3>
          <Link
            to="/contact/"
            className="focus:outline-none bg-buttonbgp text-buttontxp font-semibold rounded-full py-3 md:py-4 px-5 md:px-8 shadow-lg uppercase tracking-wider text-sm"
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
