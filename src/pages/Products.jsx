import React, { useContext, useState } from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import { FaListUl } from "react-icons/fa";
import { IoGrid } from "react-icons/io5";
import arrivals from "../assets/arrivals.png"
import { apiData } from '../components/ContextApi';
import ProductP from '../components/pagination/ProductP';
import PaginationArea from '../components/pagination/PaginationArea';

const Products = () => {
    let data = useContext(apiData)

    let [currentPage, setCureentPage] = useState(1)
    let [perPage, setPerPage] = useState(12)

    let lastPage = currentPage * perPage
    let firstPage = lastPage - perPage

    let allData = data.slice(firstPage, lastPage)


    let pageNumber = []
    
    for (let i = 0; i < Math.ceil(data.length / perPage); i++) {
        pageNumber.push(i)
      }
    
      let Paginate = (pageNumber)=>{
        setCureentPage(pageNumber + 1);
        
      }

      let next = ()=>{
        if(currentPage < pageNumber.length){
            setCureentPage((state)=>state + 1);
        }
      }
      let prev = ()=>{
        if(currentPage > 1){
            setCureentPage((state)=>state - 1);
        }
      }

    return (
        <section className=' pt-[210px] py-[50px]'>
            <Container>
                <div className=" items-center pb-[40px]">
                    <h2 className='font-sans font-bold   text-[42px]  text-[#262626] '>Products</h2>
                    <h3 className='font-sans font-bold   text-[16px]  text-[#262626] '>Home  +  Products</h3>
                </div>
                <Flex>
                    <div className=" w-[29%]">Category</div>
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


                        <div className="flex justify-between flex-wrap lg:gap-0 gap-1">
                            <ProductP allData={allData} />
                        </div>
                          <div className=" text-end">
                             <PaginationArea pageNumber={pageNumber} Paginate={Paginate} currentPage={currentPage} next={next} prev={prev}/>
                          </div>
                    </div>
                </Flex>
            </Container>
        </section>
    )
}

export default Products