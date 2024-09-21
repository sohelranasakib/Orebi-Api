import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import { RxCaretRight } from "react-icons/rx";
import { Link } from 'react-router-dom';

const MyAccount = () => {
  return (
    <section className=' pt-[185px] pb-[50px] lg:px-0 px-4'>
        <Container>
        <div className="lg:pb-[50px] pb-[10px]">
            <h2 className="font-sans text-[#262626] lg:text-[36px] text-[20px] font-bold">
              My Account
            </h2>
            <h3 className="flex items-center gap-x-2 font-sans text-[12px] text-[#767676] font-normal">
              <Link to="/">Home</Link> <RxCaretRight /> My Account
            </h3>
          </div>
    
            <div className=" flex justify-between">
                <div className=" w-[20%]">
                    <ul>
                        <li className=' font-sans font-normal text-[18px] text-[#767676] border-b-[1px] border-[#F0F0F0] py-4 hover:font-bold hover:text-[#262626]  duration-500 ease-in-out'>Dashboard</li>
                        <li className=' font-sans font-normal text-[18px] text-[#767676] border-b-[1px] border-[#F0F0F0] py-4 hover:font-bold hover:text-[#262626]  duration-500 ease-in-out'>Others</li>
                        <li className=' font-sans font-normal text-[18px] text-[#767676] border-b-[1px] border-[#F0F0F0] py-4 hover:font-bold hover:text-[#262626]  duration-500 ease-in-out'>Donwloads</li>
                        <li className=' font-sans font-normal text-[18px] text-[#767676] border-b-[1px] border-[#F0F0F0] py-4 hover:font-bold hover:text-[#262626]  duration-500 ease-in-out'>Addresses</li>
                        <li className=' font-sans font-normal text-[18px] text-[#767676] border-b-[1px] border-[#F0F0F0] py-4 hover:font-bold hover:text-[#262626]  duration-500 ease-in-out'>Account details</li>
                        <li className=' font-sans font-normal text-[18px] text-[#767676] border-b-[1px] border-[#F0F0F0] py-4 hover:font-bold hover:text-[#262626]  duration-500 ease-in-out'>Logout</li>
                    </ul>
                </div>
                <div className=" w-[70%]">
                <div className=" mt-7">
                                <h3 className='font-dmsans text-[16px] font-normal leading-[30px] text-[#767676]'>Hello <span className='text-[#262626]'>admin</span> (not <span className='text-[#262626]'>admin</span>? <span className='text-[#262626]'>Log out</span>)</h3>
                                <p className='font-dmsans text-[16px] font-normal leading-[30px] text-[#767676] w-[80%] lg:mt-[50px]'>From your account dashboard you can view your <span className='text-[#262626]'>recent orders</span>, manage your <span className='text-[#262626]'>shipping and billing addresses</span>, and <span className='text-[#262626]'>edit your password and account details.</span></p>
                            </div>
                </div>
            </div>
           
        </Container>
    </section>
  )
}

export default MyAccount