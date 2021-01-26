import React from 'react'
import Layout from '../components/layout'
import { Link, useStaticQuery, graphql } from 'gatsby'

let BlogPage = () => {
    let data = useStaticQuery(graphql`
    query{
        allMarkdownRemark {
            edges {
                node {
                    frontmatter {
                        title
                        date
                    }
                    fields{
                            slug
                        }
                    }
                }
            }
        }
    
    `)
    

console.log(data)

    return (
        <Layout>
           <>
            <h1>
                Test Blog Page
            </h1>
                <ol>
                    {data.allMarkdownRemark.edges.map((edge) => {
                        return (
                            <li>
                                <Link to = {`/blog/${edge.node.fields.slug}`}>
                                    <h2>
                                    {edge.node.frontmatter.title}
                                    </h2>
                                    <p>
                                    {edge.node.frontmatter.date}   
                                    </p>
                                </Link>
                            </li>
                        )}
                    )}
                </ol>
          </>
        </Layout>
    )
}

export default BlogPage