import React, { useContext, useEffect, useRef, useState } from 'react'
import Container from './Container'
import Flex from './Flex'
import { FaBarsStaggered, FaCartArrowDown } from 'react-icons/fa6';
import { FaSearch, FaUser, FaCaretDown, FaShoppingCart } from 'react-icons/fa';
import { GiTireIronCross } from 'react-icons/gi';
import logo from "../assets/logo.png"
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { apiData } from './ContextApi';

const Navber = () => {
    let info = useContext(apiData)
    let data = useSelector((state) => state.product.buyItem)

    let [cartShow, setCartShow] = useState(false);
    let [accountShow, setAccountShow] = useState(false);
    let [userShow, setUserShow] = useState(false);

    let [searchInput, setSearchInput] = useState('')
    let [searchFilter, setSearchFilter] = useState([])

    // State to manage the currently highlighted search index
    let [highlightedIndex, setHighlightedIndex] = useState(-1)

    let cartref = useRef();
    let accountref = useRef();
    let userref = useRef();
    let navigate = useNavigate()

    useEffect(() => {
        document.addEventListener('click', (e) => {
            if (cartref.current.contains(e.target) === true) {
                setCartShow(!cartShow);
            } else {
                setCartShow(false);
            }
            if (accountref.current.contains(e.target) === true) {
                setAccountShow(!accountShow);
            } else {
                setAccountShow(false);
            }
            if (userref.current.contains(e.target) === true) {
                setUserShow(!userShow);
            } else {
                setUserShow(false);
            }
        });
    }, [cartShow, accountShow, userShow]);

    let handleInput = (e) => {
        setSearchInput(e.target.value);
        if (e.target.value === "") {
            setSearchFilter([]);
            setHighlightedIndex(-1); // Reset highlighted index when input is cleared
        } else {
            let searchone = info.filter((item) => item.title.toLowerCase().includes(e.target.value));
            setSearchFilter(searchone);
            setHighlightedIndex(0); // Reset to the first item when input changes
        }
    }

    let handleSingleSearch = (id) => {
        navigate(`/product/${id}`)
        setSearchFilter([])
        setSearchInput("")
    }

    let handleKey = (e) => {
        if (e.key === "ArrowDown") {
            // Move down the list
            setHighlightedIndex((prevIndex) => Math.min(prevIndex + 1, searchFilter.length - 1));
        } else if (e.key === "ArrowUp") {
            // Move up the list
            setHighlightedIndex((prevIndex) => Math.max(prevIndex - 1, 0));
        } else if (e.key === "Enter") {
            // Navigate to the selected product
            if (highlightedIndex !== -1 && searchFilter[highlightedIndex]) {
                handleSingleSearch(searchFilter[highlightedIndex].id);
            }
        }
    }

    return (
        <section className=' w-full pt-[80px] fixed z-40'>
            <div className='bg-[#D8D8D8] h-[100px] '>
                <Container>
                    <Flex className=" h-[100px] items-center">
                        <div className=" lg:w-[30%] w-[15%]">
                            <div className=" lg:ml-0 ml-3">
                                <div ref={cartref} className=" relative flex lg:items-center items-center  gap-x-3">
                                    <div className="cursor-pointer">
                                        <FaBarsStaggered className=' text-[22px]' />
                                    </div>
                                    <h2 className="font-sans hidden lg:block cursor-pointer font-bold py-[20px] lg:py-0 text-[16px]  text-[#767676] hover:lg:text-[#262626] hover:text-[#62d7f5b4] hover:duration-700 ease-in-out">
                                        Shop by Category
                                    </h2>
                                </div>
                            </div>
                            {cartShow &&
                                <div className=" absolute z-50 top-[150px] lg:left-[120px] bg-[#262626] lg:w-[300px] w-[200px] rounded-lg">
                                    <ul className=' py-2 px-2'>
                                        <li className="text-[rgba(255,255,255,0.9)] font-sans font-bold text-[16px] cursor-pointer py-2 pl-3 duration-500 ease-in-out hover:pl-6 hover:bg-white hover:text-black rounded-lg ">
                                            Accesories
                                        </li>
                                        <li className="text-[rgba(255,255,255,0.9)] font-sans font-bold text-[16px] cursor-pointer py-2 pl-3 duration-500 ease-in-out hover:pl-6 hover:bg-white hover:text-black rounded-lg ">
                                            <Link to="/furniture">Furniture</Link>
                                        </li>
                                        <li className="text-[rgba(255,255,255,0.9)] font-sans font-bold text-[16px] cursor-pointer py-2 pl-3 duration-500 ease-in-out hover:pl-6 hover:bg-white hover:text-black rounded-lg ">
                                            <Link to="/electronics">Electronics</Link>
                                        </li>
                                        <li className="text-[rgba(255,255,255,0.9)] font-sans font-bold text-[16px] cursor-pointer py-2 pl-3 duration-500 ease-in-out hover:pl-6 hover:bg-white hover:text-black rounded-lg ">
                                            <Link to="/clothes">Clothes</Link>
                                        </li>
                                        <li className="text-[rgba(255,255,255,0.9)] font-sans font-bold text-[16px] cursor-pointer py-2 pl-3 duration-500 ease-in-out hover:pl-6 hover:bg-white hover:text-black rounded-lg ">
                                            <Link to="/bag"> Bags</Link>
                                        </li>
                                        <li className="text-[rgba(255,255,255,0.9)] font-sans font-bold text-[16px] cursor-pointer py-2 pl-3 duration-500 ease-in-out hover:pl-6 hover:bg-white hover:text-black rounded-lg ">
                                            Home appliances
                                        </li>
                                    </ul>
                                </div>
                            }
                        </div>
                        <div className="lg:w-[40%] relative">
                            <div className=" relative">
                                <div className="relative inline-block">
                                    <input 
                                        value={searchInput} 
                                        onKeyDown={handleKey} // Use onKeyDown instead of onKeyUp for consistent handling
                                        onChange={handleInput} 
                                        type="search" 
                                        placeholder='Type to search' 
                                        className='border-[2px] border-[#F0F0F0] lg:w-[644px] w-[200px] lg:py-4 py-2 pl-5 pr-12 outline-none' 
                                    />
                                    <div className="absolute top-[50%] right-[15px] translate-y-[-50%]">
                                        <FaSearch />
                                    </div>
                                </div>
                            </div>
                            {searchFilter.length > 0 &&
                                <div className=" lg:w-[500px] w-[250px] lg:h-[400px] h-[250px] overflow-y-scroll absolute z-50 top-[58px]  bg-[#f1f1f1] py-3 ">
                                    {searchFilter.map((item, index) => (
                                        <div 
                                            key={item.id}
                                            onClick={() => handleSingleSearch(item.id)} 
                                            className={`flex justify-around items-center cursor-pointer py-2 px-4 ${
                                                index === highlightedIndex ? 'bg-gray-300' : ''
                                            }`}
                                        >
                                            <div className="">
                                                <img className=' w-[100px] h-[100px]' src={item.thumbnail} alt="" />
                                            </div>
                                            <div className="font-sans  font-bold   text-[16px]  text-[#262626]">
                                                <h2 className=' font-sans font-medium text-[16px] text-[#262626]'>{item.title}</h2>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            }
                        </div>
                        <div className=" lg:w-[30%] w-[23%]">
                            <div className="  flex gap-2 justify-end items-center">
                                <div ref={accountref} className="">
                                    <div className="flex">
                                        <FaUser className=' text-[22px]' />
                                        <FaCaretDown className=' text-[24px]' />
                                    </div>
                                </div>

                                <div ref={userref} className="">
                                    <div className=" relative ">
                                        <FaCartArrowDown className=' text-[22px]' />
                                        {data.length > 0 ? <div className=" absolute  h-[20px] w-[20px] bg-[#262626] left-[20px] top-[-15px] rounded-full text-[#fff] text-center z-50">
                                            {data.length}
                                        </div> : ""}

                                    </div>
                                </div>
                            </div>
                            {accountShow &&
                                <div className="absolute z-50 top-[150px] lg:right-[150px] right-4 w-[200px] py-[10px] bg-[#262626]">
                                    <div className=" text-center">
                                        <Link to="/myaccount">
                                            <h3 className='w-[148px] h-[50px] border-2  inline-block text-center leading-[50px] font-sans font-bold  text-[16px] text-[#262626] duration-500 ease-in-out bg-white  hover:bg-[green] hover:text-[#fff] rounded-lg' >My Account</h3>
                                        </Link>
                                    </div>
                                    <div className=" text-center py-2">
                                        <Link to="/login">
                                            <h3 className='w-[148px] h-[50px] border-2  inline-block text-center leading-[50px] font-sans font-bold  text-[16px]  text-[#262626] duration-500 ease-in-out bg-white hover:bg-[green] hover:text-[#fff] rounded-lg' >
                                                Log In
                                            </h3>
                                        </Link>
                                    </div>
                                    <div className=" text-center">
                                        <Link to="/signup">
                                            <h3 className='w-[148px] h-[50px] border-2  inline-block text-center leading-[50px] font-sans font-bold  text-[16px]  text-[#262626] duration-500 ease-in-out bg-white hover:bg-[green] hover:text-[#fff] rounded-lg' >Sign up</h3>
                                        </Link>
                                    </div>
                                </div>
                            }
                            {userShow &&
                                <div className=" absolute w-[300px] top-[150px] lg:right-[100px] right-3  bg-black  py-3 ">
                                    <div className="flex justify-around items-center ">
                                        <div className="">
                                            <img className=' w-[100px] h-[100px]' src={logo} alt="" />
                                        </div>
                                        <div className="font-sans  font-bold   text-[16px]  text-[#262626]">
                                            <h2 className=' font-sans font-medium text-[16px] text-white'>title</h2>
                                            <h3 className=' font-sans font-medium text-[16px] text-white'>44.00</h3>
                                        </div>
                                        <div className=" text-white">
                                            <GiTireIronCross />
                                        </div>
                                    </div>
                                    <div className=" flex justify-center gap-2 pt-2">
                                        <Link to="/cart">
                                            <a className=' font-sans font-bold px-[25px] text-center py-[8px] border-2 bg-white rounded-lg hover:bg-[green] hover:text-white duration-700 ease-in-out' href="#">View Cart</a>
                                        </Link>
                                        <Link to="/Checkout">
                                            <a className=' font-sans font-bold px-[25px] text-center py-[8px] border-2 bg-white rounded-lg hover:bg-[green] hover:text-white duration-700 ease-in-out' href="#">Check Out</a>
                                        </Link>
                                    </div>
                                </div>
                            }
                        </div>
                    </Flex>
                </Container>
            </div>
        </section>
    )
}

export default Navber;
