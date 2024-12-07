import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";
import Image from 'next/image';
import Box from "./Box";
import Button from "./Button"
import { ImMobile } from "react-icons/im";
import { RiComputerLine } from "react-icons/ri";
import { CiHeadphones } from "react-icons/ci";
import { CiCamera } from "react-icons/ci";
import { BsSmartwatch } from "react-icons/bs";
import { BsController } from "react-icons/bs";



const PageA = () => {
    return (
        <div className="flex flex-col gap-[60px]">

            <div className="space-y-5 lg:space-y-10">
                <div className="flex justify-between items-center">

                    <div className="flex justify-between items-end gap-[87px] w-[600px]">
                        <div className='flex flex-col justify-center items-start gap-[24px]'>
                            <div className="flex justify-start items-center gap-4">
                                <div className="bg-[#DB4444] h-10 w-5 rounded-[4px]"></div>
                                <h1 className='text-[#db4444] font-[600] text-[16px] leading-[20px]'>Today’s</h1>
                            </div>
                            <div className="">
                                <h1 className='capitalize text-black text-[36px] font-[600] leading-[48px] tracking-[4%]'>flash sales</h1>
                            </div>
                        </div>
                        <div className="lg:flex justify-center items-center gap-[17px] hidden">
                            <div className="flex justify-center items-end gap-[17px]">
                                <div className="flex flex-col justify-start items-center gap-1 w-[46px] h-[50px]">
                                    <h1 className='font-[500] text-[12px] leading-[18px]'>Days</h1>
                                    <h1 className="font-[700] text-[32px] leading-[30px] tracking-[4%]">03</h1>
                                </div>
                                <div className="flex justify-center items-end">
                                    <h1 className="text-[#DB4444] text-[32px]">:</h1>
                                </div>
                            </div>
                            <div className="flex justify-center items-end gap-[17px]">
                                <div className="flex flex-col justify-start items-center gap-1 w-[46px] h-[50px]">
                                    <h1 className='font-[500] text-[12px] leading-[18px]'>Hours</h1>
                                    <h1 className="font-[700] text-[32px] leading-[30px] tracking-[4%]">23</h1>
                                </div>
                                <div className="flex justify-center items-end">
                                    <h1 className="text-[#DB4444] text-[32px]">:</h1>
                                </div>
                            </div>
                            <div className="flex justify-center items-end gap-[17px]">
                                <div className="flex flex-col justify-start items-center gap-1 w-[46px] h-[50px]">
                                    <h1 className='font-[500] text-[12px] leading-[18px]'>Minutes</h1>
                                    <h1 className="font-[700] text-[32px] leading-[30px] tracking-[4%]">19</h1>
                                </div>
                                <div className="flex justify-center items-end">
                                    <h1 className="text-[#DB4444] text-[32px]">:</h1>
                                </div>
                            </div>
                            <div className="">
                                <div className="flex flex-col justify-start items-center gap-1 w-[46px] h-[50px]">
                                    <h1 className='font-[500] text-[12px] leading-[18px]'>Seconds</h1>
                                    <h1 className="font-[700] text-[32px] leading-[30px] tracking-[4%]">56</h1>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="hidden customLg:flex justify-center items-center gap-2 flex-row-reverse">
                        <div className="bg-[#F5F5F5] w-[46px] h-[46px] rounded-full flex justify-center items-center"><FaArrowRight className='w-[16px] h-[14px]' /></div>
                        <div className="bg-[#F5F5F5] w-[46px] h-[46px] rounded-full flex justify-center items-center"><FaArrowLeft className='w-[16px] h-[14px]' /></div>

                    </div>

                </div>

                <div className="grid grid-cols-1 grid-rows-4 md:grid-cols-2 md:grid-rows-2 customLg:grid-cols-4 customLg:grid-rows-1 justify-items-center  gap-[30px] mb-[60px]">

                    <Box addCart='hidden' imageUrl='/controller.png' imgW={172} imgH={152} disc={40} disVis='flex' name='HAVIT HV-G92 Gamepad' newRate={120} preRate={160} preRateVis='block' rating={88} discCol='#DB4444' />

                    <Box addCart='block' imageUrl='/keyboard.png' imgW={191} imgH={101} disc={35} disVis='flex' name='AK-900 Wired Keyboard' newRate={960} preRate={1160} preRateVis='block' rating={75} discCol='#db4444' />

                    <Box addCart='hidden' imageUrl='/led.png' imgW={170} imgH={129} disc={30} disVis='flex' name='IPS LCD Gaming Monitor' newRate={370} preRate={400} preRateVis='block' rating={99} discCol='#DB4444' />

                    <Box addCart='hidden' imageUrl='/chair.png' imgW={107} imgH={180} disc={25} disVis='flex' name='S-Series Comfort Chair ' newRate={375} preRate={400} preRateVis='block' rating={99} discCol='#DB4444' />

                </div>
            </div>

            <div className="flex justify-center items-center">
                <Button text='View All Products' color='#DB4444' />
            </div>

            <hr className='' />
            <div className="space-y-5">
                <div className='flex flex-col justify-center items-start gap-[24px]'>
                    <div className="flex justify-start items-center gap-4">
                        <div className="bg-[#DB4444] h-10 w-5 rounded-[4px]"></div>
                        <h1 className='text-[#db4444] font-[600] text-[16px] leading-[20px]'>Categories</h1>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center gap-[30px] md:gap-0">
                    <div className="">
                        <h1 className='capitalize text-black text-[36px] font-[600] leading-[48px] tracking-[4%]'>Browse By Category</h1>
                    </div>
                    <div className="hidden customLg:flex justify-center items-center gap-2 flex-row-reverse">
                        <div className="bg-[#F5F5F5] w-[46px] h-[46px] rounded-full flex justify-center items-center"><FaArrowRight className='w-[16px] h-[14px]' /></div>
                        <div className="bg-[#F5F5F5] w-[46px] h-[46px] rounded-full flex justify-center items-center"><FaArrowLeft className='w-[16px] h-[14px]' /></div>

                    </div>
                </div>
            </div>

            <div className="flex flex-col justify-center items-center gap-[60px]">

                <div className="grid grid-cols-1 grid-rows-6 md:grid-cols-3 md:grid-rows-2 customLg:grid-cols-6 customLg:grid-rows-1 justify-center  items-center gap-[30px]">
                    <div className="w-[170px] h-[145px] rounded-[4px] border border-black/30 flex flex-col justify-center items-center gap-[20px] hover:bg-[#db4444] hover:text-white duration-300 ease-in-out">
                        <h1><ImMobile className='w-[56px] h-[56px]' /></h1>
                        <h1 className=" font-[400] text-[16px] leading-6">Phones</h1>
                    </div>
                    <div className="w-[170px] h-[145px] rounded-[4px] border border-black/30 flex flex-col justify-center items-center gap-[20px] hover:bg-[#db4444] hover:text-white duration-300 ease-in-out">
                        <h1><RiComputerLine className='w-[56px] h-[56px]' /></h1>
                        <h1 className="font-[400] text-[16px] leading-6 capitalize">computers</h1>
                    </div>
                    <div className="w-[170px] h-[145px] rounded-[4px] border border-black/30 flex flex-col justify-center items-center gap-[20px] hover:bg-[#db4444] hover:text-white duration-300 ease-in-out">
                        <h1><BsSmartwatch className='w-[56px] h-[56px]' /></h1>
                        <h1 className=" font-[400] text-[16px] leading-6 capitalize">smart watch</h1>
                    </div>
                    <div className="w-[170px] h-[145px] rounded-[4px] border border-black/30 flex flex-col justify-center items-center gap-[20px] hover:bg-[#db4444] hover:text-white duration-300 ease-in-out">
                        <h1><CiCamera className='size-[56px]' /></h1>
                        <h1 className="font-[400] text-[16px] leading-6 capitalize">camera</h1>
                    </div>
                    <div className="w-[170px] h-[145px] rounded-[4px] border border-black/30 flex flex-col justify-center items-center gap-[20px] hover:bg-[#db4444] hover:text-white duration-300 ease-in-out">
                        <h1><CiHeadphones className='size-[56px]' /></h1>
                        <h1 className=" font-[400] text-[16px] leading-6 capitalize">headPhones</h1>
                    </div>
                    <div className="w-[170px] h-[145px] rounded-[4px] border border-black/30 flex flex-col justify-center items-center gap-[20px] hover:bg-[#db4444] hover:text-white duration-300 ease-in-out">
                        <h1><BsController className='size-[56px]' /></h1>
                        <h1 className="font-[400] text-[16px] leading-6 capitalize">Gaming</h1>
                    </div>
                </div>
            </div>

            <hr className='' />

            <div className="flex flex-col gap-[60px]">
                <div className="space-y-5">
                    <div className='flex flex-col justify-center items-start gap-[24px]'>
                        <div className="flex justify-start items-center gap-4">
                            <div className="bg-[#DB4444] h-10 w-5 rounded-[4px]"></div>
                            <h1 className='text-[#db4444] font-[600] text-[16px] leading-[20px]'>This Month</h1>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row justify-between items-center gap-[30px] md:gap-0">
                        <div className="">
                            <h1 className='capitalize text-black text-[36px] font-[600] leading-[48px] tracking-[4%]'>Best Selling Products</h1>
                        </div>
                        <div className="flex justify-center items-center">
                            <Button text='View All' color='#DB4444'></Button>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 grid-rows-4 md:grid-cols-2 md:grid-rows-2 customLg:grid-cols-4 customLg:grid-rows-1 justify-items-center gap-[30px] mb-[60px]">
                    <Box addCart='hidden' imageUrl='/sweater.png' disVis='hidden' name='The north coat' newRate={260} preRate={360} preRateVis='block' imgW={140} imgH={146} rating={65} />
                    <Box addCart='hidden' imageUrl='/bag.png' disVis='hidden' name='Gucci duffle bag' newRate={960} preRate={1160} preRateVis='block' imgW={178} imgH={129} rating={65} />
                    <Box addCart='hidden' imageUrl='/cooler.png' disVis='hidden' name='RGB liquid CPU Cooler' newRate={160} preRate={170} preRateVis='block' imgW={191} imgH={95} rating={65} />
                    <Box addCart='hidden' imageUrl='/shelf.png' disVis='hidden' name='Small BookSelf' newRate={360} preRate={450} preRateVis='hidden' imgW={140} imgH={176} rating={65} />


                </div>
            </div>

            <div className="bg-[url('/bg.png')] w-[1170px] h-[500px] customLg:flex justify-between items-center hidden mx-auto rounded-[4px]">
                <div className=" ml-[56px] w-[443px] h-[420px] bg-black flex flex-col gap-8 justify-center">
                    <h1 className='text-[#00FF66] font-[600] text-[16px] leading-5'>Categories</h1>
                    <h1 className='text-[#FAFAFA] font-[600] text-[48px] leading-[60px] tracking-[4%]'>Enhance Your <br /> Music Experience</h1>
                    <div className="flex justify-start items-center gap-6">
                        <div className="bg-white size-[64px] rounded-full flex flex-col justify-center items-center -space-y-1">
                            <h1 className='font-[600] text-black text-[16px]'>23</h1>
                            <h1 className='font-[400] text-[11px] leading-[18px] text-black'>Hours</h1>
                        </div>
                        <div className="bg-white size-[64px] rounded-full flex flex-col justify-center items-center -space-y-1">
                            <h1 className='font-[600] text-black text-[16px]'>05</h1>
                            <h1 className='font-[400] text-[11px] leading-[18px] text-black'>Days</h1>
                        </div>
                        <div className="bg-white size-[64px] rounded-full flex flex-col justify-center items-center -space-y-1">
                            <h1 className='font-[600] text-black text-[16px]'>59</h1>
                            <h1 className='font-[400] text-[11px] leading-[18px] text-black'>Minutes</h1>
                        </div>
                        <div className="bg-white size-[64px] rounded-full flex flex-col justify-center items-center -space-y-1">
                            <h1 className='font-[600] text-black text-[16px]'>35</h1>
                            <h1 className='font-[400] text-[11px] leading-[18px] text-black'>Seconds</h1>
                        </div>
                    </div>
                    <Button text='Buy Now!' color='#00ff66' />
                </div>
                <div className="bg-transparent mr-[44px] w-[600px] h-[420px]"></div>
            </div>

            <div className="mb-[60px] flex flex-col gap-[60px]">
                <div className="space-y-5">
                    <div className='flex flex-col justify-center items-start gap-[24px]'>
                        <div className="flex justify-start items-center gap-4">
                            <div className="bg-[#DB4444] h-10 w-5 rounded-[4px]"></div>
                            <h1 className='text-[#db4444] font-[600] text-[16px] leading-[20px]'>Our Products</h1>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row justify-between items-center gap-[30px] md:gap-0">
                        <div className="">
                            <h1 className='capitalize text-black text-[36px] font-[600] leading-[48px] tracking-[4%]'>Explore Our Products</h1>
                        </div>
                        <div className="hidden customLg:flex justify-center items-center gap-2 flex-row-reverse">
                            <div className="bg-[#F5F5F5] w-[46px] h-[46px] rounded-full flex justify-center items-center"><FaArrowRight className='w-[16px] h-[14px]' /></div>
                            <div className="bg-[#F5F5F5] w-[46px] h-[46px] rounded-full flex justify-center items-center"><FaArrowLeft className='w-[16px] h-[14px]' /></div>

                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 grid-rows-8 md:grid-cols-2 md:grid-rows-4  customLg:grid-cols-4 customLg:grid-rows-2 justify-items-center gap-[60px] mb-[60px]">

                    <Box addCart='hidden' imageUrl='/dogfood.png' imgW={115} imgH={180} disc={40} disVis='hidden' name='Breed Dry Dog Food' newRate={100} preRate={1} preRateVis='hidden' rating={35} discCol='' />

                    <Box addCart='block' imageUrl='/digitalcam.png' imgW={146} imgH={163} disc={40} disVis='hidden' name='CANON EOS DSLR Camera' newRate={360} preRate={1} preRateVis='hidden' rating={95} />

                    <Box addCart='hidden' imageUrl='/laptop.png' imgW={172} imgH={180} disc={40} disVis='hidden' name='ASUS FHD Gaming Laptop' newRate={700} preRate={1} preRateVis='hidden' rating={325} />

                    <Box addCart='hidden' imageUrl='/facewash.png' imgW={172} imgH={159} disc={40} disVis='hidden' name='Curology Product Set ' newRate={500} preRate={1} preRateVis='hidden' rating={145} />

                    <Box addCart='hidden' imageUrl='/car.png' imgW={180} imgH={133} disc="NEW" disVis='block' name='Kids Electric Car' newRate={960} preRate={1} preRateVis='hidden' rating={65} discCol='#00FF66' />

                    <Box addCart='hidden' imageUrl='/sneakers.png' imgW={186} imgH={164} disc="NEW" disVis='hidden' name='Jr. Zoom Soccer Cleats' newRate={1160} preRate={1} preRateVis='hidden' rating={35} discCol='#00FF66' />

                    <Box addCart='hidden' imageUrl='/gamepad.png' imgW={178} imgH={150} disc="NEW" disVis='block' name='GP11 Shooter USB Gamepad' newRate={660} preRate={1} preRateVis='hidden' rating={55} discCol='#00FF66' />

                    <Box addCart='hidden' imageUrl='/jacket.png' imgW={182} imgH={176} disc="NEW" disVis='hidden' name='Quilted Satin Jacket' newRate={660} preRate={1} preRateVis='hidden' rating={55} discCol='#00FF66' />
                </div>

                <div className="flex justify-center items-center">
                    <Button text='View All Products' color='#DB4444' />
                </div>
            </div>

            <div className="hidden large:block w-[1170px] mx-auto">
                <div className="flex justify-between items-end gap-[87px] w-[600px] mb-[60px]">
                    <div className='flex flex-col justify-center items-start gap-[20px]'>
                        <div className="flex justify-start items-center gap-4">
                            <div className="bg-[#DB4444] h-10 w-5 rounded-[4px]"></div>
                            <h1 className='text-[#db4444] font-[600] text-[16px] leading-[20px]'>Featured</h1>
                        </div>
                        <div className="flex justify-between items-center w-[1170px]">
                            <h1 className='capitalize text-black text-[36px] font-[600] leading-[48px] tracking-[4%]'>New Arrival</h1>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-4 grid-rows-2 gap-[30px] mb-[60px]">

                    <div className="w-[570px] h-[600px] col-span-2 row-span-2 bg-black flex justify-center items-end rounded-[4px] relative">
                        <Image src="/playstation.png" alt='_playStation' width={511} height={511}></Image>
                        <div className="flex flex-col gap-4  absolute top-[446px] left-[32px] w-[242px]">
                            <h1 className='capitalize font-[600] text-[24px] leading-6 tracking-[3%] text-white'>Play station 5</h1>
                            <h1 className='capitalize font-[400] text-[14px] leading-[21px] tracking-[3%] text-white'>Black and White version of the PS5 coming out on sale.</h1>
                            <h1 className='capitalize font-[500] text-[16px] leading-6 tracking-[3%] text-white underline underline-offset-4'>Shop Now</h1>

                        </div>
                    </div>

                    <div className="w-[570px] h-[284px] col-span-2 row-span-1 bg-black flex flex-row-reverse justify-between items-center gap-4 rounded-[4px] relative">
                        <Image src="/clothes.png" alt='_playStation' width={432} height={286} className=''></Image>
                        <div className="flex flex-col gap-4 absolute top-[138px] left-[24px] w-[255px]">
                            <h1 className='capitalize font-[600] text-[24px] leading-6 tracking-[3%] text-white'>Women’s Collections</h1>
                            <h1 className='capitalize font-[400] text-[14px] leading-[21px] tracking-[3%] text-white'>Featured woman collections that give you another vibe.</h1>
                            <h1 className='capitalize font-[500] text-[16px] leading-6 tracking-[3%] text-white underline underline-offset-4'>Shop Now</h1>

                        </div>
                    </div>

                    <div className="w-[270px] h-[284px]  bg-black flex flex-row-reverse justify-center items-center gap-4 rounded-[4px] relative">
                        <Image src="/speaker.png" alt='_playStation' width={190} height={221} className='shadow-2xl shadow-white/20 flex justify-center items-center'></Image>
                        <div className="flex flex-col gap-2 absolute top-[175px] left-[24px] w-[255px]">
                            <h1 className='capitalize font-[600] text-[24px] leading-6 tracking-[3%] text-white'>Speakers</h1>
                            <h1 className='capitalize font-[400] text-[14px] leading-[21px] tracking-[3%] text-white'>Amazon wireless speakers</h1>
                            <h1 className='capitalize font-[500] text-[16px] leading-6 tracking-[3%] text-white underline underline-offset-4'>Shop Now</h1>

                        </div>
                    </div>

                    <div className="w-[270px] h-[284px]  bg-black flex flex-row-reverse justify-center items-center gap-4 rounded-[4px] relative">
                        <Image src="/perfume.png" alt='_playStation' width={201} height={203} className='shadow-2xl shadow-white/20 flex justify-center items-center'></Image>
                        <div className="flex flex-col gap-2 absolute top-[175px] left-[24px] w-[255px]">
                            <h1 className='capitalize font-[600] text-[24px] leading-6 tracking-[3%] text-white'>Perfume</h1>
                            <h1 className='capitalize font-[400] text-[14px] leading-[21px] tracking-[3%] text-white'>GUCCI INTENSE OUD EDP</h1>
                            <h1 className='capitalize font-[500] text-[16px] leading-6 tracking-[3%] text-white underline underline-offset-4'>Shop Now</h1>

                        </div>
                    </div>

                </div>
            </div>

            <div className="flex flex-col md:flex-row justify-center items-center gap-[88px] mb-[140px]">
                <div className="flex flex-col justify-center items-center gap-6">
                    <Image src="/fastdeli.png" alt='services' width={80} height={80}></Image>
                    <div className="flex flex-col justify-center items-center gap-2">
                        <h1 className='uppercase text-[20px] font-[600] text-black leading-7 text-center'>FREE AND FAST DELIVERY</h1>
                        <h1 className='capitalize text-[14px] font-[400] text-black leading-[21px] text-center'>Free delivery for all orders over $140</h1>

                    </div>
                </div>
                <div className="flex flex-col justify-center items-center gap-6">
                    <Image src="/cusser.png" alt='services' width={80} height={80}></Image>
                    <div className="flex flex-col justify-center items-center gap-2">
                        <h1 className='uppercase text-[20px] font-[600] text-black leading-7 text-center'>24/7 CUSTOMER SERVICE</h1>
                        <h1 className='capitalize text-[14px] font-[400] text-black leading-[21px] text-center'>Friendly 24/7 customer support</h1>

                    </div>
                </div>
                <div className="flex flex-col justify-center items-center gap-6">
                    <Image src="/moneyBack.png" alt='services' width={80} height={80}></Image>
                    <div className="flex flex-col justify-center items-center gap-2">
                        <h1 className='uppercase text-[20px] font-[600] text-black leading-7 text-center'>MONEY BACK GUARANTEE</h1>
                        <h1 className='capitalize text-[14px] font-[400] text-black leading-[21px] text-center'> We reurn money within 30 days</h1>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default PageA
