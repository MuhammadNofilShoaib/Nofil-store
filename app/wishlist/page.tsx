import React from 'react'
import WishlistBox from '../components/WishlistBox'
import Box from '../components/Box'

const page = () => {
    return (
        <div className='max-w-[1440px] mx-[20px] md:mx-[50px] customMd:mx-[135px] 2xl:mx-auto overflow-hidden my-[80px]'>
            <div className="space-y-[80px]">

                <div className="flex flex-col justify-center items-center gap-[60px]">

                    <div className="flex flex-col md:flex-row gap-[20px] md:gap-0 justify-between items-center w-full">
                        <h1 className='capitalize font-[400] text-[20px] leading-[26px] text-center'>wishlist (4)</h1>
                        <button className='font-[500] text-[16px] w-[223px] h-[56px] rounded-[4px] border-[1px] border-black/50 py-[16px] px-[48px] hover:bg-black/5 duration-300 ease-in-out'>Move All To Bag</button>
                    </div>

                    <div className="grid grid-cols-1 grid-rows-4 md:grid-cols-2 md:grid-rows-2 customLg:grid-cols-4 customLg:grid-rows-1 justify-items-center gap-[30px]">
                        <WishlistBox imageUrl='/bag.png' imgW={178} imgH={129} name='Gucci duffle bag' discCol='#DB4444' newRate={960} preRate={1160} disVis='block' disc={20} preRateVis='block' />
                        <WishlistBox imageUrl='/cooler.png' imgW={191} imgH={95} name='RGB liquid CPU Cooler' discCol='#DB4444' newRate={1960} preRate={1160} disVis='hidden' disc={20} preRateVis='hidden' />
                        <WishlistBox imageUrl='/controller.png' imgW={178} imgH={150} name='GP11 Shooter USB Gamepad' discCol='#DB4444' newRate={550} preRate={1160} disVis='hidden' disc={20} preRateVis='hidden' />
                        <WishlistBox imageUrl='/jacket.png' imgW={182} imgH={176} name='Quilted Satin Jacket' discCol='#DB4444' newRate={750} preRate={1160} disVis='hidden' disc={20} preRateVis='hidden' />

                    </div>

                </div>

                <div className="flex flex-col justify-center items-center gap-[60px]">
                <div className='flex flex-col md:flex-row gap-[20px] md:gap-0 justify-between items-start md:items-center w-full'> 
                        <div className="flex justify-start items-center gap-4">
                            <div className="bg-[#DB4444] h-10 w-5 rounded-[4px]"></div>
                            <h1 className='text-[#000000] font-[400] text-[20px] leading-[26px]'>Just For You</h1>
                        </div>
                        <div className="">
                        <button className='font-[500] text-[16px] w-[150px] h-[56px] rounded-[4px] border-[1px] border-black/50 py-[16px] px-[48px] hover:bg-black/5 duration-300 ease-in-out'>See All</button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 grid-rows-4 md:grid-cols-2 md:grid-rows-2 customLg:grid-cols-4 customLg:grid-rows-1 justify-items-center gap-[30px]">
                    
                    <Box imageUrl='/laptop.png' disVis='block' discCol='#DB4444' disc={35} name='ASUS FHD Gaming Laptop' newRate={960} preRate={1160} preRateVis='block' imgW={158} imgH={158} rating={166}  addCart='block'/>

                    <Box imageUrl='/led.png' disVis='hidden' name='IPS LCD Gaming Monitor' newRate={1160} preRate={1160} 
                    preRateVis='hidden' imgW={170} imgH={129} rating={65}  addCart='block'/>
                    
                    <Box imageUrl='/controller.png' disVis='block' discCol='#00FF66' disc="NEW" name='RGB liquid CPU Cooler' newRate={560} preRate={170} preRateVis='hidden' imgW={172} imgH={152} rating={65}  addCart='block'/>
                    
                    <Box imageUrl='/keyboard.png' disVis='hidden' name='AK-900 Wired Keyboard' newRate={200} preRate={450} preRateVis='hidden' imgW={191} imgH={101} rating={65} addCart='block' />


                </div>
                </div>

            </div>
        </div>
    )
}

export default page
