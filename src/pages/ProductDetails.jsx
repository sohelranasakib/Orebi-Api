import React, { useEffect, useState } from 'react'
import Container from '../components/Container'
import { Link, useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import Flex from '../components/Flex'
import arrivals from "../assets/arrivals.png"
import { FaStar, FaRegStar, FaPlus } from "react-icons/fa6";
import { FaStarHalfAlt } from "react-icons/fa";
import { GiTireIronCross } from "react-icons/gi";
import { BuyNow } from '../components/slice/productSlice'
import { ToastContainer, Zoom, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ProductDetails = () => {
    let [singleData, setSingleData] = useState([])
    let productId = useParams()

    let dispatch = useDispatch()

    let [show, setShow] = useState()
    let [showe, setShowe] = useState()

    let getData = () => {
        axios.get(`https://dummyjson.com/products/${productId.id}`).then((response) => {
            setSingleData(response.data);

        })
    }

    useEffect(() => {
        getData()
    }, [])

    let clientRating = Array.from({ length: 5 }, (elm, index) => {
        let ratingNumber = index + 0.5
        return (
            singleData.rating >= index + 1 ? <FaStar className='text-[#FFD881]' /> : singleData.rating > ratingNumber ? <FaStarHalfAlt className=' text-[#FFD881]' />
                : <FaRegStar />
        )
    })
    
    let handleBuy = (item)=>{
        dispatch(BuyNow({...item, qun:1}));
        
    }

    let handleToCart =(item)=>{
        dispatch(BuyNow({...item, qun:1}));
        toast.success('Added to cart successfully')
    }


    return (
        <section className=' pt-[178px] lg:px-0 px-4'>
            <Container>
                <div className=" items-center pb-[40px]">
                    <h2 className='font-sans font-bold   text-[42px]  text-[#262626] '>Product Details</h2>
                    <h3 className='font-sans font-bold   text-[16px]  text-[#262626] '>Home  +  Product Details</h3>
                </div>
                <Flex className=" flex-wrap justify-between">
                    {singleData?.images?.map((item) => (
                        <div className=" w-[48%] my-4">
                            <img src={item} alt="" />
                        </div>
                    ))}


                </Flex>
                <div className="lg:w-[50%]">
                    <div className="">
                        <h3 className='font-sans font-bold   text-[42px]  text-[#262626] '>Product</h3>
                        <div className="flex items-center pt-[0px]">
                            {clientRating}
                            <div className="pl-3">
                                <h4 className='font-sans font-semibold   text-[20px]  text-[#262626]  '>Review</h4>
                            </div>
                        </div>

                    </div>

                    <div className=" pt-[10px]">
                        <h4 className=' relative font-sans font-bold   text-[18px]  text-[#262626]  after:absolute after:content-[""] after:h-[1px] after:w-full after:bg-[#D8D8D8] after:bottom-[-20px] after:left-0' > {singleData.price}$</h4>
                    </div>

                    <div className="flex relative  pt-[30px] items-center after:absolute after:content-[''] after:h-[1px] after:w-full after:bg-[#D8D8D8] after:bottom-[-20px] after:left-0">
                        <h3 className='font-sans font-bold   text-[16px]  text-[#262626] '>Stock :</h3>
                        <h4 className='font-sans font-semibold   text-[18px]  text-[#262626] ml-[10px]'>{singleData.stock}</h4>
                    </div>
                    <div className=" pt-[35px]">
                        <h4 className='font-sans font-bold   text-[20px]  text-[#262626] '> brand : {singleData.brand} </h4>
                        <h5 className='font-sans font-bold pt-[10px]  text-[20px]  text-[#262626] '>category : {singleData.category} </h5>
                    </div>
                    <div className=" pt-[30px] lg:flex relative   after:absolute after:content-[''] after:h-[1px] after:w-full after:bg-[#D8D8D8] after:bottom-[-20px] after:left-0">
                        <Link to="/cart" onClick={()=>handleBuy(singleData)}>
                         <a className=' font-sans font-bold   lg:text-[18px]  text-[#262626] py-[14px] px-[45px] border-2 border-[#262626] rounded-lg inline-block duration-500 ease-in-out hover:bg-[#262626] hover:text-[#fff]'>Buy Now</a>
                         </Link>

                        <a onClick={()=>handleToCart(singleData)} className=' font-sans font-bold lg:text-[18px] bg-[#fff]  text-[#262626] py-[14px] lg:px-[35px] p-[63px]  border-2 border-[#262626] rounded-lg inline-block lg:ms-4  duration-500 ease-in-out hover:bg-[#262626] hover:text-[#fff]'>Add to Cart</a>

                    </div>
                  
                </div>
                <div className=" w-[50%] pt-[60px] pb-[10px]">
                <div className="  border-b-[1px] py-2">
                        <div onClick={() => setShow(!show)} className=" flex items-center justify-between pb-[10px] ">
                            <h2 className=' font-sans font-bold text-[18px]'>FEATURES  & DETAILS</h2>
                            {show == true ? <GiTireIronCross /> : <FaPlus />}
                        </div>
                        {show &&
                            <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        }
                    </div>
                    <div className=" pt-[30px] border-b-[1px] py-2">
                        <div onClick={() => setShowe(!showe)} className=" flex items-center justify-between pb-[10px] ">
                            <h2 className=' font-sans font-bold text-[18px]'>SHIPPING & RETURNS</h2>
                            {showe == true ? <GiTireIronCross /> : <FaPlus />}
                        </div>
                        {showe &&
                            <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        }
                    </div>
                </div>
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
        </section>
    )
}

export default ProductDetails