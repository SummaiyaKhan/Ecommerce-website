import Link from "next/link";
import pic from "../pics folder/pics1.png"
import pic2 from "../pics folder/pics2.png"
import Image from "next/image";

const Sign_up = ()=> {

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
      <div className="w-[400px] h-[500px]  my-20">
       <h1 className="text-3xl text-black font-semibold">Create an account</h1>
       <h2 className="text-sm text-black font-medium mt-3">Enter your details below</h2>
       <input type="text" placeholder="Name" className="bg-transparent mt-8 focus:outline-none"/>
<div className="h-[1px] w-[300px] bg-slate-400"></div>

<input type="text" placeholder="Email or phone Number" className="bg-transparent mt-8 focus:outline-none"/>
<div className="h-[1px] w-[300px] bg-slate-400"></div>

<input type="text" placeholder="Password" className="bg-transparent mt-8 focus:outline-none"/>
<div className="h-[1px] w-[300px] bg-slate-400"></div>

       <button className="bg-red-600 py-[10px] text-white mt-8 w-full rounded-md transition-transform transform hover:scale-105 active:scale-95">
  Create Account
</button>

<div className="items-center py-[4px] mt-3 w-full rounded-md border border-slate-500 justify-center flex cursor-pointer transition-all hover:bg-slate-100 active:bg-slate-200">
  <Image 
    src={pic2} 
    alt="image" 
    width={50} 
    height={50} 
    className="w-8 h-8 items-center" 
  />
  <p className="ml-2">Sign up with Google</p>
</div>

       <p className="justify-center flex items-center mt-6">
  Already have an account?
  <span className="ml-3 inline-block relative hover:after:block hover:after:border-b-2 hover:after:border-slate-500 after:absolute after:content-[''] after:w-full after:h-0 after:bottom-0">
    <Link href={"/login"}>
    Log in
    </Link>
    
  </span>
</p>
</div>
      </div>
        </div>
    )
}
export default Sign_up