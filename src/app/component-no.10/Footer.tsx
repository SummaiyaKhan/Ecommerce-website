import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { TbLocation } from "react-icons/tb";
import Image from "next/image";
import Image1 from "../pics folder/image.png"
import Image2 from "../pics folder/img.png"
import { IoLogoApple } from "react-icons/io";

export default function  Footer() {
    return(
        
        <footer className="bg-black text-white pt-10 w-full h-[500px] pb-5 ">
          <div className="container mx-10 px-6 md:px-12">
            <div className="flex justify-center items-start flex-wrap gap-8"> {/* Centering sections and equal spacing */}
      
              {/* Exclusive Section */}
              <div className="flex flex-col text-xs ml-9 flex-grow w-[80px] ">
                <h2 className="text-lg font-semibold mb-4 ">Exclusive</h2>
                <h3 className="text-base mb-4">Subscribe</h3>
                <ul>
                  <li className="text-sm font-light mb-3">Get 10% off your first order</li>
                </ul>
                <div className="relative w-full md:w-3/5">
  <input
    type="text"
    placeholder="Enter your email"
    className="w-40 py-2 px-3 border border-white rounded-md bg-black text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-100"
  />
  {/* Icon (optional) */}
  <div className="absolute top-4 transform -translate-y-1/2 text-gray-500">
    {/* Remove the icon completely if not needed */}
    <TbLocation size={20} className="rotate-45 ml-32" />
  </div>
</div>
</div>
      
              {/* Support Section */}
              <div className="flex flex-col text-xs flex-grow ml-[120px]  w-[140px]">
  <h2 className="text-lg font-semibold mb-5 ">Support</h2>
  <ul className=""> {/* Added space between list items */}
    <li className="text-sm font-light mb-4">111 Bijoy Sarani, Dekha,</li>
    <li className="text-sm font-light mb-4  ">DH 1515, Bangladesh</li> 
    <li className="text-sm font-light mb-4  ">exclusive@gmail.com</li>
    <li className="text-sm font-light mb-4  ">+88015-88888-9999</li>
  </ul>
</div>

      
              {/* Account Quick Links Section */}
              <div className="flex flex-col text-xs flex-grow ml-[50px]  w-[90px]">
                <h2 className="text-lg font-semibold mb-5">Account</h2>
                <ul>
                  <li className="text-sm font-light mb-4">My Account</li>
                  <li className="text-sm font-light mb-4">Login / Register</li>
                  <li className="text-sm font-light mb-4">Card</li>
                  <li className="text-sm font-light mb-4">Wishlist</li>
                  <li className="text-sm font-light mb-4">Shop</li>
                </ul>
              </div>
      
              {/* Quick Links Section */}
              <div className="flex flex-col text-xs flex-grow ml-[50px] ">
                <h2 className="text-lg font-semibold mb-5">Quick Link</h2>
                <ul>
                  <li className="text-sm font-light mb-4">Privacy Policy</li>
                  <li className="text-sm font-light mb-4">Terms Of Use</li>
                  <li className="text-sm font-light mb-4">FAQ</li>
                  <li className="text-sm font-light mb-4">Contact</li>
                </ul>
              </div>
      
              {/* Social Media Icons */}
              <div className="flex flex-col -mr-20 text-xs flex-grow ml-[50px]  w-[230px] ">
                <h2 className="text-lg font-semibold mb-5 ">Download App</h2>
                <p className="text-sm font-light mb-4">Save $3 With App New User Only</p>
                  <div className="w-80 h-80 flex">
                <div>
                  <Image 
                    src={Image1} 
                    alt="image" 
                    width={100} 
                    height={40} 
                    className="border-4 border-white"
                  />
                </div>
                <div className="flex flex-col ml-3">
                  <button className="w-[150px] h-12 border border-white rounded-xl">
                    <div className="flex items-center pl-2">
                      <Image 
                    src={Image2} 
                    alt="image" 
                    width={30} 
                    height={40} 
                    className=""
                  />
                  <div className=" flex flex-col items-start">
                    <p className="text-xs font-extralight">GET IT ON</p>
                    <p className="text-lg font-bold">Google Play</p>
                  </div>
                    </div>
                  
                  </button>
                  <button className="w-[150px] h-12 border border-white rounded-xl">
                    <div className="flex items-center  ">
                    <IoLogoApple 
                   size={40} 
                    className="-mt-1"/>
                     
                  <div className=" flex flex-col items-start">
                    <p className="text-xs font-extralight">Download on the </p>
                    <p className="text-lg font-bold">App Store</p>
                  </div>
                    </div>
                  
                  </button>
                </div>
                </div>
                <div className="flex items-center -mt-[200px]">
                  <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                    <div className="text-blue-600 hover:text-blue-800 transition-colors duration-300">
                      <FaFacebook size={30} />
                    </div>
                  </a>
                  <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                    <div className="text-blue-400 ml-8 hover:text-blue-600 transition-colors duration-300">
                      <FaTwitter size={30} />
                    </div>
                  </a>
                  <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                    <div className="text-blue-700 ml-8 hover:text-blue-900 transition-colors duration-300">
                      <FaLinkedin size={30} />
                    </div>
                  </a>
                  <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                    <div className="text-pink-600 ml-8 hover:text-pink-800 transition-colors duration-300">
                      <FaInstagram size={30} />
                    </div>
                  </a>
                </div>
              </div>
      
            </div>
          </div>
        {/* Footer Bottom */}
        <div className="text-center mt-36 ">
          <p className="text-base text-gray-700 ">&copy; 2024 Your Company. All Rights Reserved.</p>
        </div>
        </footer>
      
      
      
      
      
    )
}