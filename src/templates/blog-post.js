import React from "react"
import { Link, graphql } from "gatsby"

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  const { previous, next } = pageContext

  const shareUrl = "http://twitter.com/share?text=" + post.frontmatter.title + "&url=https://www.fluvixx.dev/" + post.fields.slug

  const editUrl = "https://github.com/flavianunes/flavianunes.github.io/tree/master/content/blog/" + post.fields.slug + "/index.md"

  return (
    
      <h1>ok</h1>
    
  )
}

export default BlogPostTemplate


