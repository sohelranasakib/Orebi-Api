import React, { useContext, useEffect, useState } from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import { FaListUl } from "react-icons/fa";
import { IoGrid } from "react-icons/io5";
import arrivals from "../assets/arrivals.png"
import { apiData } from '../components/ContextApi';
import ProductP from '../components/pagination/ProductP';
import PaginationArea from '../components/pagination/PaginationArea';
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";

const Products = () => {
    let data = useContext(apiData)

    let [currentPage, setCureentPage] = useState(1)
    let [perPage, setPerPage] = useState(12)

    let lastPage = currentPage * perPage
    let firstPage = lastPage - perPage

    let allData = data.slice(firstPage, lastPage)

    let [category, setCategory] = useState([]);
    let [brand, setBrand] = useState([]);
    let [price, setPrice] = useState([]);
    let [categorySearchFilter,setCategorySearchFilter] = useState([]);
    let [catshow, setCatShow] = useState(false)
    let [brandshow, setBrandShow] = useState(false)
    let [priceshow, setPriceShow] = useState(false)

    let [lowPrice,setLowprice] = useState("");
    let [highPrice,setHighprice] = useState("");
    let [filterprice,setFilterprice] = useState([]);


    useEffect(() => {
        setCategory([...new Set(data.map((item) => item.category))])


        setBrand([...new Set(data.map((item) => item.brand))])
    }, [data])

    


    let pageNumber = []

    for (let i = 0; i < Math.ceil(categorySearchFilter.length > 0 ? categorySearchFilter : data.length / perPage); i++) {
        pageNumber.push(i)
    }

    let Paginate = (pageNumber) => {
        setCureentPage(pageNumber + 1);

    }

    let next = () => {
        if (currentPage < pageNumber.length) {
            setCureentPage((state) => state + 1);
        }
    }
    let prev = () => {
        if (currentPage > 1) {
            setCureentPage((state) => state - 1);
        }
    }

   let handleCategoryS = (citem)=>{
     let categoryFilter = data.filter((item)=> item.category == citem)
     setCategorySearchFilter(categoryFilter)
   }
     
   let handleBrandS = (citem)=>{
    let brandFilter = data.filter((item)=> item.brand == citem)
    setCategorySearchFilter(brandFilter)

   }

    return (
        <section className=' pt-[210px] py-[50px] lg:px-0 px-1'>
            <Container>
                <div className=" items-center pb-[40px]">
                    <h2 className='font-sans font-bold   text-[42px]  text-[#262626] '>Products</h2>
                    <h3 className='font-sans font-bold   text-[16px]  text-[#262626] '>Home  +  Products</h3>
                </div>
                <Flex>
                    <div className=" w-[29%] lg:mr-1 mr-1">

                        <div className="">
                            <h2 onClick={() => setCatShow(!catshow)} className=' relative font-sans font-bold   lg:text-[28px]  text-[#262626] flex justify-between items-center  cursor-pointer  after:absolute after:contain-[""] after:bottom-0 after:left-0 after:h-[3px] lg:after:w-[120px] after:w-[70px] after:bg-[#fff] hover:after:bg-black duration-500 ease-in-out '> Category {catshow == true ? <TiArrowSortedUp className='text-[28px] ' /> : <TiArrowSortedDown className='text-[28px] ' />}</h2>


                            {catshow &&
                                <ul className='overflow-y-scroll lg:h-[300px] h-[100px] '>
                                    {category.map((item) => (
                                        <li onClick={()=>handleCategoryS(item)} className=' relative font-sans font-semibold   lg:text-[16px] text-[10px]  text-[#262626] lg:mb-[10px] mb-[4px] lg:py-[10px] lg:w-[40%]  hover:bg-[#262626] hover:text-[#fff] rounded-lg after:absolute after:content-[""] after:h-[1px] after:w-[100%] after:bg-[#D8D8D8] after:left-0 after:bottom-0 cursor-pointer duration-700 ease-in-out capitalize'>{item}</li>
                                    ))}
                                    <h3 className=' '></h3>
                                </ul>
                            }

                        </div>
                        <div className=" lg:py-2">
                            <h2 onClick={() => setBrandShow(!brandshow)} className='relative font-sans font-bold   lg:text-[28px]  text-[#262626] flex justify-between items-center  cursor-pointer  after:absolute after:contain-[""] after:bottom-0 after:left-0 after:h-[3px] lg:after:w-[80px] after:w-[45px] after:bg-[#fff] hover:after:bg-black duration-500 ease-in-out  '> Brand {catshow == true ? <TiArrowSortedUp className='text-[28px] ' /> : <TiArrowSortedDown className='text-[28px] ' />}</h2>


                            {brandshow &&
                                <ul className='overflow-y-scroll lg:h-[300px] h-[100px] '>
                                    {brand.map((item) => (
                                        <li onClick={()=>handleBrandS(item)} className=' relative font-sans font-semibold   lg:text-[16px] text-[10px]  text-[#262626] lg:mb-[10px] mb-[4px] lg:py-[10px] lg:w-[40%]  hover:bg-[#262626] hover:text-[#fff] rounded-lg after:absolute after:content-[""] after:h-[1px] after:w-[100%] after:bg-[#D8D8D8] after:left-0 after:bottom-0 cursor-pointer duration-700 ease-in-out capitalize'>{item}</li>
                                    ))}
                                    <h3 className=' '></h3>
                                </ul>
                            }

                        </div>
                        <div className="">
                            <div className=" ">
                                <h2 onClick={() => setPriceShow(!priceshow)} className=' relative font-sans font-bold   lg:text-[28px]  text-[#262626] flex justify-between items-center cursor-pointer  after:absolute after:contain-[""] after:bottom-0 after:left-0 after:h-[3px] lg:after:w-[70px] after:w-[40px] after:bg-[#fff] hover:after:bg-black duration-500 ease-in-out '>Price {priceshow == true ? <TiArrowSortedUp className='text-[28px]' /> : <TiArrowSortedDown className='text-[28px]' />}</h2>

                            </div>
                            {priceshow &&

                                <ul className='overflow-y-scroll lg:h-[300px] h-[100px]  '>


                                    <li onClick={()=>handlePrice({low:0 , high:10})} className=' relative font-sans font-semibold   lg:text-[16px] text-[10px]  text-[#262626] lg:mb-[10px] mb-[4px] lg:py-[10px] lg:w-[40%]  hover:bg-[#262626] hover:text-[#fff] rounded-lg after:absolute after:content-[""] after:h-[1px] after:w-[100%] after:bg-[#D8D8D8] after:left-0 after:bottom-0 cursor-pointer duration-700 ease-in-out'>0$ - 10$</li>
                                    <li onClick={()=>handlePrice({low:10 , high:20})} className=' relative font-sans font-semibold   lg:text-[16px] text-[10px]  text-[#262626] lg:mb-[10px] mb-[4px] lg:py-[10px] lg:w-[40%]  hover:bg-[#262626] hover:text-[#fff] rounded-lg after:absolute after:content-[""] after:h-[1px] after:w-[100%] after:bg-[#D8D8D8] after:left-0 after:bottom-0 cursor-pointer duration-700 ease-in-out'>10$ - 20$</li>
                                    <li onClick={()=>handlePrice({low:20 , high:50})} className=' relative font-sans font-semibold  lg:text-[16px] text-[10px]  text-[#262626] lg:mb-[10px] mb-[4px] lg:py-[10px] lg:w-[40%]  hover:bg-[#262626] hover:text-[#fff] rounded-lg after:absolute after:content-[""] after:h-[1px] after:w-[100%] after:bg-[#D8D8D8] after:left-0 after:bottom-0 cursor-pointer duration-700 ease-in-out'>20$ - 50$</li>
                                    <li onClick={()=>handlePrice({low:50 , high:100})} className=' relative font-sans font-semibold  lg:text-[16px] text-[10px]  text-[#262626] lg:mb-[10px] mb-[4px] lg:py-[10px] lg:w-[40%]  hover:bg-[#262626] hover:text-[#fff] rounded-lg after:absolute after:content-[""] after:h-[1px] after:w-[100%] after:bg-[#D8D8D8] after:left-0 after:bottom-0 cursor-pointer duration-700 ease-in-out'>50$ - 100$</li>
                                    <li onClick={()=>handlePrice({low:100 , high:500})} className=' relative font-sans font-semibold  lg:text-[16px] text-[10px]  text-[#262626] lg:mb-[10px] mb-[4px] lg:py-[10px] lg:w-[40%]  hover:bg-[#262626] hover:text-[#fff] rounded-lg after:absolute after:content-[""] after:h-[1px] after:w-[100%] after:bg-[#D8D8D8] after:left-0 after:bottom-0 cursor-pointer duration-700 ease-in-out'>100$ - 500$</li>
                                    <li onClick={()=>handlePrice({low:500 , high:1000})} className=' relative font-sans font-semibold  lg:text-[16px] text-[10px]  text-[#262626] lg:mb-[10px] mb-[4px] lg:py-[10px] lg:w-[40%]  hover:bg-[#262626] hover:text-[#fff] rounded-lg after:absolute after:content-[""] after:h-[1px] after:w-[100%] after:bg-[#D8D8D8] after:left-0 after:bottom-0 cursor-pointer duration-700 ease-in-out'>500$ - 1000$</li>
                                    <li onClick={()=>handlePrice({low:1000 , high:2000})} className=' relative font-sans font-semibold  lg:text-[16px] text-[10px]  text-[#262626] lg:mb-[10px] mb-[4px] lg:py-[10px] lg:w-[40%]  hover:bg-[#262626] hover:text-[#fff] rounded-lg after:absolute after:content-[""] after:h-[1px] after:w-[100%] after:bg-[#D8D8D8] after:left-0 after:bottom-0 cursor-pointer duration-700 ease-in-out'>1000$ - 2000$</li>
                                    <li onClick={()=>handlePrice({low:2000 , high:4000})} className=' relative font-sans font-semibold  lg:text-[16px] text-[10px]  text-[#262626] lg:mb-[10px] mb-[4px] lg:py-[10px] lg:w-[40%]  hover:bg-[#262626] hover:text-[#fff] rounded-lg after:absolute after:content-[""] after:h-[1px] after:w-[100%] after:bg-[#D8D8D8] after:left-0 after:bottom-0 cursor-pointer duration-700 ease-in-out'>2000$ - 4000$</li>


                                </ul>
                            }

                        </div>
                    </div>

                    <div className=" w-[68%]">
                        <div className=" flex justify-between pb-[30px]">
                            <div className="flex lg:gap-4 gap-2 items-center">
                                <div className="lg:h-[50px] h-[27px] lg:w-[50px] w-[25px] flex justify-center items-center text-[#000] border-[1px] border-[#000] text-[20px]">
                                    < IoGrid className=' text-[26px]' />
                                </div>
                                <div className=" lg:h-[50px] h-[27px] lg:w-[50px] w-[25px] flex justify-center items-center text-[#000] border-[1px] border-[#000] text-[20px]">
                                    < FaListUl className=' text-[26px]' />
                                </div>
                            </div>
                            <div className=" lg:flex gap-5 items-center">
                                <div className="flex items-center gap-1">
                                    <label className='lg:text-[16px] text-[14px] font-sans text-[#767676] font-normal'>Sort by : </label>
                                    <select name="" id="" className='border-[1px] border-[#767676] rounded-sm  lg:px-[60px] px-[5px] lg:py-[8px] lg:text-[16px] font-sans text-[#767676] font-normal lg:mt-0 mt-[2px]'>
                                        <option value="">Featured..</option>
                                        <option value="">30</option>
                                        <option value="">24</option>
                                    </select>
                                </div>
                                <div className="">
                                    <label className='lg:text-[16px] text-[14px] font-sans text-[#767676] font-normal'>Show : </label>
                                    <select name="" id="" className='border-[1px] border-[#767676] rounded-sm lg:px-[40px] px-[30px] lg:py-[8px] text-[16px] font-sans text-[#767676] font-normal lg:my-0 my-[5px]'>
                                        <option value="9">9</option>
                                        <option value="18">18</option>
                                        <option value="27">27</option>
                                    </select>
                                </div>
                            </div>
                        </div>


                        <div className="flex justify-between flex-wrap">
                            <ProductP allData={allData} categorySearchFilter={categorySearchFilter}/>
                        </div>
                        <div className=" text-end">
                            <PaginationArea pageNumber={pageNumber} Paginate={Paginate} currentPage={currentPage} next={next} prev={prev} />
                        </div>
                    </div>
                </Flex>
            </Container>
        </section>
    )
}

export default Products