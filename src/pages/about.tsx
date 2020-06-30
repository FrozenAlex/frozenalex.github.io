import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../layouts/layout"
import SEO from "../components/seo"
import { FaBlender, FaDatabase, FaDocker, FaCss3, FaJs } from "react-icons/fa"


const About = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout shrink={true} location={location} title={siteTitle}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <div className="flex-grow">
          <h1 className="m-5 text-5xl text-center">About me</h1>
          My name is Alexander Uskov I'm a web developer, I always try to use the latest web
          technology to build highly performant and secure websites.
        </div>
        <div>
          <h1 className="m-5 text-5xl text-center">Technologies I use:</h1>
          <div className="max-w-sm mx-auto">
            <ul className="flex justify-between ">
              <li>JavaScript</li>
              <li>CSS</li>
              <li>Docker</li>
              <li>TypeScript</li>
              <li>MySQL</li>
            </ul>
          </div>
        </div>
        <p className="text-md "></p>
      </div>

      {/* Skills */}

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
