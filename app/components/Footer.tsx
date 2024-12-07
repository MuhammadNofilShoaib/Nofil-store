import Image from 'next/image';
import React from 'react'
import { IoSend } from "react-icons/io5";
import { RiFacebookLine } from "react-icons/ri";
import { CiTwitter } from "react-icons/ci";

import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa6";



const Footer = () => {
    return (
        <div className='bg-black overflow-hidden max-w-[1440px] customLg:mx-auto w-screen'>
            <div className=' h-full xl:h-[440px] flex flex-col'>

                <div className="mx-[20px] md:mx-[50px] customMd:mx-[135px] grid grid-rows-5 grid-cols-1 sm:grid-rows-3 sm:grid-cols-2 md:grid-rows-3 md:grid-cols-2 lg:grid-rows-2 lg:grid-cols-3 xl:grid-cols-5 xl:grid-rows-1
             justify-between items-start pt-[100px] gap-[87px] h-full xl:h-[236px]">



                    <div className="flex flex-col justify-center items-start gap-4">
                        <h1 className='font-[700] text-2xl leading-[24px] text-[#fafafa] tracking-[3%]'>Exclusive</h1>
                        <h1 className='font-[500] text-[20px] text-[#fafafa]'>Subscribe</h1>
                        <h1 className='font-[400] text-[16px] text-[#fafafa]'>Get 10% off your first order</h1>
                        <div className="flex justify-center items-center gap-[32px] border border-white py-[12px] px-[16px] rounded-md">
                            <input type="text" placeholder='Enter your email' className='bg-black w-[130px]' />
                            <h1><IoSend className='text-white' /></h1>
                        </div>
                    </div>

                    <div className="flex flex-col justify-center items-start gap-4">
                        <h1 className='font-[500] text-[20px] text-[#fafafa]'>Support</h1>
                        <h1 className='font-[400] text-[16px] text-[#fafafa]'>111 Bijoy sarani, Dhaka, <br />  DH 1515, Bangladesh.</h1>
                        <h1 className='font-[400] text-[16px] text-[#fafafa]'>exclusive@gmail.com</h1>
                        <h1 className='font-[400] text-[16px] text-[#fafafa]'>+88015-88888-9999</h1>
                    </div>

                    <div className="flex flex-col justify-center items-start gap-4">
                        <h1 className='font-[500] text-[20px] text-[#fafafa]'>Account</h1>
                        <h1 className='font-[400] text-[16px] text-[#fafafa]'>My Account</h1>
                        <h1 className='font-[400] text-[16px] text-[#fafafa]'>Login / Register</h1>
                        <h1 className='font-[400] text-[16px] text-[#fafafa]'>Cart</h1>
                        <h1 className='font-[400] text-[16px] text-[#fafafa]'>Wishlist</h1>
                        <h1 className='font-[400] text-[16px] text-[#fafafa]'>Shop</h1>
                    </div>

                    <div className="flex flex-col justify-center items-start gap-4">
                        <h1 className='font-[500] text-[20px] text-[#fafafa]'>Quick Link</h1>
                        <h1 className='font-[400] text-[16px] text-[#fafafa]'>Privacy Policy</h1>
                        <h1 className='font-[400] text-[16px] text-[#fafafa]'>Terms Of Use</h1>
                        <h1 className='font-[400] text-[16px] text-[#fafafa]'>FAQ</h1>
                        <h1 className='font-[400] text-[16px] text-[#fafafa]'>Contact</h1>
                    </div>

                    <div className="flex flex-col justify-center items-start gap-4">
                        <h1 className='font-[500] text-[20px] text-[#fafafa]'>Download App</h1>
                        <h1 className='font-[400] text-[12px] text-[#fafafa]'>Save $3 with App New User Only</h1>
                        <div className='flex justify-center items-center gap-2'>
                            <div><Image src="/qrcde.png" alt='' width={80} height={80} className=''></Image></div>
                            <div className="flex flex-col justify-center items-center gap-2">
                                <div><Image src="/playstr.png" alt='' width={110} height={40} className=''></Image></div>
                                <div><Image src="/appstr.png" alt='' width={110} height={40} className=''></Image></div>
                            </div>
                        </div>
                        <div className="flex justify-center items-center gap-[24px] mt-[20px]">
                            <h1><RiFacebookLine className='text-white scale-150 ' /></h1>
                            <h1><CiTwitter className='text-white scale-150 ' /></h1>
                            <h1><FaInstagram className='text-white scale-150 ' /></h1>
                            <h1><FaLinkedinIn className='text-white  scale-150' /></h1>
                        </div>
                    </div>


                </div>

            </div>
            <div className="mx-[20px] md:mx-[50px] customMd:mx-[135px] flex justify-center items-center gap-[5px] pt-[30px] md:pt-0 text-center md:text-left pb-[10px]">
                <h1><FaRegCopyright className='text-[#ffffff]/50 font-[400] text-[16px]' /></h1>
                <h1 className='text-[#ffffff]/50'>Copyright Rimel 2022. All right reserved</h1>
            </div>
        </div>
    )
}

export default Footer
