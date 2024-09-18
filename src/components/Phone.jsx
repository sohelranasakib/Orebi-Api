import React from 'react'
import imgp from "../assets/phone.png"
import Container from './Container'
import { Link } from 'react-router-dom'

const Phone = () => {
  return (
    <section className=' py-[50px]'>
   <Container>
   <div className="">
    <Link to="/product">
    <img src={imgp} alt="" />
    </Link>
    </div>
   </Container>
    </section>
  )
}

export default Phone