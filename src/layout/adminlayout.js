import React from 'react'
import Header from "../admin/component/Header";
import Footer from "../admin/component/Footer";

function Adminlayout({children}) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>   
  )
}

export default Adminlayout;