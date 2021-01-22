import React from 'react'
import Layout from '../components/layout'
import { useStaticQuery, graphql } from 'gatsby'

let blogPage = () => {
    let data = useStaticQuery(graphql`
    query{
        allMarkdownRemark {
            edges {
                node {
                    frontmatter {
                        title
                        date
                    }
                }
            }
        }
    }
    `)
    

console.log(data)

    return (
        <Layout>
            <h1>
                Test Blog Page
            </h1>
            <p>
                Test Content for my blog page.
            </p>
        </Layout>
    )
}

export default blogPage