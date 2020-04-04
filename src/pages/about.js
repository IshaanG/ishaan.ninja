import React from "react"

import Layout from "../components/layout"

const NotFoundPage = () => (
  <Layout>
    <section className="section container">
      <h1 className="title has-text-centered has-text-light">
        <span role="img" aria-label="Construction emoji">
          🚧
        </span>{" "}
        UNDER CONSTRUCTION{" "}
        <span role="img" aria-label="Construction emoji">
          🚧
        </span>
      </h1>
      <hr />
      <p className="has-text-centered">Coming soon.</p>
    </section>
  </Layout>
)

export default NotFoundPage
