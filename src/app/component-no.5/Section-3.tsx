import { FaStar } from "react-icons/fa6";
import img1 from "../pics folder/image1.png"
import img2 from "../pics folder/image2.png"
import img3 from "../pics folder/image3.png"
import img4 from "../pics folder/image4.png"
import Image from "next/image";

export default function Section3() {
    return(
        <div className="ml-14 mt-16">
             <div className="h-7 w-[13px] rounded-sm bg-red-600 ">
             </div>
            <p className="ml-5 text-red-600 text-sm -mt-6">This Month</p>
            <div className="flex items-center">
            <h1 className="text-3xl font-medium  text-black mt-5">Best Selling Products</h1>
           
             <button className="bg-red-600 ml-[730px] text-white py-4 text-sm px-10 rounded-sm hover:bg-red-700 transition duration-300">
               View All
             </button>
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
  <div className="bg-gray-100 py-2 px-6 rounded-lg">
    <Image
      className="h-48 w-full object-contain rounded object-center mb-6"
      src={img2}
      alt="Image"
    />
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
  
</section>
            </div>

    
        
    )
}