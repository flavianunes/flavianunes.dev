import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styles from "./styles.module.scss"

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark  
  const { previous, next } = pageContext

  function createMarkup() {
    return {__html: post.html}
  }

  return (
    <Layout>
            <SEO title= {post.frontmatter.title}/>
                      
            <section>
                <header>
                   
                    <h1> {post.frontmatter.title} </h1>
                </header>


                
                <div className={styles.content} dangerouslySetInnerHTML={createMarkup()}></div>
                
            </section>

            <div className={styles.gallery}>
                  <img src={ post.frontmatter.image} />
            </div>
            
        </Layout>
   
           
         

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
        title,
        image,
        tags
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`