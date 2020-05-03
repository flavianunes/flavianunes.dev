import React from "react"
import {navigate} from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import styles from "./contact.module.scss"
import btnStyles from "../components/button.module.scss"


const ContactPage = ({ location }) => {

    const blur = (location.hash ==="#success") ? styles.blur : "";
    
    return (

        <Layout>
            <SEO title="Projects" description="Hey there, I'm open to new opportunities and chatting. Get in touch with me." />

            {(location.hash === "#success") ?
                (<div className={styles.modal}>
                    <span className={styles.closeBtn} onClick={() => navigate("/contact")}>&times;</span>
                    <p className={styles.lead}>Thank you for getting in touch! </p>
                    <p>I appreciate your contact and will get back to you soon!                 Have a great day!</p>
                </div>) : ""
            }

            
            <section className={blur}>
                <header className={styles.header}>
                    <h1>Get in touch</h1>
                    <h2 className={styles.lead}>I'm open to new opportunities and chatting.</h2>
                </header>


                <form method="post" netlify-honeypot="bot-field" data-netlify="true" name="contact" action="#success" className={styles.form}>
                    <input type="hidden" name="bot-field" />
                    <input type="hidden" name="form-name" value="contact"/>

                    <div className={styles.row}>
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name"  placeholder="Jon Example"  required/>
                    </div>

                    <div className={styles.row}>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email"  placeholder="example@mail.com" required/>
                    </div>
        
                    <div className={styles.row}>
                        <label htmlFor="message">Message</label>
                        <textarea name="message" id="message" rows="5"  placeholder="Hi there! I wanted to talk to you about..." required/>
                    </div>

                    <button type="submit" className={btnStyles.btn + " " + btnStyles.btn_tan + " " + styles.btnSubmit}>Send</button>
                </form>
                
            </section>
            
        </Layout>
    )

}

export default ContactPage
