import React from "react"

import Layout from "../components/layout"

const NotFoundPage = () => (
  <Layout>
    <section className="section container">
      <h1 className="title has-text-centered has-text-light">NOT FOUND</h1>
      <hr />
      <p className="has-text-centered">
        You just hit a route that doesn&#39;t exist... the sadness.
      </p>
    </section>
  </Layout>
)

export default NotFoundPage
