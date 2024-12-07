import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div className="max-w-[1440px] mx-[20px] md:mx-[50px] customMd:mx-[135px] 2xl:mx-auto overflow-hidden my-[80px]">
      <div className="flex flex-wrap justify-start items-center gap-3 mb-20">
        <h1 className="font-[400] text-[14px] leading-[21px] text-black/50">Home</h1>
        <h1 className="font-[400] text-[14px] leading-[21px] text-black/50">/</h1>
        <h1 className="font-[400] text-[14px] leading-[21px] text-black">Cart</h1>
      </div>

      <div className="space-y-[80px]">
        <div className="space-y-[24px]">
          <div className="w-full space-y-10 flex flex-col justify-center items-center">

            <div className="flex flex-wrap justify-between w-full h-auto items-center shadow-[0px_1px_13px_0px_#0000000D]">
              <div className="px-4 py-2 text-center w-1/4 md:w-auto">Product</div>
              <div className="px-4 py-2 text-center w-1/4 md:w-auto">Price</div>
              <div className="px-4 py-2 text-center w-1/4 md:w-auto">Quantity</div>
              <div className="px-4 py-2 text-center w-1/4 md:w-auto">Subtotal</div>
            </div>

            <div className="flex flex-wrap justify-between w-full items-center h-auto shadow-[0px_1px_13px_0px_#0000000D]">
              <div className="flex items-center gap-2 justify-start px-4 py-2 w-1/2 md:w-auto">
                <Image src="/led.png" alt='led' width={80} height={80} className='w-[35px] h-[29px]'></Image>
                <span className="whitespace-nowrap">LCD Monitor</span>
              </div>
              <div className="px-4 py-2 text-center w-1/4 md:w-auto">$650</div>
              <div className="px-4 py-2 text-center w-1/4 md:w-auto">
                <input type="number" value={1} className="w-16 rounded px-2" readOnly />
              </div>
              <div className="px-4 py-2 text-center w-1/4 md:w-auto">$650</div>
            </div>

            <div className="flex flex-wrap justify-between w-full items-center h-auto shadow-[0px_1px_13px_0px_#0000000D]">
              <div className="flex items-center gap-2 justify-start px-4 py-2 w-1/2 md:w-auto">
                <Image src="/controller.png" alt="gamepad" width={80} height={80} className="w-[35px] h-[29px]"></Image>
                <span className="whitespace-nowrap">H1 Gamepad</span>
              </div>
              <div className="px-4 py-2 text-center w-1/4 md:w-auto">$550</div>
              <div className="px-4 py-2 text-center w-1/4 md:w-auto">
                <input type="number" value={2} className="w-16 rounded px-2" readOnly />
              </div>
              <div className="px-4 py-2 text-center w-1/4 md:w-auto">$1100</div>
            </div>
          </div>

          <div className="flex flex-wrap justify-between items-center w-full gap-4">
            <button className="w-full md:w-[218px] h-[56px] rounded-[4px] font-[500] text-[16px] border-[1px] border-black/50 py-[16px] px-[48px] hover:bg-black/5 duration-300 ease-in-out">
              Return To Shop
            </button>
            <button className="w-full md:w-[195px] h-[56px] rounded-[4px] font-[500] text-[16px] border-[1px] border-black/50 py-[16px] px-[48px] hover:bg-black/5 duration-300 ease-in-out">
              Update Cart
            </button>
          </div>
        </div>

        <div className="flex flex-wrap justify-between items-start w-full gap-4">
          <div className="flex flex-wrap justify-center items-center gap-4 w-full md:w-auto">
            <input
              type="text"
              placeholder="Coupon Code"
              className="w-full md:w-[300px] h-[56px] rounded-[4px] border-[1px] border-black pl-[20px] font-[400] text-[16px]"
            />
            <button className="w-full md:w-[211px] h-[56px] rounded-[4px] bg-[#DB4444] text-white font-[500] text-[16px] border-[1px] border-black/50 py-[16px] px-[48px] hover:bg-[#DB4444]/80 duration-300 ease-in-out">
              Apply Coupon
            </button>
          </div>

          <div className="w-full md:w-[470px] h-auto rounded-[4px] border-[1.5px] border-black py-8 px-6">
            <h1 className="font-[500] text-[20px] leading-[28px] mb-6">Cart Total</h1>
            <div className="flex justify-between w-full items-center">
              <h1 className="font-[400] text-[16px] leading-[24px]">Subtotal:</h1>
              <h1 className="font-[400] text-[16px] leading-[24px]">$1750</h1>
            </div>
            <hr className="my-[15px]" />
            <div className="flex justify-between w-full items-center">
              <h1 className="font-[400] text-[16px] leading-[24px]">Shipping:</h1>
              <h1 className="font-[400] text-[16px] leading-[24px] capitalize">free</h1>
            </div>
            <hr className="my-[15px]" />
            <div className="flex justify-between w-full items-center mb-4">
              <h1 className="font-[400] text-[16px] leading-[24px]">Total:</h1>
              <h1 className="font-[400] text-[16px] leading-[24px] capitalize">$1750</h1>
            </div>

            <div className="flex justify-center items-center">
              <button className="w-full md:w-[260px] h-[56px] whitespace-nowrap rounded-[4px] bg-[#DB4444] text-white font-[500] text-[16px] border-[1px] border-black/50 py-[16px] px-[48px] hover:bg-[#DB4444]/80 duration-300 ease-in-out">
                Proceed to checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>



  )
}

export default page
