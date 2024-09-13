import React, { useEffect, useState } from 'react'
import Container from './Container'
import Flex from './Flex'
import logo from "../assets/logo.png"
import { FaBars } from "react-icons/fa";
import { GiTireIronCross } from "react-icons/gi";


const Header = () => {
    let [show , setShow] = useState (() =>{

    })
    
  return (
    <section className=' bg-white w-full h-[80px] px-3 fixed z-50'>
    <Container>
        <Flex className=" justify-between items-center h-[80px] ">
        <div className="w-[25%]">
          <img src={logo} alt="Logo" />
        </div>
        <div className="w-[65%] items-center  ">
          <ul className={` lg:flex justify-center items-center z-50  text-center lg:gap-8  absolute lg:static duration-700 ease-in-out ${show == true ? " bg-black  w-[170px] left-0 top-0 rounded-lg " : " w-[170px] left-[-330px] top-0 " }`}>
            <li className=' text-white flex justify-end my-3'> <GiTireIronCross className=' mr-3'/></li>
            <li  className='font-sans cursor-pointer font-bold py-[20px] lg:py-0 text-[16px]  text-[#767676]  duration-700 ease-in-out hover:lg:text-[#262626] hover:text-[#fff]  hover:pl-[20px] hover:lg:pl-[0]  rounded-lg'>
            Home</li>
            <li className='font-sans cursor-pointer font-bold py-[20px] lg:py-0 text-[16px]  text-[#767676] duration-700 ease-in-out hover:lg:text-[#262626] hover:text-[#fff]  hover:pl-[20px] hover:lg:pl-[0]    rounded-lg'>
              Shop
            </li>
            <li className='font-sans cursor-pointer font-bold py-[20px] lg:py-0 text-[16px]  text-[#767676] duration-700 ease-in-out hover:lg:text-[#262626] hover:text-[#fff]  hover:pl-[20px] hover:lg:pl-[0]    rounded-lg'>
             About
            </li>
            <li className='font-sans cursor-pointer font-bold py-[20px] lg:py-0 text-[16px]  text-[#767676] duration-700 ease-in-out hover:lg:text-[#262626] hover:text-[#fff] hover:pl-[20px] hover:lg:pl-[0]   rounded-lg'>
              Contacts
            </li>
            <li className='font-sans cursor-pointer font-bold py-[20px] lg:py-0 text-[16px]  text-[#767676] duration-700 ease-in-out hover:lg:text-[#262626] hover:text-[#fff]   hover:pl-[20px] hover:lg:pl-[0]    rounded-lg  '>Journal</li>
          </ul>
        </div>
        <div className="lg:hidden cursor-pointer" onClick={()=>setShow (!show) }>
          {show == true ? <GiTireIronCross/>:<FaBars/>}
            
            
        </div>
        </Flex>
    </Container>
    </section>
   
  )
}

export default Header