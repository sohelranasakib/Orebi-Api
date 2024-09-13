import React from 'react'
import imgp from "../assets/phone.png"
import Container from './Container'

const Phone = () => {
  return (
    <section className=' py-[50px]'>
   <Container>
   <div className="">
        <img src={imgp} alt="" />
    </div>
   </Container>
    </section>
  )
}

export default Phone