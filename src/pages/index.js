import React from "react"

import Layout from "../components/layout"
import About from "../components/about"
import SEO from "../components/seo"
import Contact from "../components/contact"

import styles from "./index.module.scss"


const IndexPage = () => (
  <Layout>
    <SEO title="Home" description=""/>
    <header className={styles.header}>
      <h1 className={styles.display1}>I'm Flavia Nunes</h1>
      <h2 className={styles.display2}>UI/UX developer</h2>
    </header>
   <About />
   <Contact />
  </Layout>
)

export default IndexPage
