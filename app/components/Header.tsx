"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { SlArrowDown } from "react-icons/sl";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { FiAlignRight } from "react-icons/fi";
import { IoCloseSharp } from "react-icons/io5";

const Header = () => {

  const [click, setClick] = useState(false);

  const Toggle = () => {
    setClick(!click);
  }

  return (
    <div className="flex flex-col gap-[40px] overflow-hidden max-w-[1440px] customLg:mx-auto w-screen">

      <div className='overflow-hidden bg-black'>
        <div className="hidden md:h-full md:p-2 xl:h-[48px] md:flex justify-end items-center md:gap-[100px] xl:gap-[231px] md:mx-[50px] customMd:mx-[135px]">
          <div className="flex justify-center items-center gap-[8px]">
            <h1 className='text-[#FAFAFA] font-[400] leading-[21px] text-[14px]'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</h1>
            <Link href="/" className='text-[#FAFAFA] font-[600] leading-[21px] text-[14px] underline'>ShopNow</Link>
          </div>
          <div className=" flex justify-center items-center gap-[5px]">
            <h1 className='text-[#FAFAFA] font-[400] leading-[21px] text-[14px]'>English</h1>
            <h1 className='text-[#FAFAFA] font-[600] flex justify-center items-center'><SlArrowDown /></h1>
          </div>
        </div>
      </div>

      <div className="mx-[20px] md:mx-[50px] customMd:mx-[135px] flex justify-between items-center md:h-full customMd:h-[38px]">
        <div className="text-black text-[24px] font-[700] leading-[24px] tracking-[3%]">Exclusive</div>
        <button onClick={Toggle} className='md:hidden scale-150'>{click ? <IoCloseSharp className='scale-150' /> : <FiAlignRight className='scale-150' />}</button>
        <div className="hidden md:flex justify-center items-center gap-[48px]">
          <Link href="/" className='text-black font-[400] text-[16px] leading-[24px] text-center hover:underline duration-300 ease-in-out underline-offset-4'>Home</Link>
          <Link href="" className='text-black font-[400] text-[16px] leading-[24px] text-center hover:underline duration-300 ease-in-out underline-offset-4'>Contact</Link>
          <Link href="" className='text-black font-[400] text-[16px] leading-[24px] text-center hover:underline duration-300 ease-in-out underline-offset-4'>About</Link>
          <Link href="" className='text-black font-[400] text-[16px] leading-[24px] text-center hover:underline duration-300 ease-in-out underline-offset-4'>Sign Up</Link>
        </div>
        <div className="hidden xl:flex justify-center items-center gap-[24px]">
          <div className="bg-[#F5F5F5] py-[7px] pr-[12px] pl-[20px] flex justify-center items-center gap-[34px] rounded-sm">
            <input type="text" placeholder='What are you looking for?' className='font-[400] text-[12px] text-[#000000] leading-[18px] bg-[#F5F5F5]' />
            <h1 className='text-black font-extrabold scale-150'><CiSearch /></h1>
          </div>
          <Link href="/wishlist" className='w-[32px] h-[32px] flex items-center justify-center scale-150'><CiHeart className='w-[20px] h-[17.83px] hover:text-red-600 text-black duration-200 ease-in-out ' /></Link>
          <Link href="/cart" className='w-[32px] h-[32px] flex items-center justify-center scale-150'><IoCartOutline className='w-[20px] h-[17.83px] hover:text-red-600 text-black duration-200 ease-in-out ' /></Link>
        </div>
      </div>

      <hr className='-mt-[25px]' />

      <div className={`${click ? "opacity-100" : "opacity-0"} duration-300 ease-in-out transition-all flex flex-col md:hidden justify-center items-center gap-[18px] bg-gradient-to-tr from-[#DB4444]/70 via-[#002345]/70 to-black/70 p-3 absolute z-50 w-full top-[85px] rounded-xl backdrop-blur-md border border-black/30`}>
        <Link href="/" className='text-white font-[400] text-[16px] leading-[24px] text-center'>Home</Link>
        <Link href="" className='text-white font-[400] text-[16px] leading-[24px] text-center'>Contact</Link>
        <Link href="" className='text-white font-[400] text-[16px] leading-[24px] text-center'>About</Link>
        <Link href="" className='text-white font-[400] text-[16px] leading-[24px] text-center'>Sign Up</Link>
        <Link href="/wishlist" className='text-white font-[400] text-[16px] leading-[24px] text-center'>Wish List</Link>
        <Link href="/cart" className='text-white font-[400] text-[16px] leading-[24px] text-center'>Cart</Link>
      </div>

    </div>
  )
}

export default Header
