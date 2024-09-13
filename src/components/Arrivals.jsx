import React from 'react'
import arrivals from "../assets/arrivals.png"
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { TfiReload } from "react-icons/tfi";


const Arrivals = () => {
  return (
    <section>
        <div className="">
            <div className=" relative group overflow-hidden">
                <img className=' h-[350px]' src={arrivals} alt="" />
                <div className="bg-[#fff] absolute left-0 bottom-[-150px] h-[150px]  w-full group-hover:bottom-[0] flex items-center justify-end duration-500 ease-in-out">
                    <ul className=' pr-5'>
                    <li className='flex items-center justify-end gap-x-4   font-sans font-bold   text-[16px]  text-[#818181] hover:text-[#262626]'>Add to Wish List <FaHeart/></li>
                    <li className='flex items-center  justify-end gap-x-4 py-3  font-sans font-bold   text-[16px]  text-[#818181] hover:text-[#262626]'>Compear<TfiReload/></li>
                    <li className='flex items-center  justify-end gap-x-4  font-sans font-bold   text-[16px]  text-[#818181] hover:text-[#262626]'>Add to Cart <FaShoppingCart/></li>
                    </ul>
                </div>
                <div className=" absolute top-[14px] left-[10px]">
                    <a className=' font-sans font-medium text-[16px] px-[20px] py-[7px] bg-black text-white rounded-lg'>40%</a>
                </div>
                <div className=" absolute top-[150px] left-[120px] opacity-0 group-hover:opacity-[1] duration-500 ease-in-out">
                    <a className=' font-sans font-medium text-[16px] px-[20px] py-[7px] bg-[green] text-white rounded-lg'>View Shop</a>
                </div>
            </div>
            <div className="flex justify-between py-[30px]">
            <h2 className='font-sans font-bold   text-[20px]  text-[#262626]'>title</h2>
            <h3 className='font-sans font-bold   text-[22px]  text-[#262626]'>$44.00</h3>
        </div>
        </div>
    </section>
  )
}

export default Arrivals