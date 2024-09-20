import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'


const Checkout = () => {
  
  return (
    <section className='pt-[178px] px-4 '>

      <Container>
        <div className=" items-center">
        <h2 className='font-sans font-bold   text-[42px]  text-[#262626] '>Checkout</h2>
        <h3 className='font-sans font-bold   text-[16px]  text-[#262626] '>Home  +  Checkout</h3>
        <p className='font-sans font-medium   text-[16px]  text-[#262626] pt-[150px]'>Have a coupon? Click here to enter your code</p>
        </div>
        <Flex className=" justify-between">
          <div className="w-[48%]">
            <h3 className='font-sans font-bold   text-[18px]  text-[#262626] pt-[50px] '>First Name</h3>
            <input className='w-full h-[50px] border-b-2 outline-none' type="text" placeholder='First Name...' />
          </div>
          <div className="w-[48%]">
          <h3 className='font-sans font-bold   text-[18px]  text-[#262626] pt-[50px] '>Last Name</h3>
          <input className='w-full h-[50px] border-b-2 outline-none' type="text" placeholder='Last Name...' />
          </div>

        </Flex>
        <div className="">
        <div className="">
        <h3 className='font-sans font-bold   text-[18px]  text-[#262626] pt-[50px] '>Companye Name (optional)</h3>
        <input className='w-full h-[50px] border-b-2 outline-none' type="text" placeholder='Companye Name...' />
        </div>
        <div className="">
        <h3 className='font-sans font-bold   text-[18px]  text-[#262626] pt-[50px] '>Country *</h3>
        <input className='w-full h-[50px] border-b-2 outline-none' type="text" placeholder='Please select...' />
        </div>
        <div className="">
        <h3 className='font-sans font-bold   text-[18px]  text-[#262626] pt-[50px] '>Street Address *</h3>
        <input className='w-full h-[50px] border-b-2 outline-none' type="text" placeholder='House number and street name...' />
        <input className='w-full h-[50px] border-b-2 outline-none' type="text" placeholder='Apartment, suite, unit etc. (optional)...' />
        </div>
        <div className="">
        <h3 className='font-sans font-bold   text-[18px]  text-[#262626] pt-[50px] '>Town/City *</h3>
        <input className='w-full h-[50px] border-b-2 outline-none' type="text" placeholder='Town/City ...' />
        </div>
        <div className="">
        <h3 className='font-sans font-bold   text-[18px]  text-[#262626] pt-[50px] '>County (optional)</h3>
        <input className='w-full h-[50px] border-b-2 outline-none' type="text" placeholder='County ...' />
        </div>
        <div className="">
        <h3 className='font-sans font-bold   text-[18px]  text-[#262626] pt-[50px] '>Post Code *</h3>
        <input className='w-full h-[50px] border-b-2 outline-none' type="text" placeholder='Post Code  ...' />
        </div>
        <div className="">
        <h3 className='font-sans font-bold   text-[18px]  text-[#262626] pt-[50px] '>Phone *</h3>
        <input className='w-full h-[50px] border-b-2 outline-none' type="text" placeholder='Phone ...' />
        </div>
        <div className="">
        <h3 className='font-sans font-bold   text-[18px]  text-[#262626] pt-[50px] '>Email Address *</h3>
        <input className='w-full h-[50px] border-b-2 outline-none' type="text" placeholder='Email...' />
        </div>
        </div>
        {/* <div className=" relative after:absolute after:contain-[''] after:h-[2px] after:w-[100%] after:bottom-[-50px] after:left-0 after:bg-[#262626]">
          <h2 className='font-sans font-bold   text-[42px]  text-[#262626] pt-[100px] '>Additional Information</h2>
          <h3 className='font-sans font-bold   text-[16px]  text-[#262626] pt-[50px] '>Other Notes (optional)</h3>
          <p className='font-sans font-medium   text-[16px]  text-[#262626] '>Notes about your order, e.g. special notes for delivery.</p>
        </div> */}
          <div className="my-[100px]">
                        <h3 className='font-sans text-[#262626] text-[39px] font-bold pb-[40px]'>Your Order</h3>
                        <table className="border-2">
                            <tr>
                                <td className="border-2 py-2 w-[250px] text-start pl-5 font-sans text-[16px] text-[#262626] font-bold">
                                    Total Quantity
                                </td>
                                <td className="border-2 py-2 w-[250px] text-start pl-5 font-sans text-[16px] text-[#262626] font-normal">
                                    totalQuantity
                                </td>
                            </tr>
                            <tr>
                                <td className="border-2 py-2 w-[250px] text-start pl-5 font-sans text-[16px] text-[#262626] font-bold">
                                    Subtotal
                                </td>
                                <td className="border-2 py-2 w-[250px] text-start pl-5 font-sans text-[16px] text-[#767676] font-normal">
                                    totalPrice.toFixed(2) $
                                </td>
                            </tr>
                            <tr>
                                <td className="border-2 py-2 w-[250px] text-start pl-5 font-sans text-[16px] text-[#262626] font-bold">
                                    Total
                                </td>
                                <td className="border-2 py-2 w-[250px] text-start pl-5 font-sans text-[16px] text-[#262626] font-normal">
                                    totalPrice.toFixed(2) $
                                </td>
                            </tr>
                        </table>
                    </div>
        
      </Container>

    </section>
  )
}

export default Checkout