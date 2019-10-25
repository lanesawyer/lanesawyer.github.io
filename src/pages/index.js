import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

import H1 from '../components/h1'

import me from '../images/me_lake_mason.jpg'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`lane sawyer`, `developer`, `react`]} />
    <H1>Hey there, I'm Lane</H1>
    <img src={me} alt="Me" width={300} />
    <p>
      I'm an IT consultant. This is my website. It's clearly a work in progress.
    </p>

    <p>
      It looks wonky because I'm playing around with CSS Grid and got distracted with my{" "}
      <a href="https://adventure.lanesawyer.dev">Adventure Planner</a> project.
    </p>

    <p>
      I'm also distracted by some CSS art I've started building!
    </p>
    <iframe height="656" style={{width: "100%" }} scrolling="no" title="Square-Pokeball" src="https://codepen.io/lanesawyer/embed/xxxgYQN?height=656&theme-id=dark&default-tab=html,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/lanesawyer/pen/xxxgYQN'>Square-Pokeball</a> by Lane Sawyer
  (<a href='https://codepen.io/lanesawyer'>@lanesawyer</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

    <Link to="/kaladin">And if you like dogs, learn way too much about my amazing pupper, Kaladin!</Link>
  </Layout>
)

export default IndexPage
