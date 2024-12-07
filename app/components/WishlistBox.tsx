import React from 'react'
import Image from 'next/image';
import { IoCartOutline } from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";
import Link from 'next/link';

interface Box {
    imageUrl: string,
    imgW: number,
    imgH: number,
    disc?: number | string,
    discCol: string,
    name: string,
    newRate: number,
    preRate: number,
    disVis: string,
    preRateVis: string,
}
const WishlistBox = ({ imageUrl, disc, name, newRate, preRate, imgW, imgH, disVis, preRateVis, discCol }: Box) => {
    return (
        <div>
            <div className="flex flex-col justify-start items-start gap-4">

                <div className="flex flex-col gap-4">
                    <Link href="/items">
                        <div className="relative w-[270px] h-[250px] rounded-[4px] overflow-hidden bg-[#F5F5F5] flex justify-center items-center">

                            <Image src={imageUrl} alt='Product' width={imgW} height={imgH} className=" flex justify-center items-center object-cover hover:scale-105 duration-300 ease-in-out"></Image>

                            <div className="w-full h-[41px] bg-black text-white rounded-bl-[4px] rounded-br-[4px] absolute top-[209px] cursor-pointer">
                                <div className="flex flex-row-reverse justify-center items-center gap-2 pt-2">
                                    <h1 className='capitalize text-white font-[400] text-[12px] leading-[18px]'>Add to cart</h1>
                                    <h1><IoCartOutline className='size-[24px] text-white' /></h1>
                                </div>
                            </div>
                            <div style={{ backgroundColor: discCol }} className={`absolute top-[12px] left-[12px] text-white text-xs font-[400] text-[12px] leading-[18px] px-[12px] py-[4px] rounded-[4px] ${disVis} `}>-{disc}%</div>

                            <div className="absolute top-[12px] right-[12px] flex flex-col gap-[8px]">
                                <button className="w-[34px] h-[34px] bg-white rounded-full flex items-center justify-center hover:bg-red-500 hover:text-white duration-300 ease-in-out">
                                    <RiDeleteBin6Line className='w-4 h-[18px]' /></button>
                            </div>

                        </div>
                    </Link>
                    <div className="flex flex-col justify-start items-start gap-2">
                        <h1 className='font-[500] text-[16px] leading-6 text-black'>{name}</h1>
                        <div className="flex justify-between items-center gap-3 w-[85px]">
                            <h1 className='font-[500] text-[16px] leading-6 text-[#DB4444]'>${newRate}</h1>
                            <h1 className={`font-[500] text-[16px] leading-6 text-black/50 line-through ${preRateVis}`}>${preRate}</h1>
                        </div>
                    </div>

                </div>


            </div>
        </div>
    )
}

export default WishlistBox
