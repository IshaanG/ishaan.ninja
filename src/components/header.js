import { Link } from "gatsby"
import React, { useState } from "react"

const Header = ({ siteTitle }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const burgerClass = isMenuOpen ? "is-active" : ""

  return (
    <header>
      <nav className="navbar">
        <div className="container">
          <div className="navbar-brand">
            <Link className="navbar-item is-size-4" to="/">
              {siteTitle}
            </Link>
            <button
              className={`navbar-burger has-text-light ${burgerClass}`}
              type="button"
              aria-label="menu"
              onClick={() => setIsMenuOpen((state) => !state)}
            >
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </button>
          </div>
          <div className={`navbar-menu ${burgerClass}`}>
            <div className="navbar-end">
              <Link
                className="navbar-item is-size-5"
                to="/"
                onClick={() => setIsMenuOpen(false)}
              >
                <span>Home</span>
              </Link>
              <Link
                className="navbar-item is-size-5"
                to="/projects"
                onClick={() => setIsMenuOpen(false)}
              >
                <span>Projects</span>
              </Link>
              <Link
                className="navbar-item is-size-5"
                to="/blog"
                onClick={() => setIsMenuOpen(false)}
              >
                <span>Blog</span>
              </Link>
              <Link
                className="navbar-item is-size-5"
                to="/about"
                onClick={() => setIsMenuOpen(false)}
              >
                <span>About</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
export default Header
