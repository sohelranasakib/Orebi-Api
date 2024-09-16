import React, { useEffect, useState } from 'react'
import Container from '../components/Container'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Flex from '../components/Flex'
import arrivals from "../assets/arrivals.png"
import { FaStar, FaRegStar, } from "react-icons/fa6";
import { FaStarHalfAlt } from "react-icons/fa";


const ProductDetails = () => {
    let [singleData, setSingleData] = useState([])
    let productId = useParams()



    let getData = () => {
        axios.get(`https://dummyjson.com/products/${productId.id}`).then((response) => {
            setSingleData(response.data);

        })
    }

    useEffect(() => {
        getData()
    }, [])

    let clientRating = Array.from({length:5}, (elm, index)=>{
        let ratingNumber = index + 0.5
        return(
            singleData.rating >= index + 1 ? <FaStar className='text-[#FFD881]' /> :   singleData.rating > ratingNumber ? <FaStarHalfAlt className=' text-[#FFD881]' />
            : <FaRegStar/>
        )
    })
    


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
                        <a className=' font-sans font-bold   lg:text-[22px]  text-[#262626] py-[16px] px-[45px] border-2 border-[#262626] rounded-lg inline-block duration-300 ease-in-out hover:bg-[#262626] hover:text-[#fff]'>Add to Wish List</a>


                        <a className=' font-sans font-bold lg:text-[22px] bg-[#fff]  text-[#262626] py-[16px] lg:px-[45px] p-[63px]  border-2 border-[#262626] rounded-lg inline-block lg:ms-4  duration-300 ease-in-out hover:bg-[#262626] hover:text-[#fff]'>Add to Cart</a>

                    </div>


                </div>
            </Container>
        </section>
    )
}

export default ProductDetails