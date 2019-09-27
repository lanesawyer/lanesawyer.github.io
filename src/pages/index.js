import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

import me from '../images/me_lake_mason.jpg'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`lane sawyer`, `developer`, `react`]} />
    <h1>Hey there, I'm Lane</h1>
    <img src={me} alt="Me" />
    <p>
      I'm an IT consultant. This is my website. It's clearly a work in progress.
    </p>
    <Link to="/kaladin">Learn about my amazing pupper, Kaladin!</Link>
  </Layout>
)

export default IndexPage
