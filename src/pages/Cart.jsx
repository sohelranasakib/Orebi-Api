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
      <section className="pt-[178px]  lg:pb-[90px] pb-[30px] px-1 lg:px-0">
        <Container>
          <div className="lg:pb-[70px] pb-[10px]">
            <h2 className="font-sans text-[#262626] lg:text-[36px] text-[20px] font-bold">
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
            <div className="my-7">
              <Flex className="justify-between items-center font-sans text-[16px] text-[#262626] font-bold border-[1px] pl-5">
                <div className="w-[40%] flex gap-x-12 items-center">
                  <div onClick={() => handleRemove(index)} className="cursor-pointer">
                    <ImCross />
                  </div>
                  <div className="">
                    <img
                      className="w-full h-[150px]"
                      src={item.thumbnail}
                      alt="cartimg"
                    />
                  </div>
                  <div className="">
                    <h4>{item.title}</h4>
                  </div>
                </div>
                <div className="w-[15%] text-center">
                  <h4>${item.price}</h4>
                </div>
                <div className="w-[30%] flex justify-center">
                  <div className="flex gap-x-6 justify-around border-[1px] border-[#262626] py-2 w-[150px] ms-[18px]">
                    <div onClick={() => handleDecrement(index)} className="cursor-pointer">
                      -
                    </div>
                    <div className="">{item.qun}</div>
                    <div onClick={() => handleIncrement(index)} className="cursor-pointer">
                      +
                    </div>
                  </div>
                </div>
                <div className="w-[15%] text-center">
                  <h4>${item.price * item.qun}</h4>
                </div>
              </Flex>
              <Flex className="gap-x-5 py-4 border-[1px] pl-5 items-center">
                <select
                  name=""
                  id=""
                  className="border-2 w-[200px] py-[5px] font-sans text-[14px] text-[#262626] font-bold"
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
              <h3 className="font-sans text-[20px] text-[#262626] font-bold pb-[24px] pt-[50px]">
                Cart Total
              </h3>
            </div>
            <div className="flex justify-end pb-[45px]">
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