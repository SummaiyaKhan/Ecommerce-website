import { BiTime } from "react-icons/bi";
import { FaArrowLeft, FaArrowRight, FaCamera, FaGamepad, FaHeadphones, FaLaptop, } from "react-icons/fa6";
import { IoIosPhonePortrait } from "react-icons/io";

export default function Section2() {
    return(
        <div className="ml-14 mt-20 ">
             <div className="h-7 w-[13px] rounded-sm bg-red-600 ">
             </div>
            <p className="ml-5 text-red-600 text-sm -mt-6">Categories</p>
            <div className="flex items-center">
            
            <h1 className="text-3xl font-medium  text-black mt-5">Browse By Category</h1>
            <div className="ml-[600px]">
                 <FaArrowLeft size={45} className="bg-gray-200 rounded-full p-3 ml-72"/>
            </div>
           <div>
            <FaArrowRight size={45} className="bg-gray-200 rounded-full p-3 ml-1"/>
          </div>

            </div>
            <div className="flex flex-wrap gap-6 justify-center mt-16">
      {/* Phone Box */}
      <div className="border-2 border-gray-300 w-40 h-32 flex flex-col -ml-16 justify-center items-center hover:bg-red-600 hover:border-red-600">
        <IoIosPhonePortrait size={40} className="text-black" />
        <h2 className="mt-2 text-center text-sm text-black">Phones</h2>
      </div>

      {/* Computer Box */}
      <div className="border-2 border-gray-300 w-40 h-32 flex flex-col justify-center items-center  hover:bg-red-600 hover:border-red-600">
        <FaLaptop size={40} className="text-black" />
        <h2 className="mt-2 text-center text-sm text-black">Computer</h2>
      </div>

      {/* Smart Watch Box */}
      <div className="border-2 border-gray-300 w-40 h-32 flex flex-col justify-center items-center  hover:bg-red-600 hover:border-red-600">
        <BiTime size={40} className="text-black" />
        <h2 className="mt-2 text-center text-sm text-black">Smart Watch</h2>
      </div>

      {/* Camera Box */}
      <div className="border-2 border-gray-300 w-40 h-32 flex flex-col justify-center items-center  hover:bg-red-600 hover:border-red-600">
        <FaCamera size={40} className="text-black" />
        <h2 className="mt-2 text-center text-sm text-black">Camera</h2>
      </div>

      {/* Headphone Box */}
      <div className="border-2 border-gray-300 w-40 h-32 flex flex-col justify-center items-center  hover:bg-red-600 hover:border-red-600">
        <FaHeadphones size={40} className="text-black" />
        <h2 className="mt-2 text-center text-sm text-black">Headphones</h2>
      </div>

      {/* Gaming Box */}
      <div className="border-2 border-gray-300 w-40 h-32 flex flex-col justify-center items-center  hover:bg-red-600 hover:border-red-600">
        <FaGamepad size={40} className="text-black" />
        <h2 className="mt-2 text-center text-sm text-black">Gaming</h2>
      </div>
      <div className="flex h-[1px] w-[1084px] -ml-16 bg-gray-500 mt-10 mb-5">

</div>
    </div>
   
        </div>
    )
}