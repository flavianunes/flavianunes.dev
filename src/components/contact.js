import React from "react"
import styles from "./contact.module.scss"
import { AiOutlineHeart } from "react-icons/ai"
import Button from "./button"

const Contact = () => {
    return (
        <section className={styles.contact}>
          <h2>Let's work together</h2>  
          <p>I'm open to new opotunities please give me jobs</p>
          <Button to="/contact" text="Get in touch" color="brown"/>
        </section>
    )
}


export default Contact
