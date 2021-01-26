let path = require('path')

module.exports.onCreateNode= ({node, actions}) =>{
    const{createNodeField} = actions

    if (node.internal.type ==='MarkdownRemark'){
        let slug = path.basename(node.fileAbsolutePath, 'md')
        createNodeField({
            node,
            name: 'slug',
            value: slug
        })
    }
}
module.exports.createPages = async ({ graphql, actions }) => {
    let { createPage } = actions
    let blogTemplate = path.resolve('./src/templates/blog.js')
let res = await graphql (
    `query{
        allMarkdownRemark {
            edges{
                node{
                    fields{
                        slug
                    }
                }
            }
    }
}`
)
res.data.allMarkdownRemark.edges.forEach((edge) => {
    createPage ({
        component: blogTemplate,
        path: `/blog/${edge.node.fields.slug}`,
        context: {
            slug: edge.node.fields.slug
        }
    })
})


}
    




// exports.onCreateNode = ({ node, actions }) => {
//     const { createNode, createNodeField } = actions
//     // Transform the new node here and create a new node or
//     // create a new node field.
//   }