import React, { useState } from 'react'
import Container from '../components/Container'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Login = () => {
    let [psshow , setPsshow] = useState(false);
    return (
        <section className=' pt-[180px] px-3'>
            <Container>
                <div className=" items-center ">
                    <h2 className='font-sans font-bold   lg:text-[42px] text-[32px]  text-[#262626] '>Login</h2>
                    <h3 className='font-sans font-bold   lg:text-[16px] text-[12px]  text-[#262626] '>Home  +  Login</h3>
                 

                </div>
                <div className="lg:py-[150px]  bg-[#98AFC7] lg:mt-[50px] items-center">
                    <div className="lg:my-[30px] mx-[50%] lg:py-[50px] my-[20px] translate-x-[-50%] bg-[#fff] rounded-xl lg:w-[500px] w-[350px] px-5 ">
                        <form action="">
                            <h2 className='font-sans font-bold   lg:text-[22px] text-[18px]  text-[#262626] '>Sign in to your account</h2>
                            <div className=" lg:mt-[30px] mt-[15px]">
                                <h2  className=' font-sans font-medium lg:text-[16px] text-[14px]  text-[#262626] '>Your Email</h2>
                                <input  className='lg:h-[50px] h-[40px] border-2 border-[#262626]  lg:w-[100%] w-[80%] px-3 rounded-lg mt-[10px] outline-none' type="email " placeholder='Your Email...' />
                            </div>
                            <div className=" lg:pt-7 pt-[15px] relative">
                                <h2 className=' font-sans font-medium   text-[16px]  text-[#262626] '>Password</h2>
                                <input className='  lg:h-[50px] h-[40px] border-2 border-[#262626]  lg:w-[100%] w-[80%] px-3 rounded-lg mt-[10px] outline-none' type={psshow ? "text" : "password"} placeholder='Password...' />
                                <div onClick={()=>setPsshow(!psshow)} className=" absolute bottom-[15px] lg:right-3 right-[70px]">
                                    {psshow == true ? <FaEye/> : <FaEyeSlash/>}
                                
                                
                                </div>
                                
                            </div>
                            

                            <div className=" flex justify-between items-center mt-[30px]">
                                <div className="flex lg:gap-4 gap-2 lg:px-0 px-3 ">
                                    <input type="checkbox" />
                                    <p className=' font-sans font-medium lg:text-[16px] text-[14px]  text-[#262626] '>Remember me</p>
                                </div>
                                <div className=" text-center">
                                    <h2 className=' font-sans font-medium lg:text-[16px] text-[14px]  text-[#262626] '>Forgot password?</h2>
                                </div>
                            </div>
                            <div  className="lg:h-[50px] lg:w-[100%] w-[80%]  bg-[#000] lg:mt-[30px] mt-[20px]  items-center   cursor-pointer rounded-xl">
                                <h5 className='font-sans font-bold  text-[16px]  text-[#fff] text-center leading-[50px]  '>Sign In</h5>
                            </div>
                            <div className="lg:mt-[30px] mt-[15px]">
                                <Link to="/signup">
                                <h2 className=' font-sans font-medium   text-[16px]  text-[#262626] '>Don’t have an account yet? <span className=' font-bold'>Sign up</span> </h2>
                                </Link>
                            </div>
                        </form>

                    </div>

                </div>
                
            </Container>

        </section>
    )
}

export default Login