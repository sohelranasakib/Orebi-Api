import React, { useEffect, useRef, useState } from 'react'
import Container from './Container'
import Flex from './Flex'
import logo from "../assets/logo.png"
import { FaBars } from "react-icons/fa";
import { GiTireIronCross } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";


const Header = () => {
  let [show, setShow] = useState(false);
  let berref = useRef();

  useEffect(() => {
    document.addEventListener("click", (e) => {
        if (berref.current.contains(e.target) === true) {
            setShow(!show);
        } else {
            setShow(false);
        }
    });
}, [show]);
 
  return (
    <>
    <section className='bg-white w-full fixed  lg:h-[80px]  z-50 px-3  '>
    <Container>
        <Flex className=" justify-center items-center h-[80px] w-full  ">
        <div className="w-[25%]">
          <img src={logo} alt="Logo" />
        </div>
        <div className="w-[75%] ">
        <ul className={`lg:flex lg:flex-row flex flex-col gap-y-3 gap-x-10  pl-[20px] pt-[20px] lg:pt-0 font-sans text-[#767676] text-[18px] font-medium lg:static fixed duration-[800ms]  ${show == true ? "bg-[#262626] top-[0px] left-0 w-1/2 h-full py-2" : "top-[0px] left-[-250px] h-full"}`}>
        <li className='text-white flex justify-between items-center lg:hidden'>Menu <RxCross2 className='mr-[20px]'/></li>
            <li  className='font-sans cursor-pointer font-bold py-[5px] lg:py-0 text-[16px]  text-[#767676]  duration-700 ease-in-out hover:lg:text-[#262626] hover:text-[#262626]  hover:pl-[20px] hover:lg:pl-[0] hover:bg-white rounded-lg'>
            Home</li>
            <li className='font-sans cursor-pointer font-bold py-[5px] lg:py-0 text-[16px]  text-[#767676] duration-700 ease-in-out hover:lg:text-[#262626] hover:text-[#262626]  hover:pl-[20px] hover:lg:pl-[0] hover:bg-white rounded-lg'>
              Shop
            </li>
            <li className='font-sans cursor-pointer font-bold py-[5px] lg:py-0 text-[16px]  text-[#767676] duration-700 ease-in-out hover:lg:text-[#262626] hover:text-[#262626]  hover:pl-[20px] hover:lg:pl-[0] hover:bg-white rounded-lg'>
              About
            </li>
            <li className='font-sans cursor-pointer font-bold py-[5px] lg:py-0 text-[16px]  text-[#767676] duration-700 ease-in-out hover:lg:text-[#262626] hover:text-[#262626]  hover:pl-[20px] hover:lg:pl-[0] hover:bg-white rounded-lg'>
             Contacts
            </li>
            <li className='font-sans cursor-pointer font-bold py-[5px] lg:py-0 text-[16px] text-[#767676] duration-700 ease-in-out hover:lg:text-[#262626] hover:text-[#262626]  hover:pl-[20px] hover:lg:pl-[0] hover:bg-white rounded-lg'>Journal</li>
          </ul>
        </div>
        {/* <div className="lg:hidden cursor-pointer" onClick={()=>setShow (!show) }>
          {show == true ? <GiTireIronCross/>:<FaBars/>}
            
            
        </div> */}
           <div ref={berref} className="lg:hidden pl-5 pr-5">
                        <FaBars className='text-[30px]' />
                    </div>
        </Flex>
    </Container>
    </section>
    </>
  )
}

export default Header
