import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../layouts/layout"
import SEO from "../components/seo"
import { FaBlender, FaDatabase, FaDocker, FaCss3, FaJs } from "react-icons/fa"

const About = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout shrink={true} location={location} title={siteTitle}>
      <div className="flex my-6 flex-col md:flex-row">
        <div className="md:w-1/2">
          <h1 className="page-title">About me</h1>
          My name is Alexander Uskov I'm a web developer, I always try to use the latest web
          technology to build highly performant and secure websites.
        </div>
        <div className="md:w-1/2">
          <h1 className="page-title">What I use:</h1>
          <div className="max-w-sm mx-auto">
            <ul className="flex justify-between flex-wrap">
              <li>JavaScript</li>
              <li>CSS</li>
              <li>Docker</li>
              <li>TypeScript</li>
              <li>SQL</li>
            </ul>
          </div>
        </div>
        <p className="text-md "></p>
      </div>

      <SEO title="About" />
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
