
import Image from 'next/image';
import img5 from "../pics folder/img5.png"

export default function Section4() {
    return(
        <div className="">
        <div className="bg-black text-white w-[1170px] h-[400px] absolute ml-24">
  <div className="flex items-center mt-16 font-bold ml-20 text-[#29e029] ">
    <p>Catagaires</p>
  </div>
  <div>
    <h1 className="text-5xl flex-col text-white mt-8 ml-20 w-96 h-40 leading-tight ">Enhance Your Music Experience</h1>
    <button className="bg-[#29e029] text-white py-3 px-10 rounded hover:bg-[#3df83d] ml-20 text-sm">
  Buy Now!
</button>
 
  <div className="absolute -mt-72 ml-[550px]">
  <Image 
        src={img5}
        alt="img"
        width={800}
        height={600} 
        className=""
      />
  </div>
  </div>
</div>
</div>
    )
}