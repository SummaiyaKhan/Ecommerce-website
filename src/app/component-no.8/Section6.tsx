import Image from "next/image";
import pic1 from "../pics folder/pic1.png";
import pic2 from "../pics folder/pic.png";
import pic3 from "../pics folder/pic3.png";
import pic4 from "../pics folder/pic4.png";
 
export default function Section6() {
    return(
        <div className="relative ">
            <div className="flex-col ml-16 -mt-60">
            <div className="h-7 w-[13px] rounded-sm bg-red-600">
            </div>
            <div className="flex ">
            <p className="ml-5 text-red-600 text-sm -mt-6 ">Featured</p>
            </div>
            <h1 className="text-3xl font-medium  text-black mt-5 ">New Arrival</h1>

            </div>

<div className="w-[500px] h-[500px] bg-black flex items-center justify-center ml-16 mt-10">
  <div className="relative">
    <Image
      src={pic1}
      alt="Description of image"
      className="object-contain w-[600px] h-[500px]"
    />
  </div>
<div className="absolute mt-[350px] -ml-28 w-72 h-60">
    <h1 className="text-3xl font-light text-white pb-5">PlayStation 5</h1>
    <p className=" text-gray-200 font-light pb-5">Block and white version of the PS5 coming out on sale</p>
    <p className=" text-white font-light text-xl">Shop Now</p>
    <div className="h-[1px] w-24 bg-gray-500 mb-5 ">

    </div>
</div>
  
</div>

<div className="flex absolute ml-[600px] -mt-48">
<div className="relative">
  <Image
      src={pic3}
      alt="Description of image"
      className="object-contain w-72  h-48 bg-black "
    />
</div>
  <div className="absolute mt-12 ml-10  w-72 h-60">
    <h1 className="text-3xl font-light text-white pb-5">Speaker</h1>
    <p className=" text-gray-200 font-light pb-5">Amazon wireless speakers</p>
    <p className=" text-white font-light text-xl">Shop Now</p>
    <div className="h-[1px] w-24 bg-gray-500 mb-5 ">

    </div>
    </div>
    
    <div className="relative ml-5">
  <Image
      src={pic2}
      alt="Description of image"
      className="object-contain w-72  h-48 bg-black "
    />
</div>
  <div className="absolute mt-12 ml-[340px]  w-72 h-60">
    <h1 className="text-3xl font-light text-white pb-5">Speaker</h1>
    <p className=" text-gray-200 font-light pb-5">Amazon wireless speakers</p>
    <p className=" text-white font-light text-xl">Shop Now</p>
    <div className="h-[1px] w-24 bg-gray-500 mb-5 ">

    </div>
    </div>

</div>

{/* {last div} */}
<div className="flex -mt-[500px] ml-[580px]">
<div className="relative">
  <Image
      src={pic4}
      alt="Description of image"
      className="object-contain w-[590px]  h-72 bg-black ml-5"
    />

</div>
<div className="absolute mt-28 ml-16 w-72 h-60 ">
    <h1 className="text-3xl font-light text-white pb-5">Woman of Collection</h1>
    <p className=" text-gray-200 font-light pb-5">Featured Woman collection that give you another vibe.</p>
    <p className=" text-white font-light text-xl">Shop Now</p>
    <div className="h-[1px] w-24 bg-gray-500  ">

    </div>
</div>
  </div>
        </div>
    )
}