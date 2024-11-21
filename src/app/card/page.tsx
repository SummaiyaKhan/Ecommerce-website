import Image from 'next/image';
import img4 from "../pics folder/img4.png"
import img1 from "../pics folder/img1.png"
import Link from 'next/link';


export default function Card() {
    return(

    <div className="bg-gray-50 p-6 rounded-lg shadow-lg ">
      {/* Breadcrumb */}
      <p className="text-gray-600 text-sm mb-4">
        Home / <span className="font-semibold text-black">Card</span>
      </p>

      {/* Table Header */}
      <div className="flex justify-between text-gray-500 border-b border-gray-300 pb-2 mb-4">
        <p className="w-1/4 text-center font-semibold">Product</p>
        <p className="w-1/4 text-center font-semibold">Price</p>
        <p className="w-1/4 text-center font-semibold">Quantity</p>
        <p className="w-1/4 text-center font-semibold">Subtotal</p>
      </div>

      {/* Product Rows */}
      <div className="space-y-4">
        {/* Product 1 */}
        <div className="flex items-center justify-between bg-white rounded-lg p-4 shadow hover:shadow-md transition">
          <div className="flex items-center w-1/4">
            <Image
              src={img1}
              alt="LCD Monitor"
              width={40}
              height={40}
              className="rounded-md"
            />
            <p className="ml-3 text-gray-800 font-medium">LCD Monitor</p>
          </div>
          <p className="w-1/4 text-center text-gray-700">$650</p>
          <p className="w-1/4 text-center text-gray-700">01</p>
          <p className="w-1/4 text-center text-gray-700">$650</p>
        </div>

        {/* Product 2 */}
        <div className="flex items-center justify-between bg-white rounded-lg p-4 shadow hover:shadow-md transition">
          <div className="flex items-center w-1/4">
            <Image
              src={img4}
              alt="HL GamePad"
              width={40}
              height={40}
              className="rounded-md"
            />
            <p className="ml-3 text-gray-800 font-medium">HL GamePad</p>
          </div>
          <p className="w-1/4 text-center text-gray-700">$550</p>
          <p className="w-1/4 text-center text-gray-700">02</p>
          <p className="w-1/4 text-center text-gray-700">$1100</p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg flex flex-col md:flex-row gap-6">
  {/* Left Section */}
  <div className="w-[600px] space-y-6 mr-60">
    <div className="flex justify-between mb-6">
      <Link href={"/"}>
      <button className="bg-black mt-[5px] text-white px-4 py-2 rounded-lg shadow hover:bg-gray-800 transition">
        Return to Shop
      </button>
     </Link>
    </div>
    {/* Buttons Section at the Top */}

    {/* Coupon Code */}
    <div className="flex items-center space-x-4">
      <input
        type="text"
        placeholder="Coupon Code"
        className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black w-[250px]"
      />
      <button className="bg-red-600 text-white px-8 py-[10px] rounded-lg shadow hover:bg-red-500 transition">
        Apply Coupon
      </button>
    </div>
  </div>


<div className='flex flex-col items-end '>
    <button className="bg-red-600 flex mb-5 text-white px-6 py-3 mt-1 w-[150px] h-12 justify-center rounded-lg shadow hover:bg-red-500 transition ">
     Update Card
    </button>
  {/* Right Section */}
  <div className="w-[500px] bg-white p-6 rounded-lg shadow-lg relative">
  {/* Cart Total */}
  <h1 className="text-lg font-semibold text-gray-800 mb-4 border-b pb-2">
    Cart Total
  </h1>
  <div className="space-y-4">
    <p className="flex justify-between text-gray-700">
      <span>Subtotal:</span> <span>$650</span>
    </p>
    <div className="h-[1px] bg-gray-300"></div>
    <p className="flex justify-between text-gray-700">
      <span>Shipping:</span> <span>$50</span>
    </p>
    <div className="h-[1px] bg-gray-300"></div>
    <p className="flex justify-between font-semibold text-gray-800">
      <span>Total:</span> <span>$700</span>
    </p>
  </div>

  {/* Proceed to Checkout */}
  <div className="mt-6">
    <Link href={"/cheakout"}>
   
    <button className="bg-black text-white px-6 py-3 rounded-lg shadow hover:bg-gray-800 transition w-full">
      Proceed to Checkout
    </button>
     </Link>
  </div>
</div>
</div>
</div>
</div>
</div>
    
    )
}