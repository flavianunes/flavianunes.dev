import PropTypes from "prop-types"
import React from "react"

import Button from "./button"
import buttonStyles from "./button.module.scss"
import styles from "./navbar.module.scss"

import {AiOutlineTwitter, AiFillLinkedin, AiFillGithub} from "react-icons/ai"

const Navbar = () => (
  <nav className={styles.navbar}>
    <ul className={styles.links}>
      <li><Button to="/" text="Home" /></li>
      <li><Button to="/projects" text="Projects" /></li>
      <li><Button to="/contact" text="Contact" /></li>
    </ul>
    <ul className={styles.rede}>
      <li><a href="https://twitter.com/tweetsdafla" className={buttonStyles.btn + " "+ styles.social} aria-label="Twitter" target="blank"><AiOutlineTwitter/></a></li>
      <li><a href="https://www.linkedin.com/in/flanunes/" className={buttonStyles.btn + " "+ styles.social} aria-label="Linkedin" target="blank"><AiFillLinkedin/></a></li>
      <li><a href="https://github.com/flavianunes" className={buttonStyles.btn + " "+ styles.social} aria-label="Github" target="blank"><AiFillGithub/></a></li>
    </ul>
  </nav>
)

export default Navbar
