import React, { useContext } from 'react'
import Container from './Container'
import Flex from './Flex'
import Arrivals from './Arrivals'
import { apiData } from './ContextApi'
import Slider from "react-slick";
import { FaLongArrowAltRight, FaLongArrowAltLeft  } from "react-icons/fa";



function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div onClick={onClick} className='h-[60px] w-[60px] bg-[#979797] rounded-full text-center leading-[60px] absolute top-[50%] right-0 translate-y-[-150%] cursor-pointer duration-300 ease-in-out hover:bg-[#000]  '>< FaLongArrowAltRight className='inline-block text-[24px] text-white' /></div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div onClick={onClick} className='h-[60px] w-[60px] bg-[#979797] rounded-full text-center leading-[60px] absolute top-[50%] left-0 translate-y-[-150%] cursor-pointer duration-300 ease-in-out hover:bg-[#000] z-30  '>< FaLongArrowAltLeft className='inline-block text-[24px] text-white' /></div>
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
        slidesToShow: 1,
        slidesToScroll: 1,

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
               <Arrivals item={item}/>
          ))}
           </Slider>
    </Container>
   </section>
  )
}

export default NewArrivals