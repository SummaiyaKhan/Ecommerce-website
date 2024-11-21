import Link from "next/link";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

export default function Contact() {
    return(
      <div className="ml-32 mt-16">
      {/* Breadcrumb */}
      <div>
        <ul className="flex text-sm">
          <Link href={"/"}>
            <li className="text-gray-500 hover:text-black transition duration-300 cursor-pointer">Home /</li>
          </Link>
          <li className="font-medium text-black ml-1">About</li>
        </ul>
      </div>
    
      <div className="flex gap-10 mt-16 my-32">
        {/* Contact Information */}
        <div className="w-[350px] h-[450px] bg-gray-50 shadow-md rounded-lg p-6">
          <div className="space-y-8">
            {/* Call To Us */}
            <div className="flex items-center gap-4">
              <div className="bg-red-600 text-white w-10 h-10 rounded-full flex justify-center items-center shadow-md">
                <FaPhoneAlt size={18} />
              </div>
              <h1 className="text-lg font-semibold text-black">Call To Us</h1>
            </div>
            <p className="text-gray-700">We are available 24/7, 7 days a week.</p>
            <p className="text-gray-900 font-medium">Phone: +8801611112222</p>
            <div className="h-[1px] w-full bg-gray-300"></div>
    
            {/* Write To Us */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="bg-red-600 text-white w-10 h-10 rounded-full flex justify-center items-center shadow-md">
                  <FaEnvelope size={18} />
                </div>
                <h1 className="text-lg font-semibold text-black">Write To Us</h1>
              </div>
              <p className="text-gray-700">Fill out our form and we will contact you within 24 hours.</p>
              <p className="text-gray-900 font-medium">Emails: customer@exclusive.com</p>
              <p className="text-gray-900 font-medium">Emails: support@exclusive.com</p>
            </div>
          </div>
        </div>
    
        {/* Contact Form */}
        <div className="w-[800px] h-[450px] bg-white shadow-lg rounded-lg p-6">
          <div className="w-full h-full flex flex-col gap-6">
            {/* Inputs in a single row */}
            <ul className="flex gap-4">
              <li className="flex-1">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-gray-100 border border-gray-300 text-black text-base p-3 font-medium rounded-sm focus:outline-none "
                />
              </li>
              <li className="flex-1">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full bg-gray-100 border border-gray-300 text-black text-base font-medium p-3 rounded-sm focus:outline-none "
                />
              </li>
              <li className="flex-1">
                <input
                  type="text"
                  placeholder="Your Phone"
                  className="w-full bg-gray-100 border border-gray-300 text-black text-base font-medium p-3 rounded-sm focus:outline-none "
                />
              </li>
            </ul>
            {/* Message input */}
            <ul>
              <li>
                <textarea
                  placeholder="Your Message"
                  className="w-full h-[235px] bg-gray-100 border border-gray-300 text-black font-medium text-base p-3 rounded-sm focus:outline-none "
                ></textarea>
              </li>
            </ul>
            {/* Send Message Button */}
            <div className="flex justify-end">
              <button className="bg-red-600 text-white px-12 py-3 rounded-sm shadow-md hover:bg-red-700 transition-all duration-300">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    )
}