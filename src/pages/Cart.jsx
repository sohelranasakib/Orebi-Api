import React from "react";
import Container from "../components/Container";
import Flex from "../components/Flex";
import { Link, useNavigate } from "react-router-dom";
import { RxCaretRight } from "react-icons/rx";
import { ImCross } from "react-icons/im";
import img from "../assets/arrivals.png"
import { useDispatch, useSelector } from "react-redux";
import { productDecrement, productIncrement, productRemove } from "../components/slice/productSlice";
import { ToastContainer, Zoom, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Cart = () => {
  let dispatch = useDispatch()
  let navigate = useNavigate()
  let data = useSelector((state) => state.product.buyItem)



  let handleIncrement = (index) => {
    dispatch(productIncrement(index))

  }

  let handleDecrement = (index) => {
    dispatch(productDecrement(index))
  }

  let handleRemove = (index) => {
    dispatch(productRemove(index))

  }

  const { totalPrice, totalquantity } = data.reduce((acc, item) => {
    acc.totalPrice += item.price * item.qun
    acc.totalquantity += item.qun
    return acc
  }, { totalPrice: 0, totalquantity: 0 })

  let handleCheckOut = () => {
    toast("successfully!")
    setTimeout(() => {
      navigate("/checkout")
    }, 2000)

  }

  return (
    <>
      <section className="pt-[178px]  lg:pb-[90px] pb-[30px] px-3 lg:px-0">
        <Container>
          <div className="lg:pb-[70px] pb-[10px]">
            <h2 className="font-sans text-[#262626] lg:text-[36px] text-[28px] font-bold">
              Cart
            </h2>
            <h3 className="flex items-center gap-x-2 font-sans text-[12px] text-[#767676] font-normal">
              <Link to="/">Home</Link> <RxCaretRight /> Cart
            </h3>
          </div>
          <Flex className="justify-between items-center bg-[#F5F5F3] py-6">
            <div className="w-[40%] text-center">
              <h3 className="font-sans text-[16px] text-[#262626] font-bold">
                Product
              </h3>
            </div>
            <div className="w-[15%] text-center">
              <h3 className="font-sans text-[16px] text-[#262626] font-bold">
                Price
              </h3>
            </div>
            <div className="w-[30%] text-center">
              <h3 className="font-sans text-[16px] text-[#262626] font-bold">
                Quantity
              </h3>
            </div>
            <div className="w-[15%] text-center">
              <h3 className="font-sans text-[16px] text-[#262626] font-bold">
                Total
              </h3>
            </div>
          </Flex>
          {data.map((item, index) => (
            <div className="lg:my-7 my-2">
              <Flex className="justify-between items-center font-sans text-[16px] text-[#262626] font-bold border-[1px] pl-5">
                <div className="w-[40%] flex lg:gap-x-12 gap-x-2 items-center">
                  <div onClick={() => handleRemove(index)} className="cursor-pointer">
                    <ImCross className=" lg:text-[18px] text-[10px]"/>
                  </div>
                  <div className="">
                    <img
                      className="w-full  lg:h-[150px]"
                      src={item.thumbnail}
                      alt="cartimg"
                    />
                  </div>
                  <div className=" lg:text-[18px] text-[12px]">
                    <h4>{item.title}</h4>
                  </div>
                </div>
                <div className="lg:w-[15%] lg:text-[18px] text-[12px] text-center">
                  <h4>${item.price}</h4>
                </div>
                <div className="lg:w-[30%] w-[5%] flex justify-center">
                  <div className="flex lg:gap-x-6 gap-x-2 justify-around border-[1px] border-[#262626] lg:py-2 w-[150px] lg:ms-[18px]">
                    <div onClick={() => handleDecrement(index)} className="cursor-pointer">
                      -
                    </div>
                    <div className="">{item.qun}</div>
                    <div onClick={() => handleIncrement(index)} className="cursor-pointer">
                      +
                    </div>
                  </div>
                </div>
                <div className="w-[15%] lg:text-[18px] text-[14px] text-center">
                  <h4>${item.price * item.qun}</h4>
                </div>
              </Flex>
              <Flex className="lg:gap-x-5 gap-x-2 lg:py-4 py-2 border-[1px] pl-5 items-center">
                <select
                  name=""
                  id=""
                  className="border-2 lg:w-[200px] w-[100px] lg:py-[5px] font-sans text-[14px] text-[#262626] font-bold"
                >
                  <option
                    className="font-sans text-[14px] text-[#262626] font-bold"
                    value=""
                  >
                    SIZE
                  </option>
                  <option
                    className="font-sans text-[14px] text-[#262626] font-bold"
                    value=""
                  >
                    S
                  </option>
                  <option
                    className="font-sans text-[14px] text-[#262626] font-bold"
                    value=""
                  >
                    M
                  </option>
                  <option
                    className="font-sans text-[14px] text-[#262626] font-bold"
                    value=""
                  >
                    L
                  </option>
                  <option
                    className="font-sans text-[14px] text-[#262626] font-bold"
                    value=""
                  >
                    XL
                  </option>
                  <option
                    className="font-sans text-[14px] text-[#262626] font-bold"
                    value=""
                  >
                    XXL
                  </option>
                </select>
                <div className="">
                  <h4 className="font-sans text-[14px] text-[#262626] font-bold">
                    Apply coupon
                  </h4>
                </div>
              </Flex>
            </div>
          ))}
          <div className="text-end">
            <div className="">
              <h3 className="font-sans text-[20px] text-[#262626] font-bold lg:pb-[24px] pb-[10px] lg:pt-[50px] pt-[30px]">
                Cart Total
              </h3>
            </div>
            <div className="flex justify-end lg:pb-[45px] pb-[10px]">
              <table className="border-2">
                <tr>
                  <td className="border-2 py-2 w-[250px] text-start pl-5 font-sans text-[16px] text-[#262626] font-bold">
                    Total Quantity
                  </td>
                  <td className="border-2 py-2 w-[250px] text-start pl-5 font-sans text-[16px] text-[#262626] font-normal">
                    {totalquantity}
                  </td>
                </tr>
                <tr>
                  <td className="border-2 py-2 w-[250px] text-start pl-5 font-sans text-[16px] text-[#262626] font-bold">
                    Subtotal
                  </td>
                  <td className="border-2 py-2 w-[250px] text-start pl-5 font-sans text-[16px] text-[#767676] font-normal">
                    {totalPrice}$
                  </td>
                </tr>
                <tr>
                  <td className="border-2 py-2 w-[250px] text-start pl-5 font-sans text-[16px] text-[#262626] font-bold">
                    Total
                  </td>
                  <td className="border-2 py-2 w-[250px] text-start pl-5 font-sans text-[16px] text-[#262626] font-normal">
                    {totalPrice}$
                  </td>
                </tr>
              </table>
            </div>
            <div className="">
              <button onClick={handleCheckOut} className="font-sans text-[16px] text-[#FFF] font-bold py-[16px] px-[25px] bg-[#262626]">
                Proceed to Checkout
              </button>
            </div>
          </div>
          <ToastContainer className=" w-[100%] font-sans font-bold text-[30px] text-center"
            position="top-center"
            autoClose={2500}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            transition={Zoom}
          />
        </Container>
      </section>
    </>
  );
};

export default Cart;