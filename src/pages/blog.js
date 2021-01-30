import React from 'react'
import Layout from '../components/layout'
import { Link, useStaticQuery, graphql } from 'gatsby'
import blogStyles from './blog.module.scss'

let BlogPage = () => {
    let data = useStaticQuery(graphql`
    query{
        allContentfulBlogPost (
          sort: {fields:publishedDate, order:DESC}
        ){
          edges {
            node {
              title 
              slug
              publishedDate (formatString:"MMMM Do, YYYY")
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
                <ol className = {blogStyles.posts}>
                    {data.allContentfulBlogPost.map((edge) => {
                        return (
                            <li className = {blogStyles.post}>
                                <Link to = {`/blog/${edge.node.slug}`}>
                                    <h2>
                                    {edge.node.title}
                                    </h2>
                                    <p>
                                    {edge.node.publishedDate}   
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