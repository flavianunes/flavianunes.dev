import React from "react"
import { Link, graphql } from "gatsby"
import { AiFillGithub, AiOutlineGlobal} from "react-icons/ai"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styles from "./styles.module.scss"
import btnStyles from "../components/button.module.scss"

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
                    {(post.frontmatter.github === null) ? <a href={post.frontmatter.github} target="_blank" rel="noopener noreferrer" className={btnStyles.btn + " " +btnStyles.btn_gray + " " + styles.btn_project}> <AiFillGithub />  GitHub repositorie </a> : ""}

                    {(post.frontmatter.live === null) ? <a href={post.frontmatter.live} target="_blank"  rel="noopener noreferrer"className={btnStyles.btn + " " +btnStyles.btn_gray + " " + styles.btn_project}> <AiOutlineGlobal />  Live version</a> : ""}
                    
                    
                </header>
                
                
                <div className={styles.content} dangerouslySetInnerHTML={createMarkup()}></div>
                
            </section>

            
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
        tags,
        live,
        github,
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`