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


                <form method="post" netlify-honeypot="bot-field" data-netlify="true" name="contact">
                    <input type="hidden" name="bot-field" />
                    <input type="hidden" name="form-name" value="contact" />

                    <label>
                        Name
                        <input type="text" name="name" id="name" />
                    </label>
                    <label>
                        Email
                        <input type="email" name="email" id="email" />
                    </label>
                    <label>
                        Subject
                        <input type="text" name="subject" id="subject" />
                    </label>
                    <label>
                        Message
                        <textarea name="message" id="message" rows="5" />
                    </label>
                    <button type="submit">Send</button>
                    </form>
                
            </section>
            
        </Layout>
    )

}

export default ContactPage
