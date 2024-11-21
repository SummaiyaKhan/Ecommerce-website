

import React from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { BsCashStack } from "react-icons/bs"; // Money Back Guarantee Icon
import { MdSupportAgent } from "react-icons/md"; // Customer Service Icon

const Section7   = () => {
  return (
    <div className="flex justify-between mt-[320px] mb-24 gap-x-4">
    {/* Delivery Box */}
    <div className="w-60 h-40  flex flex-col items-center ml-72">
      <div className="bg-gray-400 rounded-full p-2 w-14 h-14">
        <TbTruckDelivery
          size={40}
          className="text-white bg-black rounded-full p-2 mx-auto"
        />
      </div>
      <h1 className="text-base font-semibold text-black mt-4">
        FREE AND FAST DELIVERY
      </h1>
      <p className="text-xs font-light text-black text-center mt-1 px-4">
        Free delivery for all orders over $140
      </p>
    </div>
  
    {/* Customer Service Box */}
    <div className="w-60 h-40  flex flex-col items-center -ml-60">
      <div className="bg-gray-400 rounded-full p-2 w-14 h-14">
        <MdSupportAgent
          size={40}
          className="text-white bg-black rounded-full p-2 mx-auto"
        />
      </div>
      <h1 className="text-base font-semibold text-black mt-4">
        24/7 CUSTOMER SERVICE
      </h1>
      <p className="text-xs font-light text-black text-center mt-1 px-4">
        Always here to help with your questions and issues
      </p>
    </div>
  {/* Money Back Guarantee Box */}
    <div className="w-60 h-40  flex flex-col items-center mr-72 -ml-60">
      <div className="bg-gray-400 rounded-full p-2 w-14 h-14">
        <BsCashStack
          size={40}
          className="text-white bg-black rounded-full p-2 mx-auto"
        />
      </div>
      <h1 className="text-base font-semibold text-black mt-4">
        MONEY BACK GUARANTEE
      </h1>
      <p className="text-xs font-light text-black text-center mt-1 px-4">
        30-day money-back guarantee on all purchases
      </p>
    </div>
  </div>
  
  );
};
export default Section7;