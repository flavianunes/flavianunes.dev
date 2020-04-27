import React from "react"
import { Link } from "gatsby"

import styles from "./card.module.scss"

const Card = ({title, description, tags, url, id}) => {
    let i = 0;
    return (

        <article className={styles.card} key={id}>
            <Link to={url}>
                <h2>{title}</h2>
                <p>{description}</p>
                <ul>
                {tags.map((tag) => {
                       return (<li key={tag}>{tag}</li>)
                    })}
                </ul>
            </Link>
        </article>
    )
   
}

export default Card
