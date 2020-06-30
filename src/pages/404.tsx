import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../layouts/layout"
import SEO from "../components/seo"

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="404: Not Found" />
      <h1 className="text-6xl p-8 text-center">404</h1>
      <h1 className="text-3xl p-8 text-center">Not Found</h1>
      <p className="text-lg p-8 text-center">
        You just hit a route that doesn&#39;t exist... the sadness.
      </p>
    </Layout>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
