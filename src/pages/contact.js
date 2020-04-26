import React from "react"
import ReCAPTCHA from "react-google-recaptcha";

import Layout from "../components/layout"
import SEO from "../components/seo"

import styles from "./contact.module.scss"
import btnStyles from "../components/button.module.scss"


const ContactPage = () => {

    
    return (
        <Layout>
            <SEO title="Projects" />
            <section>
                <header className={styles.header}>
                    <h1>Get in touch</h1>
                    <p className={styles.lead}>I'm open to new opportunities and chatting.</p>
                </header>

                <form name="Contact Form" method="POST" data-netlify="true" data-netlify-recaptcha="true">
                   
                    <div className={styles.formRow}>
                        <label>Email:</label>
                        <input type="email" name="email" />
                    </div>
                    <div className={styles.formRow}>
                        <label>Name:</label>
                        <input type="text" name="name" />
                    </div>
                    <div className={styles.formRow}>
                        <label>Message:</label>
                        <textarea name="message" />
                    </div>
                    <div data-netlify-recaptcha="true"></div>
                    <button type="submit" className={btnStyles.btn + " " + btnStyles.btn_red}>Send</button>
                </form>
                
            </section>
            
        </Layout>
    )

}

export default ContactPage
