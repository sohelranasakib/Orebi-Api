import React, { useContext } from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import { apiData } from '../components/ContextApi'
import { Tabs, TabList, TabPanel, Tab } from 'react-tabs';
import { Link } from 'react-router-dom';
import { FaSearchPlus } from "react-icons/fa";

const ElectronicsP = () => {
    let data = useContext(apiData)
    

    let phone = data.filter(product => product.id >= 121 && product.id <= 136);
    let labtop = data.filter(product => product.id >= 78 && product.id <= 82);
    let tab = data.filter(product => product.id >= 159 && product.id <= 161);
    let wireless = data.filter(product => product.id >= 99 && product.id <= 107);
    let watch1 = data.filter(product => product.id >= 93 && product.id <= 98);
    let watch2 = data.filter(product => product.id >= 190 && product.id <= 194);
    
  return (
    <section className=' pt-[220px] pb-[50px] lg:px-0 px-2'>
        <Container>
        <div className=" items-center pb-[40px]">
                    <h2 className='font-sans font-bold   text-[32px]  text-[#262626] '>Electronics Products</h2>
                    <h3 className='font-sans font-bold   text-[16px]  text-[#262626] '><Link to="/">Home </Link> +  Electronics Products</h3>
                </div>
        </Container>
       <div className="">
                <Tabs>
                    <TabList className=' lg:pb-12 flex justify-center lg:gap-10 gap-1'>
                        <Tab><h3 className="text-[28px] font-bold font-sans lg:px-5 px-2 border-2 hover:bg-[#262626] hover:text-[#fff] rounded-lg duration-700 ease-in-out">Phone</h3></Tab>
                        <Tab><h3 className="text-[28px] font-bold font-sans lg:px-5 px-2 border-2 hover:bg-[#262626] hover:text-[#fff] rounded-lg duration-700 ease-in-out">Labtop</h3></Tab>
                        <Tab><h3 className="text-[28px] font-bold font-sans lg:px-5 px-2 border-2 hover:bg-[#262626] hover:text-[#fff] rounded-lg duration-700 ease-in-out">Tab</h3></Tab>
                        <Tab><h3 className="text-[28px] font-bold font-sans lg:px-5 px-2 border-2 hover:bg-[#262626] hover:text-[#fff] rounded-lg duration-700 ease-in-out">Wireless</h3></Tab>
                        <Tab><h3 className="text-[28px] font-bold font-sans lg:px-5 px-2 border-2 hover:bg-[#262626] hover:text-[#fff] rounded-lg duration-700 ease-in-out">Watch 1</h3></Tab>
                        <Tab><h3 className="text-[28px] font-bold font-sans lg:px-5 px-2 border-2 hover:bg-[#262626] hover:text-[#fff] rounded-lg duration-700 ease-in-out">Watch 2</h3></Tab>
                    </TabList>
                    <Container>

                      
                        <TabPanel>
                            <div className=" flex justify-between flex-wrap">
                            {phone.map((item)=>(
                                 <div className=" lg:w-[23%] w-[48%] py-5">
                                 <div className="relative  w-[100%] group ">
                                 <Link to={`/product/${item.id}`}>
                                     <img className="bg-[#F6F7FB] w-[100%]" src={item.thumbnail} alt="" />
                                   </Link>
                                     <div className=" absolute lg:top-[-30px] lg:group-hover:top-[30px]  top-0 lg:left-[20px] lg:right-0 right-0 lg:opacity-0 group-hover:opacity-[1] duration-500 ease-in-out">
                                         <a className=' font-sans font-bold lg:text-[18px] lg:py-[5px] lg:px-[25px] px-[10px] bg-[#262626] text-[#fff] rounded-lg inline-block '>New</a>
                                     </div>    
                                     <div className=" flex items-center gap-5 lg:opacity-[0] lg:group-hover:top-[240px] duration-500 ease-in-out lg:group-hover:opacity-[1]  absolute lg:top-[300px] top-[140px] left-[50%] translate-x-[-50%]">
                                        <h3 className=' lg:h-[40px] h-[20px] lg:w-[100px] w-[80px] flex justify-center items-center bg-[#08D15F] rounded-[5px] text-[#fff] text-[13px]'>
                                        <Link to={`/product/${item.id}`}>
                                        View Details
                                        </Link>
                                        </h3>
                                        <div className="">
                                        <FaSearchPlus className=' lg:text-[26px] text-[red]'/>
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
                        <TabPanel>
                            <div className=" flex justify-between flex-wrap">
                            {labtop.map((item)=>(
                                 <div className=" lg:w-[23%] w-[48%] py-5">
                                 <div className="relative  w-[100%] group ">
                                 <Link to={`/product/${item.id}`}>
                                     <img className="bg-[#F6F7FB] w-[100%]" src={item.thumbnail} alt="" />
                                   </Link>
                                     <div className=" absolute lg:top-[-30px] lg:group-hover:top-[30px]  top-0 lg:left-[20px] lg:right-0 right-0 lg:opacity-0 group-hover:opacity-[1] duration-500 ease-in-out">
                                         <a className=' font-sans font-bold lg:text-[18px] lg:py-[5px] lg:px-[25px] px-[10px] bg-[#262626] text-[#fff] rounded-lg inline-block '>New</a>
                                     </div>    
                                     <div className=" flex items-center gap-5 lg:opacity-[0] lg:group-hover:top-[240px] duration-500 ease-in-out lg:group-hover:opacity-[1]  absolute lg:top-[300px] top-[140px] left-[50%] translate-x-[-50%]">
                                        <h3 className=' lg:h-[40px] h-[20px] lg:w-[100px] w-[80px] flex justify-center items-center bg-[#08D15F] rounded-[5px] text-[#fff] text-[13px]'>
                                        <Link to={`/product/${item.id}`}>
                                        View Details
                                        </Link>
                                        </h3>
                                        <div className="">
                                        <FaSearchPlus className=' lg:text-[26px] text-[red]'/>
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
                        <TabPanel>
                            <div className=" flex justify-between flex-wrap">
                            {tab.map((item)=>(
                                 <div className=" lg:w-[23%] w-[48%] py-5">
                                 <div className="relative  w-[100%] group ">
                                 <Link to={`/product/${item.id}`}>
                                     <img className="bg-[#F6F7FB] w-[100%]" src={item.thumbnail} alt="" />
                                   </Link>
                                     <div className=" absolute lg:top-[-30px] lg:group-hover:top-[30px]  top-0 lg:left-[20px] lg:right-0 right-0 lg:opacity-0 group-hover:opacity-[1] duration-500 ease-in-out">
                                         <a className=' font-sans font-bold lg:text-[18px] lg:py-[5px] lg:px-[25px] px-[10px] bg-[#262626] text-[#fff] rounded-lg inline-block '>New</a>
                                     </div>    
                                     <div className=" flex items-center gap-5 lg:opacity-[0] lg:group-hover:top-[240px] duration-500 ease-in-out lg:group-hover:opacity-[1]  absolute lg:top-[300px] top-[140px] left-[50%] translate-x-[-50%]">
                                        <h3 className=' lg:h-[40px] h-[20px] lg:w-[100px] w-[80px] flex justify-center items-center bg-[#08D15F] rounded-[5px] text-[#fff] text-[13px]'>
                                        <Link to={`/product/${item.id}`}>
                                        View Details
                                        </Link>
                                        </h3>
                                        <div className="">
                                        <FaSearchPlus className=' lg:text-[26px] text-[red]'/>
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
                        <TabPanel>
                            <div className=" flex justify-between flex-wrap">
                            {wireless.map((item)=>(
                                 <div className=" lg:w-[23%] w-[48%] py-5">
                                 <div className="relative  w-[100%] group ">
                                 <Link to={`/product/${item.id}`}>
                                     <img className="bg-[#F6F7FB] w-[100%]" src={item.thumbnail} alt="" />
                                   </Link>
                                     <div className=" absolute lg:top-[-30px] lg:group-hover:top-[30px]  top-0 lg:left-[20px] lg:right-0 right-0 lg:opacity-0 group-hover:opacity-[1] duration-500 ease-in-out">
                                         <a className=' font-sans font-bold lg:text-[18px] lg:py-[5px] lg:px-[25px] px-[10px] bg-[#262626] text-[#fff] rounded-lg inline-block '>New</a>
                                     </div>    
                                     <div className=" flex items-center gap-5 lg:opacity-[0] lg:group-hover:top-[240px] duration-500 ease-in-out lg:group-hover:opacity-[1]  absolute lg:top-[300px] top-[140px] left-[50%] translate-x-[-50%]">
                                        <h3 className=' lg:h-[40px] h-[20px] lg:w-[100px] w-[80px] flex justify-center items-center bg-[#08D15F] rounded-[5px] text-[#fff] text-[13px]'>
                                        <Link to={`/product/${item.id}`}>
                                        View Details
                                        </Link>
                                        </h3>
                                        <div className="">
                                        <FaSearchPlus className=' lg:text-[26px] text-[red]'/>
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
                        <TabPanel>
                            <div className=" flex justify-between flex-wrap">
                            {watch1.map((item)=>(
                                 <div className=" lg:w-[23%] w-[48%] py-5">
                                 <div className="relative  w-[100%] group ">
                                 <Link to={`/product/${item.id}`}>
                                     <img className="bg-[#F6F7FB] w-[100%]" src={item.thumbnail} alt="" />
                                   </Link>
                                     <div className=" absolute lg:top-[-30px] lg:group-hover:top-[30px]  top-0 lg:left-[20px] lg:right-0 right-0 lg:opacity-0 group-hover:opacity-[1] duration-500 ease-in-out">
                                         <a className=' font-sans font-bold lg:text-[18px] lg:py-[5px] lg:px-[25px] px-[10px] bg-[#262626] text-[#fff] rounded-lg inline-block '>New</a>
                                     </div>    
                                     <div className=" flex items-center gap-5 lg:opacity-[0] lg:group-hover:top-[240px] duration-500 ease-in-out lg:group-hover:opacity-[1]  absolute lg:top-[300px] top-[140px] left-[50%] translate-x-[-50%]">
                                        <h3 className=' lg:h-[40px] h-[20px] lg:w-[100px] w-[80px] flex justify-center items-center bg-[#08D15F] rounded-[5px] text-[#fff] text-[13px]'>
                                        <Link to={`/product/${item.id}`}>
                                        View Details
                                        </Link>
                                        </h3>
                                        <div className="">
                                        <FaSearchPlus className=' lg:text-[26px] text-[red]'/>
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
                        <TabPanel>
                            <div className=" flex justify-between flex-wrap">
                            {watch2.map((item)=>(
                                 <div className=" lg:w-[23%] w-[48%] py-5">
                                 <div className="relative  w-[100%] group ">
                                 <Link to={`/product/${item.id}`}>
                                     <img className="bg-[#F6F7FB] w-[100%]" src={item.thumbnail} alt="" />
                                   </Link>
                                     <div className=" absolute lg:top-[-30px] lg:group-hover:top-[30px]  top-0 lg:left-[20px] lg:right-0 right-0 lg:opacity-0 group-hover:opacity-[1] duration-500 ease-in-out">
                                         <a className=' font-sans font-bold lg:text-[18px] lg:py-[5px] lg:px-[25px] px-[10px] bg-[#262626] text-[#fff] rounded-lg inline-block '>New</a>
                                     </div>    
                                     <div className=" flex items-center gap-5 lg:opacity-[0] lg:group-hover:top-[240px] duration-500 ease-in-out lg:group-hover:opacity-[1]  absolute lg:top-[300px] top-[140px] left-[50%] translate-x-[-50%]">
                                        <h3 className=' lg:h-[40px] h-[20px] lg:w-[100px] w-[80px] flex justify-center items-center bg-[#08D15F] rounded-[5px] text-[#fff] text-[13px]'>
                                        <Link to={`/product/${item.id}`}>
                                        View Details
                                        </Link>
                                        </h3>
                                        <div className="">
                                        <FaSearchPlus className=' lg:text-[26px] text-[red]'/>
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
                       
                        
                    </Container>
                </Tabs>
            </div>
    </section>
  )
}

export default ElectronicsP