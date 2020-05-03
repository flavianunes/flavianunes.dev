import React from "react"
import PropTypes from "prop-types"
import Navbar from "./navbar"
import Footer from "./footer"

const Layout = ({ children }) => {

  return (
    <div className="container">
      <Navbar />

        <main>{children}</main>

      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
