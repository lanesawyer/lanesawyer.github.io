import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const BlogPage = () => (
  <Layout>
    <SEO title="About" keywords={[`lane sawyer`, `about`]} />
    <h1>About</h1>
    <p>
      I'm Lane. I'm an IT consultant with a passion for accesibility, privacy, and the user experience.
      Get to know me by clicking around my social links in the website header (at least until I manage to make a better about page).
    </p>
  </Layout>
)

export default BlogPage
