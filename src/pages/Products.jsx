import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import { FaListUl } from "react-icons/fa";
import { IoGrid } from "react-icons/io5";

const Products = () => {
    return (
        <section className=' pt-[180px]'>
            <Container>
                <Flex>
                    <div className=" w-[30%]">Category</div>
                    <div className=" w-[70%]">
                        <div className=" flex justify-between">
                            <div className="flex gap-4 items-center">
                                <div className="lg:h-[50px] h-[40px] lg:w-[50px] w-[40px] flex justify-center items-center text-[#000] border-[1px] border-[#000] text-[20px]">
                                    < IoGrid className=' text-[26px]' />
                                </div>
                                <div className=" lg:h-[50px] h-[40px] lg:w-[50px] w-[40px] flex justify-center items-center text-[#000] border-[1px] border-[#000] text-[20px]">
                                    < FaListUl className=' text-[26px]' />
                                </div>
                            </div>
                            <div className=" flex gap-5 items-center">
                                <div className="">
                                    <label className='text-[16px] font-sans text-[#767676] font-normal'>Sort by: </label>
                                    <select name="" id="" className='border-[1px] border-[#767676] rounded-sm  lg:px-[60px] px-[40px] py-[8px] text-[16px] font-sans text-[#767676] font-normal lg:mt-0 mt-[20px]'>
                                        <option value="">Featured...</option>
                                        <option value="">30</option>
                                        <option value="">24</option>
                                    </select>
                                </div>
                                <div className="">
                                    <label className='text-[16px] font-sans text-[#767676] font-normal'>Show : </label>
                                    <select  name="" id="" className='border-[1px] border-[#767676] rounded-sm lg:px-[40px] px-[30px] py-[8px] text-[16px] font-sans text-[#767676] font-normal lg:mt-0 mt-[20px]'>
                                        <option value="9">9</option>
                                        <option value="18">18</option>
                                        <option value="27">27</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className=""></div>
                    </div>
                </Flex>
            </Container>
        </section>
    )
}

export default Products