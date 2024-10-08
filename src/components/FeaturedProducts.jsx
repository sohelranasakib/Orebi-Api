
import React, { useContext } from 'react'
import Container from './Container'
import { FaCartShopping } from "react-icons/fa6";
import { FaHeart, FaSearchPlus } from "react-icons/fa";
import { Tabs, TabList, TabPanel, Tab } from 'react-tabs';
import img from "../assets/arrivals.png"
import { apiData } from './ContextApi';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { BuyNow } from './slice/productSlice';
import { ToastContainer, Zoom, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FeaturedProducts = () => {
    let data = useContext(apiData)

    let dispatch = useDispatch()

    let handleToCart = (item) => {
        dispatch(BuyNow({ ...item, qun: 1 }))
        toast.success('Added to cart successfully')
    }


    let featuredproducts = data.filter(product => product.id >= 176 && product.id <= 183);

    return (
        <section className='lg:py-[30px] py-[2px]'>

            <div className="lg:px-0 px-2">
                <Tabs>
                    <TabList className=' lg:pb-12 flex justify-center lg:gap-10 gap-1'>
                        <Tab><h3 className="text-[28px] font-bold font-sans lg:px-5 px-2 border-b-2"
                        >Featured Products</h3></Tab>
                    </TabList>
                    <Container>


                        <TabPanel>

                            <div className=" flex justify-between flex-wrap">
                                {featuredproducts.map((item) => (
                                    <div className=" lg:w-[23%] w-[48%] py-5">
                                        <div className="relative  w-[100%] group ">
                                            <Link to={`/product/${item.id}`}>
                                                <img className="bg-[#F6F7FB] w-[100%]" src={item.thumbnail} alt="" />
                                            </Link>
                                            <div className=" absolute lg:top-[-30px] lg:group-hover:top-[30px]  top-0 lg:left-[20px] lg:right-0 right-0 lg:opacity-0 group-hover:opacity-[1] duration-500 ease-in-out">
                                                <a className=' font-sans font-bold lg:text-[18px] lg:py-[5px] lg:px-[25px] px-[10px] bg-[#262626] text-[#fff] rounded-lg inline-block '>New</a>
                                            </div>
                                            <div className=" flex items-center gap-5 lg:opacity-[0] lg:group-hover:top-[240px] duration-500 ease-in-out lg:group-hover:opacity-[1]  absolute lg:top-[300px] top-[150px] left-[50%] translate-x-[-50%]">
                                                <h3 className=' lg:h-[40px] h-[20px] lg:w-[100px] w-[80px] flex justify-center items-center bg-[#08D15F] rounded-[5px] text-[#fff] text-[13px]'>
                                                    <Link to={`/product/${item.id}`}>
                                                        View Details
                                                    </Link>
                                                </h3>
                                                <div onClick={() => handleToCart(item)} className="">
                                                    <FaSearchPlus className=' lg:text-[26px] text-[22px] text-[red]' />
                                                </div>
                                            </div>

                                            <div className=" flex justify-between">
                                                <div className="">
                                                    <h3 className=' font-sans lg:text-[16px] text-[14px] font-semibold'>{item.title}</h3>
                                                </div>
                                                <div className=" flex gap-x-2">
                                                    <h3 className=' font-sans lg:text-[16px] text-[14px] font-semibold'>${item.price}</h3>

                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                ))}
                            </div>

                        </TabPanel>

                        <ToastContainer className=" font-sans font-bold text-[18px] text-center"
                            position="top-center"
                            autoClose={2500}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                            theme="dark"

                        />
                    </Container>
                </Tabs>
            </div>
        </section>
    )
}

export default FeaturedProducts



