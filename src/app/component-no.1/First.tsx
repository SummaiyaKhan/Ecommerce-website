import Link from "next/link";
import { CiHeart, CiSearch } from "react-icons/ci";
import { MdAccountCircle, MdOutlineShoppingCart } from "react-icons/md";
import React from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

export default function Home() {
  return (
    <div>
     <div className="flex mt-10 items-center"> 
  <h1 className="mx-32 font-semibold text-xl">Exclusive</h1>
  <ul className="flex ml-20 space-x-10 text-base">
  
  <li className="border-b-2 border-transparent hover:border-black hover:pb-[0.5px]">
    <Link href="/">Home</Link>
  </li>
  <li className="border-b-2 border-transparent hover:border-black hover:pb-[0.5px]">
    <Link href="/contact">Contact</Link>
  </li>
  <li className="border-b-2 border-transparent hover:border-black hover:pb-[0.5px]">
    <Link href="/about">About</Link>
  </li>
  <li className="border-b-2 border-transparent hover:border-black hover:pb-[0.5px]">
  <Link href="/sign">Sign Up</Link>
  </li>

</ul>

  <div className="ml-72 flex items-center relative">
    <input
      type="text"
      placeholder="What are you looking for?"
      className="text-xs bg-slate-100 py-2 pr-10 pl-4 rounded-md font-light border-2 border-transparent focus:border-gray-400 focus:outline-none focus:ring-0"
    />
    <CiSearch className="absolute right-3 text-black" />
  </div>
  <div className="items-center flex">
    <CiHeart size={25} className="ml-5 text-black " />
    <MdOutlineShoppingCart size={25} className="ml-5 text-black w-6 h-6" />
    <DropdownMenu.Root>
      {/* Trigger Button */}
      <DropdownMenu.Trigger asChild>
        <MdAccountCircle size={30}  className="flex items-center ml-3 "/>          
      </DropdownMenu.Trigger>

      {/* Dropdown Content */}
      <DropdownMenu.Content
        className="min-w-[200px] bg-gray-700 text-gray-200 shadow-lg rounded-md p-2"
        sideOffset={5}
      >
        {/* Manage My Account */}
        <DropdownMenu.Item
          className="flex items-center p-2 rounded-md hover:bg-gray-600 cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-3 text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM8.5 9a1.5 1.5 0 113 0v3a1.5 1.5 0 11-3 0V9zm1.5 8a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
          </svg>
          <Link href={"/account"} >
          Manage My Account
          </Link>
        </DropdownMenu.Item>

        {/* My Orders */}
        <DropdownMenu.Item
          className="flex items-center p-2 rounded-md hover:bg-gray-600 cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-3 text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M16 6H4a1 1 0 00-1 1v7a1 1 0 001 1h12a1 1 0 001-1V7a1 1 0 00-1-1zM4 8h12v5H4V8z" />
          </svg>
          My Orders
        </DropdownMenu.Item>

        {/* My Cancellations */}
        <DropdownMenu.Item
          className="flex items-center p-2 rounded-md hover:bg-gray-600 cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-3 text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 2a8 8 0 100 16 8 8 0 000-16zM8 10V6a1 1 0 112 0v4h3a1 1 0 110 2H10v3a1 1 0 11-2 0v-3H5a1 1 0 010-2h3z"
              clipRule="evenodd"
            />
          </svg>
          My Cancellations
        </DropdownMenu.Item>

        {/* My Reviews */}
        <DropdownMenu.Item
          className="flex items-center p-2 rounded-md hover:bg-gray-600 cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-3 text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm3.3 9.7L5.6 9.6a1 1 0 011.4-1.4l1.3 1.3 4.3-4.3a1 1 0 011.4 1.4l-5 5a1 1 0 01-1.4 0z" />
          </svg>
          My Reviews
        </DropdownMenu.Item>

        {/* Logout */}
        <DropdownMenu.Item
          className="flex items-center p-2 rounded-md hover:bg-gray-600 cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-3 text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M7 10a1 1 0 011-1h6a1 1 0 110 2H8a1 1 0 01-1-1zm1.707-7.707a1 1 0 010 1.414L5.414 8H16a1 1 0 110 2H5.414l3.293 3.293a1 1 0 11-1.414 1.414l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
          Logout
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  </div>
     </div>

  <div className="bg-gray-300 h-[1px] w-full flex mt-3">

  </div>
    </div>


  );
}