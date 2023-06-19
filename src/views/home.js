import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Virtual Wolverine</title>
        <meta property="og:title" content="Virtual Wolverine" />
      </Helmet>
    </div>
  )
}

export default Home
