import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

// import "./header.module.scss"
import headerStyling from "./header.module.scss"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <header className={headerStyling.header}>
      <h1>
        <Link className={headerStyling.title} to="/">
          {data.site.siteMetadata.title}
        </Link>
      </h1>
      <nav>
        <ul className={headerStyling.nav_list}>
          <li>
            <Link
              className={headerStyling.nav_item}
              activeClassName={headerStyling.active_nav_item}
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={headerStyling.nav_item}
              activeClassName={headerStyling.active_nav_item}
              to="/about"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className={headerStyling.nav_item}
              activeClassName={headerStyling.active_nav_item}
              to="/blog"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              className={headerStyling.nav_item}
              activeClassName={headerStyling.active_nav_item}
              to="/contact"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
