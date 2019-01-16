import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const Kaladin = () => (
  <Layout>
    <SEO title="Kaladin" />
    <h1>Kaladin "Stormblessed" Sawyer</h1>
    <p>This page will have all the amazing information about the greatest pupper in the world, Kaladin!</p>
    <Link to="/">Go back to the boring, default homepage</Link>
  </Layout>
)

export default Kaladin
