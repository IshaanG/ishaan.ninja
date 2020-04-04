import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faGithub,
  faTwitter,
  faLinkedin,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import Layout from "../components/layout"
library.add(
  faGithub,
  faTwitter,
  faLinkedin,
  faFacebook,
  faEnvelope,
  faInstagram
)

const IndexPage = () => (
  <Layout breadcrumbs={["Home"]}>
    <div className="container">
      <div className="columns is-mobile">
        <div className="column">
          <figure className="photo image is-128x128">
            <StaticQuery
              query={graphql`
                query {
                  placeholderImage: file(
                    relativePath: { eq: "ishaangupta.jpg" }
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
            <span>{"/* none shall parse */"}</span>
          </h2>
        </div>
      </div>
      <div className="has-text-centered is-mobile">
        <a href="https://github.com/IshaanG" aria-label="github">
          <span className="icon is-large">
            <FontAwesomeIcon className="fab fa-2x" icon={["fab", "github"]} />
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
        <a href="https://twitter.com/IshaanMG" aria-label="twitter">
          <span className="icon is-large">
            <FontAwesomeIcon className="fab fa-2x" icon={["fab", "twitter"]} />
          </span>
        </a>

        <a href="https://www.facebook.com/ishaan.m.gupta" aria-label="facebook">
          <span className="icon is-large">
            <FontAwesomeIcon className="fab fa-2x" icon={["fab", "facebook"]} />
          </span>
        </a>

        <a
          href="https://www.instagram.com/ishaangupta__/"
          aria-label="instagram"
        >
          <span className="icon is-large">
            <FontAwesomeIcon
              className="fab fa-2x"
              icon={["fab", "instagram"]}
            />
          </span>
        </a>
        <a href="mailto:ishaang12@gmail.com" aria-label="email">
          <span className="icon is-large">
            <FontAwesomeIcon className="fas fa-2x" icon={["fas", "envelope"]} />
          </span>
        </a>
      </div>
    </div>
    <section className="section is-size-4-desktop is-size-5-touch">
      <div className="container content">
        <h4 className="title has-text-light">
          <span>Hi, I am Ishaan Gupta.</span>{" "}
        </h4>
        <p>
          <span>
            I'm currently pursuing BTech in Information Technology at Birla
            Institute of Technology, Mesra (2018-2022). I love building things
            and participating in events about technology.
          </span>
        </p>
        <p>
          <span>
            I'm an open-source and Linux enthusiast who enjoys exploring the
            details of programmable systems and how to stretch their
            capabilities.
          </span>
        </p>
        <p>
          <span>You can check out my</span>{" "}
          <Link to="/blog">
            <span>blog</span>
          </Link>{" "}
          <span>or some of my</span>{" "}
          <Link to="/projects">
            <span>projects</span>
          </Link>{" "}
          <span>while you are here.</span>
        </p>
      </div>
    </section>
  </Layout>
)

export default IndexPage
