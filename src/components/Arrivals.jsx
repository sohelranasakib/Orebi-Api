import React, { useContext } from 'react'
import arrivals from "../assets/arrivals.png"
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { TfiReload } from "react-icons/tfi";
import { apiData } from './ContextApi';



const Arrivals = ({item}) => {
    
  return (
    <section>
        <div className="">
            <div className=" relative group overflow-hidden">
                <img className=' lg:h-[350px]' src={item.thumbnail} alt="" />
                <div className="bg-[#fff] absolute left-0 bottom-[-130px] h-[110px]  w-full group-hover:bottom-[2px] flex items-center justify-end duration-500 ease-in-out">
                    <ul className=' pr-5'>
                    <li className='flex items-center justify-end gap-x-4   font-sans font-bold   text-[16px]  text-[#818181] hover:text-[#262626]'>Add to Wish List <FaHeart/></li>
                    <li className='flex items-center  justify-end gap-x-4 py-3  font-sans font-bold   text-[16px]  text-[#818181] hover:text-[#262626]'>Compear<TfiReload/></li>
                    <li className='flex items-center  justify-end gap-x-4  font-sans font-bold   text-[16px]  text-[#818181] hover:text-[#262626]'>Add to Cart <FaShoppingCart/></li>
                    </ul>
                </div>
                <div className=" absolute top-[14px] left-[10px]">
                    <a className=' font-sans font-medium text-[16px] px-[20px] py-[7px] bg-black text-white rounded-lg'>{item.discountPercentage}%</a>
                </div>
                <div className=" absolute top-[150px] left-[120px] opacity-0 group-hover:opacity-[1] duration-500 ease-in-out">
                    <a className=' font-sans font-medium text-[16px] px-[20px] py-[7px] bg-[green] text-white rounded-lg'>View Shop</a>
                </div>
            </div>
            <div className="flex justify-between py-[30px]">
            <h2 className='font-sans font-bold   text-[20px]  text-[#262626]'>{item.title}</h2>
            <h3 className='font-sans font-bold   text-[22px]  text-[#262626]'>${item.price}</h3>
        </div>
        </div>
    </section>
  )
}

export default Arrivals