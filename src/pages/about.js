import React from 'react'
import { Link } from 'gatsby'
import Footer from '../components/footer'

let aboutPage = () => {
    return (
        <div>
            <h1>
                Who is Salem Hamidi?
            </h1>
            <p>
                Hey!! to make this easy lets call me Sal, or if we become 
                good friends you can call me YourPalSal.  I am a career driven,
                entreprenueristic looking to make a major change in my career to 
                software development and database management.  Why both?  Because
                specialization is for insects.  Just kidding.  I want career exposure to
                both as I would like to be well in all aspects of development of web and 
                applications.  
            </p>
            <p> <Link to="/contact">If you want to have me on your team, reach out!!</Link> </p>
        <Footer/>
        </div>
    )
}

export default aboutPage