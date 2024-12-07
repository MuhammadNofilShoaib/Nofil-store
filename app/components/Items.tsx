import Image from 'next/image'
import React from 'react'
import { FaStar } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { TbTruckDelivery } from "react-icons/tb";
import { HiOutlineArrowPathRoundedSquare } from "react-icons/hi2";
import Box from './Box';

const Items = () => {
    return (
        <div className='max-w-[1440px] mx-[20px] md:mx-[50px] customMd:mx-[135px] 2xl:mx-auto overflow-hidden mt-[80px] mb-[140px]'>

            <div className="space-y-[140px]">
                <div className="">
                    <div className="flex flex-wrap justify-start items-center gap-3 mb-20">
                        <h1 className="font-[400] text-[14px] leading-[21px] text-black/50">Home</h1>
                        <h1 className="font-[400] text-[14px] leading-[21px] text-black/50">/</h1>
                        <h1 className="font-[400] text-[14px] leading-[21px] text-black/50">Gaming</h1>
                        <h1 className="font-[400] text-[14px] leading-[21px] text-black/50">/</h1>
                        <h1 className="font-[400] text-[14px] leading-[21px] text-black">Havic HV G-92 Gamepad</h1>
                    </div>

                    <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start gap-[30px]">

                        <div className="grid grid-cols-1 grid-rows-2 md:grid-cols-2 lg:grid-cols-1 lg:grid-rows-4 gap-4">


                            <div className="w-[170px] h-[138px] bg-[#F5F5F5] rounded-[4px] flex justify-center items-center">
                                <Image src="/ps51.png" alt='_item' width={121} height={114} className='object-cover'></Image>
                            </div>
                            <div className="w-[170px] h-[138px] bg-[#F5F5F5] rounded-[4px] flex justify-center items-center">
                                <Image src="/ps52.png" alt='_item' width={112} height={97} className='object-cover'></Image>
                            </div>
                            <div className="w-[170px] h-[138px] bg-[#F5F5F5] rounded-[4px] flex justify-center items-center">
                                <Image src="/ps53.png" alt='_item' width={134} height={94} className='object-cover'></Image>
                            </div>
                            <div className="w-[170px] h-[138px] bg-[#F5F5F5] rounded-[4px] flex justify-center items-center">
                                <Image src="/ps54.png" alt='_item' width={112} height={106} className='object-cover'></Image>
                            </div>

                        </div>

                        <div className="bg-[#f5f5f5] w-[500px] h-[600px] rounded-[4px] customLg:flex justify-center items-center hidden">
                            <Image src="/ps5main.png" alt='_item' width={446} height={315} className='object-cover'></Image>
                        </div>

                        <div className="bg-[#fafafa] w-[500px] h-full md:h-[600px] rounded-[4px] flex flex-col justify-between items-center md:items-start space-y-4 text-start px-[30px]">

                            <h1 className='font-[600] text-2xl leading-6 tracking-[3%]'>Havic HV G-92 Gamepad</h1>

                            <div className="flex justify-center items-center gap-2">
                                <div className="flex justify-center items-center gap-[2px]">
                                    <h1 className='text-[#FFAD33]'><FaStar className='size-5' /></h1>
                                    <h1 className='text-[#FFAD33]'><FaStar className='size-5' /></h1>
                                    <h1 className='text-[#FFAD33]'><FaStar className='size-5' /></h1>
                                    <h1 className='text-[#FFAD33]'><FaStar className='size-5' /></h1>
                                    <h1 className='text-[#000000]/25'><FaStar className='size-5' /></h1>
                                </div>
                                <h1 className='font-[400] text-[14px] text-black/50'>(150 Reviews)</h1>
                                <h1 className='font-[400] text-[14px] text-black/50'>|</h1>
                                <h1 className='font-[400] text-[14px] text-[#00FF66]'>In Stock</h1>
                            </div>

                            <h1 className='font-[400] text-[24px] text-black'>$192.00</h1>

                            <h1 className='font-[400] text-[14px] text-black leading-[21px] w-[270px] md:w-[373px] text-center customLg:text-start'>PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.</h1>

                            <hr className='w-[400px]' />

                            <div className="flex justify-center items-center gap-6">
                                <h1 className='font-[400] text-[20px] text-black'>Colours:</h1>
                                <div className="flex justify-center items-center gap-2">
                                    <div className="size-5 bg-[#A0BCE0] rounded-full hover:border hover:border-black"></div>
                                    <div className="size-5 bg-[#E07575] rounded-full hover:border hover:border-black"></div>
                                </div>

                            </div>

                            <div className="flex flex-col md:flex-row justify-center items-center md:gap-6 gap-2">
                                <h1 className='font-[400] text-[20px] text-black'>Size:</h1>
                                <div className="flex justify-center items-center gap-4">
                                    <div className="size-8 bg-transparent border-[1px] border-black/50 rounded-[4px] flex justify-center items-center font-[500] text-[14px] uppercase hover:bg-[#DB4444] hover:text-white duration-300 ease-in-out">xs</div>
                                    <div className="size-8 bg-transparent border-[1px] border-black/50 rounded-[4px] flex justify-center items-center font-[500] text-[14px] uppercase hover:bg-[#DB4444] hover:text-white duration-300 ease-in-out">s</div>
                                    <div className="size-8 bg-transparent border-[1px] border-black/50 rounded-[4px] flex justify-center items-center font-[500] text-[14px] uppercase hover:bg-[#DB4444] hover:text-white duration-300 ease-in-out">m</div>
                                    <div className="size-8 bg-transparent border-[1px] border-black/50 rounded-[4px] flex justify-center items-center font-[500] text-[14px] uppercase hover:bg-[#DB4444] hover:text-white duration-300 ease-in-out">l</div>
                                    <div className="size-8 bg-transparent border-[1px] border-black/50 rounded-[4px] flex justify-center items-center font-[500] text-[14px] uppercase hover:bg-[#DB4444] hover:text-white duration-300 ease-in-out">xl</div>
                                </div>
                            </div>

                            <div className="flex flex-col md:flex-row justify-center gap-2 md:gap-0 md:justify-between w-[399px] ">

                                <div className="flex justify-center items-center">
                                    <div className="w-10 h-11 rounded-tl-[4px] rounded-bl-[4px] text-2xl flex justify-center items-center border-[1px] border-black/50  hover:bg-[#DB4444] hover:text-white duration-300 ease-in-out">-</div>
                                    <div className="w-20 h-11 font-[500] text-[20px] flex justify-center items-center text-black border-t-[1px] border-b-[1px]  border-black/50">2</div>
                                    <div className="w-10 h-11 rounded-tr-[4px] rounded-br-[4px] text-2xl flex justify-center items-center border-[1px] border-black/50  hover:bg-[#DB4444] hover:text-white duration-300 ease-in-out">+</div>
                                </div>

                                <div className="flex justify-center items-center">
                                    <button className='bg-[#DB4444] px-[48px] py-[10px] rounded-[4px] w-[165px] h-[44px] text-[#fafafa] font-[500] text-[16px]'>Buy Now</button>
                                </div>

                                <div className="flex justify-center items-center">
                                    <div className="size-10 bg-transparent border-[1px] border-black/50 rounded-[4px] flex justify-center items-center font-[500] text-[14px] uppercase hover:bg-[#DB4444] hover:text-white duration-300 ease-in-out"><CiHeart className='w-5 h-[18px] scale-150' />
                                    </div>
                                </div>
                            </div>

                            <div className="w-[250px] md:w-[399px] md:h-[180px] rounded-[4px] border-[1px] border-black/50 p-6">
                                <div className="flex flex-col justify-center items-start">
                                    <div className="flex justify-center items-center gap-4">
                                        <h1 className='size-10 flex justify-center items-center'><TbTruckDelivery className='w-[31px] h-[20px] scale-[2]' /></h1>
                                        <div className="flex flex-col justify-center items-start">
                                            <h1 className='font-[500] text-[16px] leading-[24px]'>Free Delivery</h1>
                                            <h1 className='font-[500] text-[12px] leading-[24px] underline underline-offset-1'>Enter your postal code for Delivery Availability</h1>
                                        </div>
                                    </div>
                                    <div className="w-[248px] md:w-[398px] h-[1px] bg-black/50 my-4 -ml-6"></div>

                                    <div className="flex justify-center items-center gap-4">
                                        <h1 className='size-10 flex justify-center items-center'><HiOutlineArrowPathRoundedSquare className='size-10' /></h1>
                                        <div className="flex flex-col justify-center items-start">
                                            <h1 className='font-[500] text-[16px] leading-[24px]'>Return Delivery</h1>
                                            <h1 className='font-[500] text-[12px] leading-[24px]'>Free 30 Days Delivery Returns. <span className='underline'>Details</span></h1>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>



                    </div>

                </div>

                <div className="space-y-5 lg:space-y-[60px]">
                    <div className="flex justify-between items-center">

                        <div className="flex justify-between items-end gap-[87px] w-[600px]">
                            <div className='flex flex-col justify-center items-start gap-[24px]'>
                                <div className="flex justify-start items-center gap-4">
                                    <div className="bg-[#DB4444] h-10 w-5 rounded-[4px]"></div>
                                    <h1 className='text-[#db4444] font-[600] text-[16px] leading-[20px]'>Related Item</h1>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 grid-rows-4 md:grid-cols-2 md:grid-rows-2 customLg:grid-cols-4 customLg:grid-rows-1 justify-items-center  gap-[30px] mb-[60px]">

                        <Box addCart='hidden' imageUrl='/controller.png' imgW={172} imgH={152} disc={40} disVis='flex' name='HAVIT HV-G92 Gamepad' newRate={120} preRate={160} preRateVis='block' rating={88} discCol='#DB4444' />

                        <Box addCart='block' imageUrl='/keyboard.png' imgW={191} imgH={101} disc={35} disVis='flex' name='AK-900 Wired Keyboard' newRate={960} preRate={1160} preRateVis='block' rating={75} discCol='#db4444' />

                        <Box addCart='hidden' imageUrl='/led.png' imgW={170} imgH={129} disc={30} disVis='flex' name='IPS LCD Gaming Monitor' newRate={370} preRate={400} preRateVis='block' rating={99} discCol='#DB4444' />

                        <Box addCart='hidden' imageUrl='/cooler.png' imgW={191} imgH={95} disc={25} disVis='hidden' name='RGB liquid CPU Cooler' newRate={160} preRate={170} preRateVis='block' rating={65} discCol='#DB4444' />

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Items
