import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

let Footer = () =>{
    let data = useStaticQuery(graphql`
    query {
        site{
            siteMetadata{
                author
                title
            }
        }
    }
`)
    return (

        <footer>
            <p>Created by Yours Truly {data.site.siteMetadata.author} copyright 2021</p>
        </footer>
    )
}

export default Footer