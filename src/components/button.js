import React from "react"
import { Link } from "gatsby"

import styles from "./button.module.scss"

const Button = ({to, text, color}) => {
    const btnColor = {
        "tan": styles.btn_tan,
        "brown": styles.btn_brown,
        "red": styles.btn_red,
        "outline-tan": styles.btn_outline_tan,
        "outline-brown": styles.btn_outline_brown,
        "outline-red": styles.btn_outline_red,

    }
    return <Link to={to} className={styles.btn + " " + btnColor[color]}> {text} </Link>
}

export default Button
