import React from "react"

import Card from "../components/card"
import Layout from "../components/layout"
import SEO from "../components/seo"

import styles from "./projects.module.scss"


const ProjectsPage = () => {

    const projects = [

        {   title: "Teste1", 
            description: "lorem", 
            tags: ["teste", "hmm"], 
            url: "/project/teste1"
        },
        {   title: "Teste2", 
            description: "lorem", 
            tags: ["teste", "hmm"], 
            url: "/project/teste2"
        }

    ]
    
    return (
        <Layout>
            <SEO title="Projects" />
            <section>
                <header className={styles.header}>
                    <h1>Work & Projects</h1>
                    <p className={styles.lead}>Articles about projects I've been part of.</p>
                </header>
                {projects.map((project) => {
                    return (<Card title={project.title} description = {project.description} tags = {project.tags} url={project.url} key={project.url} />)
                })}
            </section>
            
        </Layout>
    )

}

export default ProjectsPage
