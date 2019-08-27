import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Footer = () => (
  <footer
    style={{
      background: '#0038A8',
      color: 'white'
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      © {new Date().getFullYear()}, Built with
      {` `}
      <a
        style={{
          color: `white`,
          textDecoration: `none`,
        }} 
        href="https://www.gatsbyjs.org">Gatsby</a>
    </div>
  </footer>
)

export default Footer
