import PropTypes from "prop-types"
import React from "react"

import Button from "./button"
import buttonStyles from "./button.module.scss"
import styles from "./navbar.module.scss"

import {AiOutlineTwitter, AiFillLinkedin, AiFillGithub} from "react-icons/ai"

const Navbar = ({ siteTitle }) => (
  <nav className={styles.navbar}>
    <ul>
      <li><Button to="/" text="Home" /></li>
      <li><Button to="/projects" text="Projects" /></li>
      <li><Button to="/contact" text="Contact" /></li>
    </ul>
    <ul className={styles.rede}>
      <li><a href="twitter" className={buttonStyles.btn + " "+ styles.social}><AiOutlineTwitter/></a></li>
      <li><a href="twitter" className={buttonStyles.btn + " "+ styles.social}><AiFillLinkedin/></a></li>
      <li><a href="twitter" className={buttonStyles.btn + " "+ styles.social}><AiFillGithub/></a></li>
    </ul>
  </nav>
)

Navbar.propTypes = {
  siteTitle: PropTypes.string,
}

Navbar.defaultProps = {
  siteTitle: ``,
}

export default Navbar
