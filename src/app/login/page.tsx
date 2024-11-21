import pic from "../pics folder/pics1.png"
import Image from "next/image";

const Login = ()=> {

    return(
        <div className="w-[1200px] h-[585px] mt-10 mb-24" >
            <div className="w-[750px] h-[584px]  bg-[#87CEEB] border-2 border-[#5fbde2] flex">
            <Image 
        src={pic} 
        alt="image" 
        width={1000} 
        height={800} 
       className="-mt-10 ml-28"
       
      />
      <div className="w-[300px] h-[260px] my-40">
       <h1 className="text-3xl text-black font-semibold">Log in to Exclusive</h1>
       <h2 className="text-sm text-black font-medium mt-3">Enter your details below</h2>

<input type="text" placeholder="Email or phone Number" className="bg-transparent mt-8 focus:outline-none"/>
<div className="h-[1px] w-[300px] bg-slate-400"></div>

<input type="text" placeholder="Password" className="bg-transparent mt-8 focus:outline-none"/>
<div className="h-[1px] w-[300px] bg-slate-400"></div>
<div className="flex">
   <button className="bg-red-600 py-[10px] px-8 text-white mt-8 rounded-sm transition-transform transform hover:scale-105 active:scale-95">
  Log in
</button>

<button className="text-red-600 ml-16  mt-8 ">
  Forget Password?
</button>
</div>
      </div>
      </div>
        </div>
    )
}
export default Login