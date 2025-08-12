import React from 'react'
import Header from "../components/Header";
import Footer from "../components/Footer";

import "../assets/lib/animate/animate.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/style.css";
import "../assets/importfile.css";



function weblayout({children}) {
  return (
    <>
        <Header />
        {children}
        <Footer />
    </> 
  )
}

export default weblayout;