import React from "react"
import { Helmet } from "react-helmet"
import { JsonLd } from './JsonLd'


function SEO({ title, description }) {

  return (
    <Helmet>
      <html lang="en" />
      <meta charSet="utf-8" />
      <title>{title} | Flavia Nunes | Frontend developer</title>
      <meta name="description" content={description} />

      <meta name="og:title" property="og:title" content={title + " | Flavia Nunes | Frontend developer. UX design enthusiast."} />

      <JsonLd>
          {{
            '@context': 'https://schema.org',
            '@type': 'Organization',
            url: 'http://flavianunes.dev',
            name: 'Flavia Nunes | Frontend developer',
            contactPoint: {
              '@type': 'ContactPoint',
              email: 'flavianunesdev@gmail.com',
            },
          }}
        </JsonLd>

      <script async src="https://www.googletagmanager.com/gtag/js?id=UA-XXX-X"></script>
      <script type="application/ld+json">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('config', 'UA-151747698-2');
      `}</script>


    </Helmet>  
  )
}



export default SEO
