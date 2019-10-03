import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import Header from './header'
import Footer from './footer'
import './layout.css'

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  grid-auto-rows: minmax(100px, auto);
`;

const Content = styled.div`
  margin: 0 auto;
  max=width: 960;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0;
  grid-column: 1 / 4;
  grid-row: 2;
`;

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <Grid>
        <Header siteTitle={data.site.siteMetadata.title} />
        <Content>
          {children}
        </Content>
        <Footer />
      </Grid>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
