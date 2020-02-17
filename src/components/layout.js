/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import "./css/layout.css"

const Layout = ({
  children,
  titulo,
  footer,
  jsonData,
  cvData,
  cvTitle,
  portafolioTitle,
}) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div>
      <Header
        siteTitle={data.site.siteMetadata.title}
        titulo={titulo}
        data={jsonData}
        cvLink={cvData}
        cvTitles={cvTitle}
        portafolioTitles={portafolioTitle}
      />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 2060,
          minWidth: 270,
          padding: `0 0.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
