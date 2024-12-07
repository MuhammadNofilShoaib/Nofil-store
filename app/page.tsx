import Image from "next/image";
import Link from "next/link";
import { SlArrowRight } from "react-icons/sl";
import { FaApple } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import PageA from "./components/PageA";


export default function Home() {
  return (
    <div className="max-w-[1440px] mx-[20px] md:mx-[50px] customMd:mx-[135px] 2xl:mx-auto overflow-hidden">
      <div className="mt-[40px] mb-[140px] flex flex-col-reverse lg:flex-row justify-between items-center gap-[30px] lg:gap-0">
        <div className="flex flex-col justify-start items-start   gap-4 w-full lg:w-[217px] ">
          <div className="flex justify-between items-center gap-[]">
            <Link href="/" className="font-[400] text-[16px] leading-[24px]">Woman’s Fashion</Link>
            <h1><SlArrowRight className="text-black font-[700] scale-75" /></h1>
          </div>
          <div className="flex justify-between items-center gap-[]">
            <Link href="/" className="font-[400] text-[16px] leading-[24px]">Men’s Fashion</Link>
            <h1><SlArrowRight className="text-black font-[700] scale-75" /></h1>
          </div>
          <Link href="/" className="font-[400] text-[16px] leading-[24px]">Electronics</Link>
          <Link href="/" className="font-[400] text-[16px] leading-[24px]">Home & Lifestyle</Link>
          <Link href="/" className="font-[400] text-[16px] leading-[24px]">Medicine</Link>
          <Link href="/" className="font-[400] text-[16px] leading-[24px]">Sports & Outdoor</Link>
          <Link href="/" className="font-[400] text-[16px] leading-[24px]">Baby’s & Toys</Link>
          <Link href="/" className="font-[400] text-[16px] leading-[24px]">Groceries & Pets</Link>
          <Link href="/" className="font-[400] text-[16px] leading-[24px]">Health & Beauty</Link>
        </div>

        <div className="bg-black/20 hidden line:block w-[1px] h-[384px] absolute top-[142px] left-[368px]"></div>

        <div className="bg-black w-full lg:w-[892px] h-[600px] lg:h-[344px] relative overflow-hidden">
          <div className="flex flex-col lg:flex-row justify-between items-center mt-[16px]">
            <div className="mx-[10px] lg:ml-[64px] flex flex-col gap-[10px] lg:gap-[20px]">
              <div className="flex justify-start items-center gap-[24px]">
                <h1><FaApple className="text-white w-10 h-[49px]" /></h1>
                <h1 className="text-[#FAFAFA] font-[400] text-[16px] leading-[24px]">iPhone 14 Series</h1>
              </div>
              <div className="">
                <h1 className="fonr-[600] text-[48px] leading-[60px] tracking-[4%] text-[#FAFAFA]">Up to 10% <br /> off Voucher</h1>
              </div>
              <div className="flex justify-start items-center gap-[8px]">
                <h1 className="text-[#FAFAFA] font-[500] text-[16px] leading-[24px] underline underline-offset-8">Shop Now</h1>
                <h1><FaArrowRight className="w-[16.5px] h-[14px] text-[#fafafa]" /></h1>
              </div>
            </div>

            <div className="">
              <Image src="/iphone.png" alt="_iPhone" width={496} height={352} className="w-[400px] h-[300px]"></Image>
            </div>
          </div>
          <div className="flex justify-center items-center gap-[12px] -mt-[24px] top-[70px] relative lg:static">
            <div className="w-[12px] h-[12px] rounded-full bg-white/50 hover:bg-[#DB4444] hover:ring-2 ring-white duration-300 ease-in-out"></div>
            <div className="w-[12px] h-[12px] rounded-full bg-white/50 hover:bg-[#DB4444] hover:ring-2 ring-white duration-300 ease-in-out"></div>
            <div className="w-[12px] h-[12px] rounded-full bg-[#DB4444] ring-2 hover:bg-[#DB4444] hover:ring-2 ring-white duration-300 ease-in-out "></div>
            <div className="w-[12px] h-[12px] rounded-full bg-white/50 hover:bg-[#DB4444] hover:ring-2 ring-white duration-300 ease-in-out"></div>
            <div className="w-[12px] h-[12px] rounded-full bg-white/50 hover:bg-[#DB4444] hover:ring-2 ring-white duration-300 ease-in-out"></div>
          </div>

        </div>

      </div>
      <PageA />
    </div>

  );
}
