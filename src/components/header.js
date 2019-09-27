import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const MyLink = ({ text, path }) => (
  <Link
    to={`/${path}`}
    style={{
      color: `white`,
      textDecoration: `none`,
      padding: `0 30px 0 0`,
    }}
  >
    {text}
  </Link>
)

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
        <MyLink text={siteTitle} path="/" />
      </h1>

      <MyLink text="Blog" path="/blog" />
      <MyLink text="Kaladin" path="/kaladin" />
      <MyLink text="Github" path="https://github.com/lanesawyer" />
      <MyLink text="Twitter" path="https://twitter.com/lanesawyer" />
      <MyLink text="LinkedIn" path="https://www.linkedin.com/in/lanesawyer/" />
      <MyLink text="Medium" path="https://medium.com/@lanesawyer" />
      <MyLink text="Fitbit" path="https://www.fitbit.com/user/244S2X" />
      <MyLink text="Strava" path="https://www.strava.com/athletes/6106415" />
      <MyLink
        text="Goodreads"
        path="https://www.goodreads.com/user/show/17625748-lane-sawyer"
      />
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
