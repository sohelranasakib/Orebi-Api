import React from 'react'
import banner from "../assets/banner.png"
import Container from './Container'
import Flex from './Flex'
import { TbTruckDelivery } from "react-icons/tb";
import { IoReload } from "react-icons/io5";


const Banner = () => {
    return (
        <section className=' pt-[178px]'>
            <div className="">
                <img src={banner} alt="" />
            </div>
            <Container>
                <Flex className=" justify-between">
                    <div className=" flex items-center gap-2">
                        <h3 className='text-[32px]  text-[#262626]  font-sans font-bold'>2</h3>
                        <h2 className=' font-sans font-bold text-[20px]  text-[#262626]'>Two years warranty</h2>
                    </div>
                    <div className=" flex items-center gap-2">
                       <TbTruckDelivery className='lg:text-[22px]  text-[32px]  text-[#262626]'/>
                       <h2 className='  font-sans font-bold text-[20px]  text-[#262626]'>Free shopping</h2>
                    </div>
                    <div className=" flex items-center gap-2">
                    <IoReload className='lg:text-[22px]  text-[32px]  text-[#262626]'/>
                    <h2 className='font-sans font-bold text-[16px]  text-[#262626]'>Return policy in 30 days</h2>
                    </div>
                </Flex>
            </Container>
        </section>
    )
}

export default Banner