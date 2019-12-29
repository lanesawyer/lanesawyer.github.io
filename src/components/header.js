import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const HeaderComponent = ({ siteTitle }) => (
  <header>
    <div
      style={{
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link to="/">{siteTitle}</Link>
      </h1>

      <Link to="/about">About</Link>
      <a href="https://blog.lanesawyer.dev">Blog</a>
      <Link to="/kaladin">Kaladin</Link>
      <a href="https://github.com/lanesawyer">GitHub</a>
      <a href="https://twitter.com/lanesawyer">Twitter</a>
      <a rel="me" href="https://mastodon.social/@lanesawyer">Mastodon</a>
      <a href="https://www.linkedin.com/in/lanesawyer/">LinkedIn</a>
      <a href="https://medium.com/@lanesawyer">Medium</a>
      <a href="https://www.fitbit.com/user/244S2X">Fitbit</a>
      <a href="https://www.strava.com/athletes/6106415">Strava</a>
      <a href="https://www.goodreads.com/user/show/17625748-lane-sawyer">Goodreads</a>
    </div>
  </header>
)

HeaderComponent.propTypes = {
  siteTitle: PropTypes.string,
}

HeaderComponent.defaultProps = {
  siteTitle: ``,
}

export default HeaderComponent;
