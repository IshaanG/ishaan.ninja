import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
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
      <Header siteTitle={data.site.siteMetadata.title} />
      <div className="site">
        <main className="site-content">{children}</main>
        <footer>© {new Date().getFullYear()} Ishaan Gupta</footer>
      </div>
    </>
  )
}

export default Layout
