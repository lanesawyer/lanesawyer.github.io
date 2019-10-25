import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled from 'styled-components';
import colors from "./colors";

const MyLink = ({ text, path }) => (
  <Link
    to={path}
    style={{
      color: `white`,
      textDecoration: `none`,
      padding: `0 30px 0 0`,
    }}
  >
    {text}
  </Link>
)

const MyExternalLink = styled.a`
  color: white;
  text-decoration: none;
  padding: 0 30px 0 0;
`;

const Header = styled.header`
  background: ${colors.primary};
  margin-bottom: 1.45rem;
  grid-column: 2 / 4;
  grid-row: 1;
`;

const HeaderComponent = ({ siteTitle }) => (
  <Header>
    <div
      style={{
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <MyLink text={siteTitle} path="/" />
      </h1>

      <MyLink text="About" path="/about" />
      <MyLink text="Blog" path="/blog" />
      <MyLink text="Kaladin" path="/kaladin" />
      <MyExternalLink href="https://github.com/lanesawyer">GitHub</MyExternalLink>
      <MyExternalLink href="https://twitter.com/lanesawyer">Twitter</MyExternalLink>
      <MyExternalLink href="https://www.linkedin.com/in/lanesawyer/">LinkedIn</MyExternalLink>
      <MyExternalLink href="https://medium.com/@lanesawyer">Medium</MyExternalLink>
      <MyExternalLink href="https://www.fitbit.com/user/244S2X">Fitbit</MyExternalLink>
      <MyExternalLink href="https://www.strava.com/athletes/6106415">Strava</MyExternalLink>
      <MyExternalLink href="https://www.goodreads.com/user/show/17625748-lane-sawyer">Goodreads</MyExternalLink>
    </div>
  </Header>
)

HeaderComponent.propTypes = {
  siteTitle: PropTypes.string,
}

HeaderComponent.defaultProps = {
  siteTitle: ``,
}

export default HeaderComponent;
