import React from 'react'
import Container from './Container'
import Flex from './Flex'
import Arrivals from './Arrivals'

const NewArrivals = () => {
  return (
   <section className=' pb-[40px]'>
    <Container>
    <h2 className=' font-sans font-bold text-[32px]  text-[#262626] pb-[20px]'>New Arrivals</h2>
        <Flex className=" justify-between flex-wrap">
            <Arrivals/>
            <Arrivals/>
            <Arrivals/>
            <Arrivals/>
        </Flex>
    </Container>
   </section>
  )
}

export default NewArrivals