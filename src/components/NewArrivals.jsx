 import React, { useContext } from 'react'
import Container from './Container'
import Flex from './Flex'
import Arrivals from './Arrivals'
import { apiData } from './ContextApi'
import Slider from "react-slick";
import { FaLongArrowAltRight, FaLongArrowAltLeft  } from "react-icons/fa";
import { Link } from 'react-router-dom'



function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div onClick={onClick} className='lg:h-[60px] h-[30px] lg:w-[60px] w-[30px]  bg-[#979797] rounded-full text-center leading-[60px] absolute lg:top-[50%] top-[40%] right-0 lg:translate-y-[-150%] translate-y-[-50%] cursor-pointer duration-300 ease-in-out hover:bg-[#000] z-30  '>< FaLongArrowAltRight className='lg:inline-block lg:text-[24px] text-white lg:left-0 left-[50%] lg:translate-x-0 translate-x-[50%] lg:top-0 top-[50%] lg:translate-y-0 translate-y-[50%]' /></div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div onClick={onClick} className='lg:h-[60px] h-[30px] lg:w-[60px] w-[30px]  bg-[#979797] rounded-full text-center leading-[60px] absolute lg:top-[50%] top-[40%] left-0 lg:translate-y-[-150%] translate-y-[-50%] cursor-pointer duration-300 ease-in-out hover:bg-[#000] z-30  '>< FaLongArrowAltLeft className='lg:inline-block lg:text-[24px] text-white lg:left-0 left-[50%] lg:translate-x-0 translate-x-[50%] lg:top-0 top-[50%] lg:translate-y-0 translate-y-[50%]' /></div>
  );
}

const NewArrivals = () => {
 let data = useContext(apiData)
 
 var settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  responsive: [
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,

      }
    },

  ]
};
 
  return (
   <section className=' lg:pb-[40px] pb-0 lg:px-0 px-3'>
    <Container>
    <h2 className=' font-sans font-bold text-[32px]  text-[#262626] pb-[20px]'>New Arrivals</h2>
        <Slider {...settings}>
          {data.map((item)=>(
               <Link to="/product"><Arrivals item={item}/></Link>
          ))}
           </Slider>
    </Container>
   </section>
  )
}

export default NewArrivals