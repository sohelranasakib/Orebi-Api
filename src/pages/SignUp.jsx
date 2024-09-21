import React, { useState } from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";


const Signup = () => {

let [pshow, setPshow] = useState(false)
let [pshowe, setPshowe] = useState(false)
    
    return (
        <section className='pt-[190px] px-3'>
            <Container>
                <form action="">
                    <div className=" items-center relative after:absolute after:contain-[''] after:h-[2px] after:w-[100%] lg:after:bottom-[-50px] after:bottom-[-10px] after:left-0 after:bg-[#BCC6CC]">
                        <h2 className='font-sans font-bold   lg:text-[42px] text-[32px]  text-[#262626] '>Sign up</h2>
                        <h3 className='font-sans font-bold   lg:text-[16px] text-[12px]  text-[#262626] '>Home  +  Sign up</h3>
                        <p className='font-sans font-medium   lg:text-[16px] text-[12px]  text-[#262626] lg:pt-[50px] pt-[15px] lg:w-[600px]  '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
                    </div>
                  
                    <h2 className='font-sans font-bold   lg:text-[42px] text-[22px]  text-[#262626] lg:mt-[100px] mt-[20px]'>Your Personal Details</h2>
                    <div className=" lg:flex lg:justify-between ">


                        <div className="lg:w-[48%] w-full lg:px-0 px-3">
                            <h3 className='font-sans font-bold   lg:text-[18px] text-[16px]  text-[#262626] lg:pt-[50px] pt-[15px]'>First Name</h3>
                            <input className='w-full lg:h-[50px] h-[30px] border-b-2 outline-none' type="text" placeholder='First Name...' />
                        </div>
                        <div className="lg:w-[48%] w-full lg:px-0 px-3">
                            <h3 className='font-sans font-bold lg:text-[18px] text-[16px]  text-[#262626] lg:pt-[50px] pt-[15px] '>Last Name</h3>
                            <input className='w-full lg:h-[50px] h-[30px] border-b-2 outline-none' type="text" placeholder='Last Name...' />
                        </div>
                    </div>
                    <div className=" lg:flex lg:justify-between relative after:absolute after:contain-[''] after:h-[2px] after:w-[100%] lg:after:bottom-[-80px] after:bottom-[-20px] after:left-0 after:bg-[#BCC6CC] ">


                        <div className="lg:w-[48%] w-full lg:px-0 px-3">
                            <h3 className='font-sans font-bold lg:text-[18px] text-[16px]  text-[#262626] lg:pt-[50px] pt-[15px] '>Email address</h3>
                            <input className='w-full lg:h-[50px] h-[30px] border-b-2 outline-none' type="text" placeholder='Your Email address...' />
                        </div>
                        <div className="lg:w-[48%] w-full lg:px-0 px-3">
                            <h3 className='font-sans font-bold lg:text-[18px] text-[16px]  text-[#262626] lg:pt-[50px] pt-[15px]'>Phone</h3>
                            <input className='w-full lg:h-[50px] h-[30px] border-b-2 outline-none' type="text" placeholder='Your Phone number...' />
                        </div>



                    </div>
                    <div className="">
                        <h2 className='font-sans font-bold lg:text-[42px] text-[22px]  text-[#262626] lg:mt-[120px] mt-[50px]'>New Customer</h2>
                    </div>
                    <div className=" lg:flex lg:justify-between  ">


                        <div className="lg:w-[48%] w-full lg:px-0 px-3">
                            <h3 className='font-sans font-bold lg:text-[18px] text-[16px]  text-[#262626] lg:pt-[50px] pt-[15px]'>Address 1</h3>
                            <input className='w-full lg:h-[50px] h-[30px] border-b-2 outline-none' type="text" placeholder='---' />
                        </div>
                        <div className="lg:w-[48%] w-full lg:px-0 px-3">
                            <h3 className='font-sans font-bold lg:text-[18px] text-[16px]  text-[#262626] lg:pt-[50px] pt-[15px]'>Address 2</h3>
                            <input className='w-full lg:h-[50px] h-[30px] border-b-2 outline-none' type="text" placeholder='---' />
                        </div>



                    </div>


                    <div className=" lg:flex lg:justify-between  ">


                        <div className="lg:w-[48%] w-full lg:px-0 px-3">
                            <h3 className='font-sans font-bold lg:text-[18px] text-[16px]  text-[#262626] lg:pt-[50px] pt-[15px]'>City</h3>
                            <input className='w-full lg:h-[50px] h-[30px] border-b-2 outline-none' type="text" placeholder='Your City...' />
                        </div>
                        <div className="lg:w-[48%] w-full lg:px-0 px-3">
                            <h3 className='font-sans font-bold lg:text-[18px] text-[16px]  text-[#262626] lg:pt-[50px] pt-[15px]'>Post Code</h3>
                            <input className='w-full lg:h-[50px] h-[30px] border-b-2 outline-none' type="text" placeholder='00000...' />
                        </div>



                    </div>
                    <div className=" lg:flex lg:justify-between relative after:absolute after:contain-[''] after:h-[2px] after:w-[100%] lg:after:bottom-[-80px] after:bottom-[-15px] after:left-0 after:bg-[#BCC6CC] ">


                        <div className="lg:w-[48%] w-full lg:px-0 px-3">
                            <h3 className='font-sans font-bold lg:text-[18px] text-[16px]  text-[#262626] lg:pt-[50px] pt-[15px]'>Division</h3>
                            <input className='w-full lg:h-[50px] h-[30px] border-b-2 outline-none' type="text" placeholder='Please select' />
                        </div>
                        <div className="lg:w-[48%] w-full lg:px-0 px-3">
                            <h3 className='font-sans font-bold lg:text-[18px] text-[16px]  text-[#262626] lg:pt-[50px] pt-[15px]'>District</h3>
                            <input className='w-full lg:h-[50px] h-[30px] border-b-2 outline-none' type="text" placeholder='Please select' />
                        </div>



                    </div>

                    <div className="">
                        <h2 className='font-sans font-bold lg:text-[42px] text-[22px]  text-[#262626] lg:mt-[120px] mt-[40px]'>Your Password</h2>
                    </div>
                    <div className=" lg:flex lg:justify-between  ">


                        <div className="lg:w-[48%] w-full lg:px-0 px-3 relative ">
                            <h3 className='font-sans font-bold lg:text-[18px] text-[16px] text-[#262626] lg:pt-[50px] pt-[15px] '>Password </h3>
                            <input className='w-full lg:h-[50px] h-[30px] border-b-2 outline-none' type={pshow ? "text" : "password"} placeholder='Password' />
                            <div onClick={() => setPshow(!pshow)} className=" absolute bottom-[10px]  right-0">
                                {pshow == true ? <FaEye /> : <FaEyeSlash />}


                            </div>
                        </div>
                        <div className="lg:w-[48%] w-full lg:px-0 px-3 relative ">
                            <h3 className='font-sans font-bold lg:text-[18px] text-[16px]  text-[#262626] lg:pt-[50px] pt-[15px] '>Repeat  Password </h3>
                            <input className='w-full lg:h-[50px] h-[30px] border-b-2 outline-none' type={pshowe ? "text" : "password"} placeholder='Password' />
                            <div onClick={() => setPshowe(!pshowe)} className=" absolute bottom-[10px]  right-0">
                                {pshowe == true ? <FaEye /> : <FaEyeSlash />}


                            </div>
                        </div>

                    </div>

                    <div className="flex lg:mt-[80px] mt-[30px] gap-4 lg:px-0 px-3">
                        <input type="checkbox" />
                        <p>I have read and agree to the Privacy Policy</p>
                    </div>
                    <div className="flex lg:gap-4 gap-2 lg:mt-[20px] mt-[10px] lg:px-0 px-3">
                        <h2>Subscribe Newsletter</h2>
                        <input type="radio" name='yes' />
                        <h3>yes</h3>
                        <input type="radio" name='yes' />
                        <h3>no</h3>
                    </div>
                    <div  className="h-[50px] w-[180px] bg-[#000] lg:my-[100px] my-[40px] items-center mx-[50%] translate-x-[-50%] lg:mx-0 lg:translate-x-0 cursor-pointer">
                        <h5 className='font-sans font-bold   text-[16px]  text-[#fff] text-center leading-[50px]  '>Sign Up</h5>
                    </div>
                </form>
            </Container>
        </section>
    )
}

export default Signup