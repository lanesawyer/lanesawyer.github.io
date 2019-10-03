import React from 'react'
import styled from 'styled-components';

const Footer = styled.footer`
  background: #0038A8;
  color: white;
  grid-column: 1 / 2;
  grid-row: 3;
`;

const FooterComponent = () => (
  <Footer>
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
        href="https://www.gatsbyjs.org"
      >
        Gatsby
      </a>
    </div>
  </Footer>
)

export default FooterComponent;
