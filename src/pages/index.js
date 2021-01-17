import React from 'react'
import { Link } from 'gatsby'

let  IndexPage = () => {
  return (
    <div>
      <h1>
        Hello.
      </h1>
      <h2>
        Hey there beautiful.  I am Salem Hamidi, a pursuant programmer, 
        feel free to connect.
      </h2>
      <p>Need an entry level deveoloper?<Link to="/contact">Contact Me.</Link></p>
    </div>
  )
}

export default IndexPage 

