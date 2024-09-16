import React, { useContext } from 'react'
import { apiData } from '../ContextApi'
import { FaHeart, FaShoppingCart, FaSearchPlus } from "react-icons/fa";
import { TfiReload } from "react-icons/tfi";
import { Link } from 'react-router-dom';

const ProductP = ({allData}) => {
  
  return (
    <>
      {allData.map((item) => (
        <div className=" lg:w-[32%] w-[48%] ">
          <div className=" relative group overflow-hidden ">
            <Link to={`/product/${item.id}`}>
              <img className=' lg:h-[350px]' src={item.thumbnail} alt="" />
            </Link>

            <div className="bg-[#fff] absolute left-0 bottom-[-130px] lg:h-[110px]  lg:w-full group-hover:bottom-[2px] flex items-center justify-end duration-500 ease-in-out">
              <ul className=' lg:pr-5'>
                <li className='flex items-center justify-end lg:gap-x-4   font-sans font-bold   lg:text-[16px] text-[8px]  text-[#818181] hover:text-[#262626]'>Add to Wish List <FaHeart /></li>
                <li className='flex items-center  justify-end lg:gap-x-4 lg:py-3  font-sans font-bold   lg:text-[16px] text-[8px]  text-[#818181] hover:text-[#262626]'>Compear<TfiReload /></li>
                <li className='flex items-center  justify-end lg:gap-x-4  font-sans font-bold   lg:text-[16px] text-[8px]  text-[#818181] hover:text-[#262626]'>Add to Cart <FaShoppingCart /></li>
              </ul>
            </div>
            <div className=" absolute top-[14px] lg:left-[10px] left-[5px]">
              <a className=' font-sans lg:font-medium lg:text-[16px] text-[10px] lg:px-[20px] lg:py-[7px] bg-black text-white rounded-lg'>{item.discountPercentage}%</a>
            </div>
            <div className="  items-center absolute lg:top-[150px] top-[78px] lg:left-[120px] left-[70px] lg:opacity-0 group-hover:opacity-[1] duration-500 ease-in-out">
              <div className=" flex justify-end">
                <h3><FaSearchPlus className=' lg:text-[26px] text-[red] lg:opacity-0' /></h3>
              </div>
              <a className=' font-sans lg:font-medium lg:text-[16px] text-[10px] lg:px-[20px] lg:py-[7px] py-[3px] bg-[green] text-white rounded-lg'> <Link to={`/product/${item.id}`}> View Shop</Link></a>

            </div>
          </div>
          <div className="flex justify-between lg:py-[30px] lg:gap-0 gap-1 ">
            <h2 className='font-sans font-bold   lg:text-[20px] text-[12px]  text-[#262626]'>{item.title}</h2>
            <h3 className='font-sans font-bold   lg:text-[22px] text-[12px]  text-[#262626]'>${item.price}</h3>
          </div>
        </div>
      ))}

    </>
  )
}

export default ProductP