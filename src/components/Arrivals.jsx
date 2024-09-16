import React, { useContext } from 'react'
import arrivals from "../assets/arrivals.png"
import { FaHeart, FaShoppingCart, FaSearchPlus } from "react-icons/fa";
import { TfiReload } from "react-icons/tfi";




const Arrivals = ({item}) => {
    
  return (
    <section className=' lg:px-0 px-2'>
        <div className=" ">
            <div className=" relative group overflow-hidden ">
                <img className=' lg:h-[350px]' src={item.thumbnail} alt="" />
                <div className="bg-[#fff] absolute left-0 bottom-[-130px] lg:h-[110px]  lg:w-full group-hover:bottom-[2px] flex items-center justify-end duration-500 ease-in-out">
                    <ul className=' lg:pr-5'>
                    <li className='flex items-center justify-end lg:gap-x-4   font-sans font-bold   lg:text-[16px] text-[8px]  text-[#818181] hover:text-[#262626]'>Add to Wish List <FaHeart/></li>
                    <li className='flex items-center  justify-end lg:gap-x-4 lg:py-3  font-sans font-bold   lg:text-[16px] text-[8px]  text-[#818181] hover:text-[#262626]'>Compear<TfiReload/></li>
                    <li className='flex items-center  justify-end lg:gap-x-4  font-sans font-bold   lg:text-[16px] text-[8px]  text-[#818181] hover:text-[#262626]'>Add to Cart <FaShoppingCart/></li>
                    </ul>
                </div>
                <div className=" absolute top-[14px] lg:left-[10px] left-[5px]">
                    <a className=' font-sans lg:font-medium lg:text-[16px] text-[10px] lg:px-[20px] lg:py-[7px] bg-black text-white rounded-lg'>{item.discountPercentage}%</a>
                </div>
                <div className=" flex gap-2 items-center absolute lg:top-[150px] top-[130px] lg:left-[120px] left-[80px] lg:opacity-0 group-hover:opacity-[1] duration-500 ease-in-out">
                    <a className=' font-sans lg:font-medium lg:text-[16px] text-[10px] lg:px-[20px] lg:py-[7px] bg-[green] text-white rounded-lg'> View Shop</a>
                    <h3><FaSearchPlus className=' lg:text-[26px] text-[red]'/></h3>
                </div>
            </div>
            <div className="flex justify-between lg:py-[30px] lg:gap-0 gap-2">
            <h2 className='font-sans font-bold   lg:text-[20px] text-[12px]  text-[#262626]'>{item.title}</h2>
            <h3 className='font-sans font-bold   lg:text-[22px] text-[12px]  text-[#262626]'>${item.price}</h3>
        </div>
        </div>
    </section>
  )
}

export default Arrivals