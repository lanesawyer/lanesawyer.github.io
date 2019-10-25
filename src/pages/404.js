import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>404 NOT FOUND</h1>
    <p>
      You just tried to find a page that doesn&#39;t exist... While I love your
      initative and would absolutely have hidden pages were I not so lazy, there are none here!
    </p>
    <p>
      Click one of the links in the header to get
      back to the stuff I've published{' '}
      <span role="img" aria-label="winking face">
        😜
      </span>
    </p>
  </Layout>
)

export default NotFoundPage
