import { FaArrowLeft, FaArrowRight, FaStar } from "react-icons/fa6";
import Image from "next/image";
import img1 from "../pics folder/img1.png"
import img2 from "../pics folder/img2.png"
import img3 from "../pics folder/img3.png"
import img4 from "../pics folder/img4.png"
import Link from "next/link";

export default function Section5() {
    return(
        <div>
            <div className="flex-col ml-16">
            <div className="h-7 w-[13px] rounded-sm bg-red-600 mt-[500px] ">
            </div>
            <div className="flex ">
            <p className="ml-5 text-red-600 text-sm -mt-6 ">Or Products</p>
            </div>

            </div>
            <div className="flex">
            <h1 className="text-3xl font-medium  text-black mt-5 ml-16">Explore Our Products</h1>
            <div className="ml-[825px]">
                 <FaArrowLeft size={45} className="bg-gray-200 rounded-full p-3 "/>
            </div>
           <div>
            <FaArrowRight size={45} className="bg-gray-200 rounded-full p-3 ml-1"/>
          </div>

            </div>
            <section className="text-gray-600 body-font -mt-16">
  <div className="container px-5 py-24 mx-auto">

    <div className="flex flex-wrap -m-4 ">
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-100 p-6 rounded-lg">
          <Image
            className="h-40 rounded w-full object-cover object-center mb-6"
            src={img1}
            alt="Image"
          />
          </div>
          <h1 className="text-lg text-black pb-1">
             HAVIT HV-G92 Gamepad
          </h1>
          <div className="flex">
            <p className="text-red-500 text-bold pb-1">$120 </p>
            <p className="text-gray-400 ml-5 text-bold pb-1"> $160</p>
          </div>
          <div className="flex items-center">
          <FaStar className="text-yellow-500"/><FaStar className="text-yellow-500"/><FaStar className="text-yellow-500"/><FaStar className="text-yellow-500"/><FaStar className="text-yellow-500"/><p className="ml-5">(88)</p>
          </div>
        
        </div>
        <div className="xl:w-1/4 md:w-1/2 p-4"> {/* Reduced padding */}
  <div className="bg-gray-100  rounded-lg"> {/* Reduced padding */}
    <Image
      className="h-40 rounded w-full object-cover object-center mb-6" /* Reduced bottom margin */
      src={img2}
      alt="Image"
    />
    <Link href={"/card"}>
    <button className="mt-2  bg-black text-white py-2 rounded w-full hover:bg-gray-800">
      Add to Cart
    </button>
    </Link>
  </div>
  <h1 className="text-lg text-black pb-1">AK-900 Waried Keyboard</h1>
  <div className="flex">
    <p className="text-red-500 font-bold">$960</p>
    <p className="text-gray-400 ml-5 font-bold">$1160</p>
  </div>
  <div className="flex items-center">
    <FaStar className="text-yellow-500" />
    <FaStar className="text-yellow-500" />
    <FaStar className="text-yellow-500" />
    <FaStar className="text-yellow-500" />
    <FaStar className="text-gray-400" />
    <p className="ml-5">(75)</p>
  </div>
        </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-100 p-6 rounded-lg">
          <Image
            className="h-40 rounded w-full object-cover object-center mb-6"
            src={img3}
            alt="Image"
          />
           </div>
         <h1 className="text-lg text-black pb-1">
             IPS LCD Gaming monitor
          </h1>
          <div className="flex">
            <p className="text-red-500 text-bold pb-1">$370 </p>
            <p className="text-gray-400 ml-5 text-bold pb-1"> $400</p>
          </div>
          <div className="flex items-center">
          <FaStar className="text-yellow-500"/><FaStar className="text-yellow-500"/><FaStar className="text-yellow-500"/><FaStar className="text-yellow-500"/><FaStar className="text-yellow-500"/><p className="ml-5">(99)</p>
          </div>
        </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-100 p-6 rounded-lg">
          <Image
            className="h-40 rounded w-full object-cover object-center mb-6"
            src={img4}
            alt="Image"
          />
          </div>
          <h1 className="text-lg text-black pb-1">
             S-Series Comfort chair
          </h1>
          <div className="flex">
            <p className="text-red-500 text-bold pb-1">$375 </p>
            <p className="text-gray-400 ml-5 text-bold pb-1"> $400</p>
          </div>
          <div className="flex items-center">
          <FaStar className="text-yellow-500"/><FaStar className="text-yellow-500"/><FaStar className="text-yellow-500"/><FaStar className="text-yellow-500"/>  <div className="relative">
    <FaStar className="text-gray-300" /> {/* Gray full star */}
    <FaStar
      className="text-yellow-500 absolute top-0 left-0"
      style={{ clipPath: "inset(0 50% 0 0)" }} // Clips half of the star
    />
  </div><p className="ml-5">(99)</p>
          </div>
        
        </div>
    </div>
  </div>
<div className="flex justify-center items-center h-screen -mt-[340px]">
      <button className="bg-red-600 text-white font-light text-base py-4 px-12 rounded hover:bg-red-700">
        View All Products
      </button>
    </div>
   
</section>
        </div>
    )
}