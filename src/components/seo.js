import React from "react"
import { Helmet } from "react-helmet"


function SEO({ title, description }) {

  return (
    <Helmet>
      <html lang="en" />
      <meta charSet="utf-8" />
      <title>{title} | Flavia Nunes | Frontend developer. UX design enthusiast.</title>
      <meta name="description" content={description} />

      <meta name="og:title" property="og:title" content={title + " | Flavia Nunes | Frontend developer. UX design enthusiast."} />

      <link href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />


    </Helmet>  
  )
}



export default SEO
