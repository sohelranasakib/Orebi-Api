import React, { useContext, useEffect, useState } from 'react'
import { apiData } from '../ContextApi'
import { FaHeart, FaShoppingCart, FaSearchPlus } from "react-icons/fa";
import { TfiReload } from "react-icons/tfi";
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { BuyNow } from '../slice/productSlice';

const ProductP = ({allData, categorySearchFilter, multiList}) => {
  console.log(multiList);
  

  let dispatch = useDispatch()

  let [filterShow, setFilterShow] = useState([])
  let [allshow, setAllShow] = useState(true)

  useEffect(()=>{
     let filterAmi = categorySearchFilter.slice(0,5)
     setFilterShow(filterAmi)
  },[categorySearchFilter])
  
  let handleShow = ()=>{
    setFilterShow(categorySearchFilter)
    setAllShow(false)
  }

  let handleHide = ()=>{
    let filterAmi = categorySearchFilter.slice(0,5)
    setFilterShow(filterAmi)
    setAllShow(true)
  }

  let handleAddTo = (item)=>{
    dispatch(BuyNow({...item, qun:1})
    )
  }
  
  return (
    <>
    {categorySearchFilter.length > 0 ?
      <div className="">
        <div className=" flex flex-wrap justify-between">
        {filterShow.map((item) => (
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
            <div className=" flex gap-4  items-center absolute lg:top-[150px] top-[80px] lg:left-[120px] left-[70px] opacity-0 lg:group-hover:opacity-[1] duration-500 ease-in-out">
               <a className=' font-sans lg:font-medium lg:text-[16px] text-[10px] lg:px-[20px] lg:py-[7px] py-[3px] bg-[green] text-white rounded-lg'> <Link to={`/product/${item.id}`}> View Shop</Link></a>

            </div>
          </div>
          <div className="flex justify-between lg:py-[30px] lg:gap-0 gap-1 ">
            <h2 className='font-sans font-bold   lg:text-[20px] text-[12px]  text-[#262626]'>{item.title}</h2>
            <h3 className='font-sans font-bold   lg:text-[22px] text-[12px]  text-[#262626]'>${item.price}</h3>
          </div>
          <div className=" flex gap-4 items-center  lg:top-[150px] top-[80px] lg:left-[120px] left-[70px] ">
              <a className=' font-sans lg:font-medium lg:text-[16px] text-[10px] lg:px-[20px] lg:py-[7px] py-[3px] bg-[green] text-white rounded-lg lg:opacity-0'> <Link to={`/product/${item.id}`}> View Shop</Link></a>
              <div className=" flex">
              <h3><FaSearchPlus className=' lg:text-[26px] text-[22px] text-[red] lg:opacity-0' /></h3>
              </div>
            </div>
        </div>
      ))}
      </div>
      {allshow ? categorySearchFilter.length > 5 && 
      <button onClick={handleShow} className=' font-sans font-bold text-[18px] px-[20px] py-[10px] border-2 hover:bg-[#262626] hover:text-[#fff] rounded-lg duration-500 ease-in-out'>Show All</button>
      :
      <button onClick={handleHide} className=' font-sans font-bold text-[18px] px-[20px] py-[10px] border-2 hover:bg-[#262626] hover:text-[#fff] rounded-lg duration-500 ease-in-out'>Hide</button>
      }
     
      </div>
     :
     <div className={`${multiList == "activeList" ? "" : "flex justify-between flex-wrap"}`}>
         { allData.map((item) => (
      <div className=" lg:w-[32%] w-[48%] ">
        <div className=" relative group overflow-hidden ">
          <Link to={`/product/${item.id}`}>
            <img className=' lg:h-[350px]' src={item.thumbnail} alt="" />
          </Link>

          <div className="bg-[#fff] absolute left-0 bottom-[-130px] lg:h-[110px]  lg:w-full group-hover:bottom-[2px] flex items-center justify-end duration-500 ease-in-out">
            <ul className=' lg:pr-5'>
              <li className='flex items-center justify-end lg:gap-x-4   font-sans font-bold   lg:text-[16px] text-[8px]  text-[#818181] hover:text-[#262626]'>Add to Wish List <FaHeart /></li>
              <li className='flex items-center  justify-end lg:gap-x-4 lg:py-3  font-sans font-bold   lg:text-[16px] text-[8px]  text-[#818181] hover:text-[#262626]'>Compear<TfiReload /></li>
              <li  onClick={()=>handleAddTo(item)} className='flex items-center  justify-end lg:gap-x-4  font-sans font-bold   lg:text-[16px] text-[8px]  text-[#818181] hover:text-[#262626]'>Add to Cart <FaShoppingCart /></li>
            </ul>
          </div>
          <div className=" absolute top-[14px] lg:left-[10px] left-[5px]">
            <a className=' font-sans lg:font-medium lg:text-[16px] text-[10px] lg:px-[20px] lg:py-[7px] bg-black text-white rounded-lg'>{item.discountPercentage}%</a>
          </div>
          <div className=" flex gap-4  items-center absolute lg:top-[150px] top-[80px] lg:left-[120px] left-[70px] opacity-0 lg:group-hover:opacity-[1] duration-500 ease-in-out">
             <a className=' font-sans lg:font-medium lg:text-[16px] text-[10px] lg:px-[20px] lg:py-[7px] py-[3px] bg-[green] text-white rounded-lg'> <Link to={`/product/${item.id}`}> View Shop</Link></a>

          </div>
        </div>
        <div className="flex justify-between lg:py-[30px] lg:gap-0 gap-1 ">
          <h2 className='font-sans font-bold   lg:text-[20px] text-[12px]  text-[#262626]'>{item.title}</h2>
          <h3 className='font-sans font-bold   lg:text-[22px] text-[12px]  text-[#262626]'>${item.price}</h3>
        </div>
        <div className=" flex gap-4 items-center  lg:top-[150px] top-[80px] lg:left-[120px] left-[70px] ">
            <a className=' font-sans lg:font-medium lg:text-[16px] text-[10px] lg:px-[20px] lg:py-[7px] py-[3px] bg-[green] text-white rounded-lg lg:opacity-0'> <Link to={`/product/${item.id}`}> View Shop</Link></a>
            <div className=" flex">
            <h3><FaSearchPlus className=' lg:text-[26px] text-[22px] text-[red] lg:opacity-0' /></h3>
            </div>
          </div>
      </div>
    ))}
     </div>
    
      }
      

    </>
  )
}

export default ProductP