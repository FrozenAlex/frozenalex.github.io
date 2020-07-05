/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

interface SEOProps {
  title: string
  description?: string
  image?: string
  article?: boolean  
}

import * as React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import { useLocation } from "@reach/router"

const SEO = ({ title, description, image, article }: SEOProps) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            defaultTitle:title
            titleTemplate
            defaultDescription: description,
            siteUrl: url,
            defaultImage: image,
            author {
              name,
              summary
            },
            social {
              twitter,
              github,
              gitlab
            }
          }
        }
      }
    `
  )

  const { pathname } = useLocation()

  const {
    defaultTitle,
    titleTemplate,
    defaultDescription,
    siteUrl,
    defaultImage,
    social,
  } = site.siteMetadata
  
  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: (image)?`${siteUrl}${image}`:"", // i don't have a default image
    url: `${siteUrl}${pathname}`,
  }


  return (
    <Helmet title={seo.title} titleTemplate={titleTemplate}>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      {seo.url && <meta property="og:url" content={seo.url} />}
      {(article ? true : null) && <meta property="og:type" content="article" />}
      {seo.title && <meta property="og:title" content={seo.title} />}
      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}
      {seo.image && <meta property="og:image" content={seo.image} />}
      <meta name="twitter:card" content="summary_large_image" />
      {social.twitter && (
        <meta name="twitter:creator" content={social.twitter} />
      )}
      {seo.title && <meta name="twitter:title" content={seo.title} />}
      {seo.description && (
        <meta name="twitter:description" content={seo.description} />
      )}
      {seo.image && <meta name="twitter:image" content={seo.image} />}
    </Helmet>
  )
}

export default SEO
