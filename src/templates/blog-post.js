import React from "react"
import { Link, graphql } from "gatsby"

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  const { previous, next } = pageContext

  const shareUrl = "http://twitter.com/share?text=" + post.frontmatter.title + "&url=https://www.fluvixx.dev/" + post.fields.slug

  const editUrl = "https://github.com/flavianunes/flavianunes.github.io/tree/master/content/blog/" + post.fields.slug + "/index.md"

  return (
    
      <article>
     

            {post.frontmatter.title}
     
          Posted  {post.frontmatter.date} / By <Link to="/#about">Flavia Nunes</Link> /
        <section dangerouslySetInnerHTML={{ __html: post.rawMarkdownBody }} />
        <hr/>
      </article>
    
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: {slug: {eq: $slug}}) {
      id
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
      rawMarkdownBody
    }
  }
`
