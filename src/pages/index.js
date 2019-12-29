import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

import me from '../images/me_lake_mason.jpg'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`lane sawyer`, `developer`, `react`]} />
    <h1>Hey there, I'm Lane</h1>
    <img src={me} alt="Me" width={300} />
    <p>
      I'm an IT consultant. This is my website. It's clearly a work in progress.
    </p>

    <p>
      It looks wonky because I'm playing around with CSS Grid and got distracted with other endeavors.
    </p>

    <Link to="/kaladin">If you like dogs, learn way too much about my amazing pupper, Kaladin!</Link>
  </Layout>
)

export default IndexPage
