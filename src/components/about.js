import React from "react"

import styles from "./about.module.scss"

const About = () => {
    return (
        <section className={styles.about}>
            <div className={styles.text}>
                <p>Hello, I'm a UI/UX developer based in Brazil who loves building things for the web, focusing on UI and accessibility. I like to work with JavaScript (ES7+), HTML, CSS (Sass), React and Gatsby, but I am always open to learn new things. </p>

                <p> Besides coding, I enjoy creating user-centered UIs and I also have experience with Adobe XD, Figma, usability and accessibility evaluation. My hobbies include creating Spotify playlists (<a href="https://open.spotify.com/playlist/72kKVyzwVgkgmeBqU3X84q?si=46lgUrBfRFi8_VaHICg0xw" target="_blank" rel="noopener noreferrer">here's one</a>) and playing the ukulele.</p>
            </div>
            <div className={styles.pic}>
                <img src="/img/flavia.jpg"/>
            </div>
            <small className={styles.description}>that's me!</small>

            
        </section>
    )
}

export default About