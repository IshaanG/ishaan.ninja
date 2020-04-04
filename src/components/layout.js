import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"

import Header from "./header"
import "../styles/index.scss"

const Layout = ({ children, breadcrumbs }) => {
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
    <>
      <Helmet>
        <title>
          {breadcrumbs ? `${breadcrumbs.join(" - ")} | ` : ``}
          {data.site.siteMetadata.title}
        </title>
      </Helmet>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div className="site">
        <main className="site-content">{children}</main>
        <footer className="footer">
          <div className="content has-text-centered">
            © {new Date().getFullYear()} Ishaan Gupta
          </div>
        </footer>
      </div>
    </>
  )
}

export default Layout
