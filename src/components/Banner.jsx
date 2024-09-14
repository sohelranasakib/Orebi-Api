import React from 'react'
import banner from "../assets/banner.png"
import Container from './Container'
import Flex from './Flex'
import { TbTruckDelivery } from "react-icons/tb";
import { IoReload } from "react-icons/io5";
import Slider from "react-slick";


const Banner = () => {
    const settings = {
        dots: true,
        infinite: true,
        arrows:false,
        speed: 500,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        appendDots: dots => (
          <div
            style={{
              borderRadius: "10px",
              padding: "10px",
              position:"absolute",
              left:"90px",
              top:"50%",
              transform:"translateY(-50%)"
            }}
          >
            <ul style={{ margin: "0px" }}> {dots} </ul>
          </div>
        ),
        customPaging: i => (
          <div className=' ami'
            style={{
              width: "30px",
              color: "transparent",
              padding: "10px 0",
              borderRight: "4px #fff solid"
            }}
          >
            0{i + 1}
          </div>
        )
      };
    return (
        <section className='pt-[178px]'>
             <Slider {...settings}>
             <div className="">
                <img src={banner} alt="" />
            </div>
            <div className="">
                <img src={banner} alt="" />
            </div>
            <div className="">
                <img src={banner} alt="" />
            </div>
            <div className="">
                <img src={banner} alt="" />
            </div>
             </Slider>
            <Container>
                <Flex className=" justify-between lg:px-0 px-2">
                    <div className=" flex items-center gap-2">
                        <h3 className='lg:text-[32px]  text-[#262626]  font-sans font-bold'>2</h3>
                        <h2 className=' font-sans font-bold lg:text-[20px] text-[12px]  text-[#262626]'>Two years warranty</h2>
                    </div>
                    <div className=" flex items-center gap-2">
                       <TbTruckDelivery className='lg:text-[22px] text-[24px] text-[#262626]'/>
                       <h2 className='  font-sans font-bold lg:text-[20px] text-[12px]  text-[#262626]'>Free shopping</h2>
                    </div>
                    <div className=" flex items-center gap-2">
                    <IoReload className='lg:text-[22px]  text-[22px]  text-[#262626]'/>
                    <h2 className='font-sans font-bold lg:text-[16px] text-[12px]  text-[#262626]'>Return policy in 30 days</h2>
                    </div>
                </Flex>
            </Container>
        </section>
    )
}

export default Banner