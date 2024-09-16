import React from 'react'
import Header from "./Header"
import Navber from "./Navber"
import Footer from "./Footer"
import { Outlet } from 'react-router-dom'
import ToTop from "./ToTop"


const RootLayout = () => {
  return (
    <>
    <Header/>
    <Navber/>
    <Outlet/>
    <Footer/>
    <ToTop/>
    </>
  )
}

export default RootLayout