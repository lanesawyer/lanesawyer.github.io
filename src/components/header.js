import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#9B4F96`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
            padding: `0 30px 0 0`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <Link
        to="/blog"
        style={{
          color: `white`,
          textDecoration: `none`,
          padding: `0 30px 0 0`,
        }}
      >
        Blog
      </Link>
      <Link
        to="/kaladin"
        style={{
          color: `white`,
          textDecoration: `none`,
          padding: `0 30px 0 0`,
        }}
      >
        Kaladin
      </Link>
      <a
        style={{
          color: `white`,
          textDecoration: `none`,
          padding: `0 30px 0 0`,
        }}
        href="https://github.com/lanesawyer"
      >
        Github
      </a>
      <a
        style={{
          color: `white`,
          textDecoration: `none`,
          padding: `0 30px 0 0`,
        }}
        href="https://twitter.com/lanesawyer"
      >
        Twitter
      </a>
      <a
        style={{
          color: `white`,
          textDecoration: `none`,
          padding: `0 30px 0 0`,
        }}
        href="https://www.linkedin.com/in/lanesawyer/"
      >
        LinkedIn
      </a>
      <a
        style={{
          color: `white`,
          textDecoration: `none`,
          padding: `0 30px 0 0`,
        }}
        href="https://medium.com/@lanesawyer"
      >
        Medium
      </a>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
