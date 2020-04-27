import React from "react"
import { Link, graphql } from "gatsby"

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark  
  const { previous, next } = pageContext

  return (
   
           <h1> {post.frontmatter.title} </h1>
         

  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`