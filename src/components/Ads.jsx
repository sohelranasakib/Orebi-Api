import React from 'react'
import Container from './Container'
import Flex from './Flex'
import ads1 from "../assets/Ad1.png"
import ads2 from "../assets/Ad2.png"
import ads3 from "../assets/Ad3.png"

const Ads = () => {
  return (
    <section className=' py-[70px] '>
        <Container>
            <Flex className=" justify-between">
                <div className=" w-[49%]">
                    <img className=' h-[98%]' src={ads1} alt="" />
                </div>
                <div className=" w-[49%]">
                    <div className=" pb-[20px]">
                        <img src={ads2} alt="" />
                    </div>
                    <div className=" ">
                        <img src={ads3} alt="" />
                    </div>
                </div>
            </Flex>
        </Container>
    </section>
  )
}

export default Ads