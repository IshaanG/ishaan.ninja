import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faGithub,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons"
import Layout from "../components/layout"
library.add(faGithub, faTwitter, faLinkedin)

const IndexPage = () => (
  <Layout>
    <div className="container">
      <div className="columns is-mobile">
        <div className="column">
          <figure className="photo image is-128x128">
            <StaticQuery
              query={graphql`
                query {
                  placeholderImage: file(
                    relativePath: { eq: "ishaangupta.png" }
                  ) {
                    childImageSharp {
                      fixed(width: 128, height: 128) {
                        ...GatsbyImageSharpFixed
                      }
                    }
                  }
                }
              `}
              render={(data) => (
                <Img
                  fixed={data.placeholderImage.childImageSharp.fixed}
                  imgStyle={{ borderRadius: "100%" }}
                  alt="Ishaan Gupta"
                />
              )}
            />
          </figure>
          <h1 className="title has-text-centered has-text-light">
            <span>Ishaan Gupta</span>
          </h1>
          <h2 className="subtitle has-text-centered has-text-warning">
            <span>Student / Software Developer</span>
          </h2>
        </div>
      </div>
      <div className="has-text-centered is-mobile">
        <a href="https://github.com/IshaanG" aria-label="github">
          <span className="icon is-large">
            <FontAwesomeIcon className="fab fa-2x" icon={["fab", "github"]} />
          </span>
        </a>
        <a href="https://twitter.com/IshaanMG" aria-label="twitter">
          <span className="icon is-large">
            <FontAwesomeIcon className="fab fa-2x" icon={["fab", "twitter"]} />
          </span>
        </a>
        <a
          href="https://www.linkedin.com/in/ishaan-gupta-66750a168/"
          aria-label="linkedin"
        >
          <span className="icon is-large">
            <FontAwesomeIcon className="fab fa-2x" icon={["fab", "linkedin"]} />
          </span>
        </a>
      </div>
    </div>
    <section className="section is-size-4-desktop is-size-5-touch">
      <div className="container content">
        <h4 className="title has-text-light">
          <span>Hello, I am Ishaan Gupta!</span>{" "}
          <span className="emoji" role="img" aria-label="wave">
            👋
          </span>
        </h4>
        <p>
          <span>I'm an Information Technology undergrad at BIT, Mesra.</span>
        </p>
        <p>
          <span>
            I develop projects mostly with Python and JavaScript. This website
            is built using <a href="https://www.gatsbyjs.org/">Gatsby.js</a>.
          </span>
        </p>
        <p>
          <span>Check out my</span>{" "}
          <Link to="/projects">
            <span>personal projects</span>
          </Link>
          {"."}
        </p>
      </div>
    </section>
  </Layout>
)

export default IndexPage
