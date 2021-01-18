import React from 'react'
import { Link } from 'gatsby'
import Footer from 'components/footer'

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
      <p>Needdafdsafasd an entry level deveoloper?<Link to="/contact">Contact Me.</Link></p>
      <Footer/>
    </div>
  )
}

export default IndexPage 

