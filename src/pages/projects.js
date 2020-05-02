import React from "react"

import Card from "../components/card"
import Layout from "../components/layout"
import SEO from "../components/seo"

import styles from "./projects.module.scss"


const ProjectsPage = ({ data }) => {
 

    const projects =  data.allMarkdownRemark.edges  

    
    return (
        <Layout>
            <SEO title="Projects" />
            <section>
                <header className={styles.header}>
                    <h1>Work & Projects</h1>
                    <p className={styles.lead}>Articles about projects I've been part of.</p>
                </header>
                {projects.map((project) => {
                    return (<Card title={project.node.frontmatter.title} description = "" tags = {project.node.frontmatter.tags} url={project.node.frontmatter.slug} key={project.node.id} />)
                })}
            </section>
            
        </Layout>
    )

}

export default ProjectsPage

export const posts = graphql`
query BlogPosts {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
            tags
            slug
          }
        }
      }
    }
  }
  `