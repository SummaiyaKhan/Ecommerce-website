import { BsChevronRight } from "react-icons/bs";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoLogoApple } from "react-icons/io";
import Image from 'next/image';
import img from "../pics folder/img.jpg"

export default function Secand() {
    return(

    <div>
        <ul className="ml-32 mt-8 text-sm relative">
            <li className="mt-3 flex items-center ">Woman of Fashion<BsChevronRight className="ml-10 text-black"/></li>
            <li className="mt-3 flex items-center">Men of Fashion<BsChevronRight className="ml-[60px] text-black"/></li>
            <li className="mt-3">Electranics</li>
            <li className="mt-3">Home & Lifestyle</li>
            <li className="mt-3">Medicine</li>
            <li className="mt-3">Sports & Toys</li>
            <li className="mt-3">Groceries & Pets</li>
            <li className="mt-3">Health & Beauty</li>
        </ul>
       
        <div className="bg-gray-300 h-[273px] w-[1px] -mt-[276px] ml-[308px] absolute col-span-1"></div>
        
        <div>
        <div className="bg-black text-white w-[850px] h-[300px] absolute -mt-52 ml-[370px]">
  <div className="flex items-center mt-10 ml-16">
    <IoLogoApple size={50} className="text-white text-sm font-light" />
    <p>iphone 14 Series</p>
  </div>
  <div>
    <h1 className="text-5xl flex-col text-white mt-4 ml-20 w-64 h-20 leading-none ">UP to 10% off Voucher</h1>
    <p className="flex mt-10 ml-20 font-extralight text-base items-center">
      Shop Now <FaArrowRightLong size={15} className="ml-2" />
    </p>
    <div className="pb-8">
    <div className="h-[1px] w-20 ml-20 bg-white"></div>
    </div>
  <div className="flex items-center justify-center">
    <div className="w-[10px] h-[10px] rounded-full bg-gray-200 hover:bg-orange-500 ml-3"></div>
    <div className="w-[10px] h-[10px] rounded-full bg-gray-200 hover:bg-orange-500 ml-3"></div>
    <div className="w-[10px] h-[10px] rounded-full bg-gray-200 hover:bg-orange-500 ml-3"></div>
    <div className="w-[10px] h-[10px] rounded-full bg-gray-200 hover:bg-orange-500 ml-3"></div>
  </div>
  <div className="absolute -mt-72 ml-[450px]">
  <Image 
        src={img}
        alt="img"
        width={400}
        height={300} 
        
      />
  </div>
  </div>
</div>
</div>
 </div>
    )
}