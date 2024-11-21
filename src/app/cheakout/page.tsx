"use client";

import img1 from "../pics folder/img1.png";
import img4 from "../pics folder/img4.png";
import Image from "next/image";
import React, { useState } from "react";

export default function CheckOut() {
  const [isChecked, setIsChecked] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<string | null>(null);

  const handleButtonClick = (method: string) => {
    // If the clicked method is already selected, we deselect it, else we select it.
    setSelectedPaymentMethod(prevMethod => (prevMethod === method ? null : method));
  } 
  return (
    <div className="flex flex-col md:flex-row justify-between items-start  bg-gray-50 min-h-screen">
      {/* Left Section */}
      <div className="w-full md:w-[450px] ml-24 p-6">
        <p className="text-gray-500 text-sm">
          Account / My Account / Product / View Card /{" "}
          <span className="font-semibold text-black">CheckOut</span>
        </p>
        <h1 className="text-3xl mt-6 font-semibold text-black">
          Billing Details
        </h1>
        
        <div className="w-full border border-gray-300 rounded-lg p-6 mt-6 bg-white shadow-sm">
          {/* Billing Details Form */}
          <form className="space-y-6">
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-gray-700"
              >
                First Name
              </label>
              <input
                id="firstName"
                type="text"
                placeholder="Enter your first name"
                className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <div>
              <label
                htmlFor="companyName"
                className="block text-sm font-medium text-gray-700"
              >
                Company Name
              </label>
              <input
                id="companyName"
                type="text"
                placeholder="Enter your company name"
                className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <div>
              <label
                htmlFor="streetAddress"
                className="block text-sm font-medium text-gray-700"
              >
                Street Address
              </label>
              <input
                id="streetAddress"
                type="text"
                placeholder="Enter your street address"
                className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <div>
              <label
                htmlFor="city"
                className="block text-sm font-medium text-gray-700"
              >
                Town/City
              </label>
              <input
                id="city"
                type="text"
                placeholder="Enter your town/city"
                className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                Phone Number
              </label>
              <input
                id="phone"
                type="text"
                placeholder="Enter your phone number"
                className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email address"
                className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
          </form>

          <div className="flex items-center space-x-2 mt-6">
            <div
              className={`w-5 h-5 border-2 border-black rounded-md flex items-center justify-center cursor-pointer ${
                isChecked ? "bg-white" : "bg-white"
              }`}
              onClick={() => setIsChecked(!isChecked)}
            >
              {isChecked && <span className="text-white text-sm">✔</span>}
            </div>
            <p className="text-sm text-gray-600">
              Save this information for faster checkout next time.
            </p>
          </div>
        </div>

      </div>
      {/* Right Section */}
      <div className="w-full md:w-[527px] mt-6 md:mt-0 mr-32 px-6 pt-32">
        <div className="border border-gray-300 rounded-lg p-6 bg-white shadow-sm">
          {/* Cart Items */}
          <div className="flex items-center justify-between border-b pb-4">
            <div className="flex items-center">
              <Image
                src={img1}
                alt="LCD Monitor"
                width={50}
                height={50}
                className="rounded-md"
              />
              <p className="ml-3 text-gray-800 font-medium">LCD Monitor</p>
            </div>
            <p className="text-gray-700 font-semibold">$650</p>
          </div>

          <div className="flex items-center justify-between mt-4 border-b pb-4">
            <div className="flex items-center">
              <Image
                src={img4}
                alt="LCD Monitor"
                width={50}
                height={50}
                className="rounded-md"
              />
              <p className="ml-3 text-gray-800 font-medium">LCD Monitor</p>
            </div>
            <p className="text-gray-700 font-semibold">$650</p>
          </div>

          {/* Subtotal and Total */}
          <div className="space-y-4 mt-6">
            <p className="flex justify-between text-gray-700">
              <span>Subtotal:</span> <span>$650</span>
            </p>
            <div className="h-[1px] bg-gray-300"></div>
            <p className="flex justify-between text-gray-700">
              <span>Shipping:</span> <span>$50</span>
            </p>
            <div className="h-[1px] bg-gray-300"></div>
            <p className="flex justify-between font-semibold text-gray-900">
              <span>Total:</span> <span>$700</span>
            </p>
          </div>

          {/* Payment Methods */}
          <div className="mt-6 space-y-4">
      {/* Bank Transfer */}
      <div className="flex items-center space-x-3">
        <button
          className={`w-5 h-5 rounded-full border-2 border-black flex items-center justify-center cursor-pointer ${
            selectedPaymentMethod === "bank" ? "bg-black" : "bg-white"
          }`}
          onClick={() => handleButtonClick("bank")}
        ></button>
        <p className="text-gray-700">Bank Transfer</p>
      </div>

      {/* Cash on Delivery */}
      <div className="flex items-center space-x-3">
        <button
          className={`w-5 h-5 rounded-full border-2 border-black flex items-center justify-center cursor-pointer ${
            selectedPaymentMethod === "cash" ? "bg-black" : "bg-white"
          }`}
          onClick={() => handleButtonClick("cash")}
        ></button>
        <p className="text-gray-700">Cash on Delivery</p>
      </div>
    </div>

          {/* Coupon Code */}
          <div className="flex items-center space-x-4 mt-6">
            <input
              type="text"
              placeholder="Coupon Code"
              className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black w-[250px]"
            />
            <button className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition">
              Apply Coupon
            </button>
          </div>

          {/* Place Order */}
          <button className="bg-red-600 text-white mt-6 px-8 py-3 w-full rounded-lg hover:bg-red-500 transition">
            Place Order
          </button>
        </div>
      </div>

    </div>
    
  );
}
