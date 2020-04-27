import React from "react"
import styles from "./footer.module.scss"
import { AiOutlineCopyrightCircle} from "react-icons/ai"

const Footer = () => {
    return (
        <footer className={styles.footer}>
             <AiOutlineCopyrightCircle/> 
             <p> Flavia Nunes {new Date().getFullYear()}, built with <a href="https://www.gatsbyjs.org">Gatsby</a> & <span className="text-red">love </span></p>
             
        </footer>
    )
}


export default Footer
