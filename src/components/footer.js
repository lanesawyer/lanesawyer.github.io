import React from 'react'
import styled from 'styled-components'
import colors from './colors'

const Footer = styled.footer`
  background: ${colors.secondary};
  color: white;
  grid-column: 1 / 2;
  grid-row: 3;
`

const FooterComponent = () => (
  <Footer>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      © {new Date().getFullYear()}
    </div>
    <div>
      Built with
      {` `}
      <ul>
        <li>
          <a
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
            href="https://www.gatsbyjs.org"
          >
            Gatsby
          </a>
        </li>
        <li>
          React
        </li>
        <li>
          CSS3 (for example, I'm using CSS Grid to lay everything out in different ways)
        </li>
        <li>
          HTML5 (for example, change your OS's mode from light to dark and see what happens to my site 😁)
        </li>
        <li>
          DuckDuckGo (that's right, you can get technical answers just fine on DuckDuckGo! Make the switch!)
        </li>
        <li>
          Other stuff I'm too lazy to fill in right now!
        </li>
      </ul>
    </div>
  </Footer>
)

export default FooterComponent
