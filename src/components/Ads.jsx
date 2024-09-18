import React from 'react'
import Container from './Container'
import Flex from './Flex'
import ads1 from "../assets/Ad1.png"
import ads2 from "../assets/Ad2.png"
import ads3 from "../assets/Ad3.png"
import { Link } from 'react-router-dom'

const Ads = () => {
  return (
    <section className=' lg:py-[70px] py-[10px] lg:px-0 px-2'>
        <Container>
            <Flex className=" justify-between">
                <div className=" w-[49%]">
                <Link to="/electronics">
                    <img className=' h-[98%]' src={ads1} alt="" />
                    </Link>
                </div>
                <div className=" w-[49%]">
                    <div className=" pb-[20px]">
                        <Link to="/electronics">
                        <img src={ads2} alt="" />
                        </Link>
                    </div>
                    <div className=" ">
                        <Link to="/furniture">
                        <img src={ads3} alt="" />
                        </Link>
                       
                    </div>
                </div>
            </Flex>
        </Container>
    </section>
  )
}

export default Ads