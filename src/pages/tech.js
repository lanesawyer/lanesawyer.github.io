import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const BlogPage = () => (
  <Layout>
    <SEO title="Blog" keywords={[`lane sawyer`, `tech`, `privacy`, `accessibility`]} />
    <h1>Recommended Technologies I use to stay safe and productive on the Internet</h1>
    <p>I will add a lot more details, but here's a few of my favorite pieces of free and open-source software.</p>
    <ul>
        <li>Firefox - Browser</li>
        <li>Signal - Group chats (with fallback insecure text messaging for the less privacy inclined in my life)</li>
        <li>Ubuntu - Home computer OS</li>
        <li>Bitwarden - Password manager</li>
        <li>NextCloud - Cloud storage and file management</li>
        <li>Keybase - Identity and Trust software for proving you are who you say you are</li>
    </ul>

    <h2>Recommended Setup for wrangling your data and building a secure online life</h2>
    <p>Again, I'll add a lot more details, but for now here are some of my suggestions for keeping your personal data private on the web.</p>
    <p>I also readily acknowledge that not everyone can afford to pay for email and other technologies, which is an unfortunate truth in our society. Instead, people have to sell their personal data to get access to email with providers like Gmail.</p>
    <ul>
        <li>Pay for email. I use Fastmail but Protonmail is fantastic as well (bonus points if you get your own domain)</li>
        <li>Pay for (or host) your own private cloud. I'm currently using Microsoft but working on migrating to NextCloud</li>
        <li>Gather all your documents into one single cloud account. I keep my Dropbox, Google, Microsoft, and other cloud accounts so I can continue to collaborate with people in the existing shared files that I have sitting in those other accounts, but otherwise all my data is on 1 local hard drive that is backed up and also stored in the cloud.</li>
        <li>Curate your list of contacts and keep them all in one place (whether in cloud software or with your email provider if they have Contacts functionality.</li>
        <li>Delete all that music you pirated when you were 14. Keep the stuff you bought and get it into the same single place as your other documents.</li>
        <li>Do the same for photos and get them all in one place.</li>
        <li>More to come.</li>
    </ul>
  </Layout>
)

export default BlogPage
