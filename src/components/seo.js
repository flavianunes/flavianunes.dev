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

      


    </Helmet>  
  )
}



export default SEO
