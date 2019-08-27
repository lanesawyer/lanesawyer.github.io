import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const BlogPage = () => (
  <Layout>
    <SEO title="Blog" keywords={[`lane sawyer`, `developer`, `react`]} />
    <h1>Blog</h1>
    <p>
      Musings will go here. Until then, check out my Medium for old thoughts:
      <a href="https://medium.com/@lanesawyer">Medium</a>
    </p>
  </Layout>
)

export default BlogPage
