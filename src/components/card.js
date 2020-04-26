import React from "react"
import { Link } from "gatsby"

import styles from "./card.module.scss"

const Card = ({title, description, tags, url}) => {
    
    return (
        <article className={styles.card}>
            <Link to={url}>
                <h2>{title}</h2>
                <p>{description}</p>
                <ul>
                {tags.map((tag) => {
                       return (<li>{tag}</li>)
                    })}
                </ul>
            </Link>
        </article>
    )
   
}

export default Card
