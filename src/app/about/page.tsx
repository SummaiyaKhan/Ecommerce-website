import Image from 'next/image';
import Pic1 from "../pics folder/newpic.png";
import Pic2 from "../pics folder/Picture-no.1.png";
import Pic3 from "../pics folder/Picture-no.2.png";
import Pic4 from "../pics folder/Picture-no.3.png";
import { IoIosStats, IoMdPeople } from "react-icons/io";
import { FaShoppingCart, FaMoneyBillWave } from "react-icons/fa";
import { FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import Section7 from '../component-no.9/Section7';
import Link from 'next/link';

export default function About() {
  return (
    <div>
    <div className="bg-white text-black">
      {/* Breadcrumb */}
      <div className="ml-32 mt-8">
        <ul className="flex text-sm">
          <Link href={"/"}><li className="text-gray-500">Home /</li>
          </Link>
          
          <li className="font-medium text-black ml-1">About</li>
        </ul>
      </div>

      {/* Our Story Section */}
      <div className="flex flex-wrap justify-between items-center mt-16 mx-32 gap-12">
        <div className="max-w-lg">
          <h1 className="text-4xl font-bold">Our Story</h1>
          <p className="mt-6 text-gray-950 leading-relaxed">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            et voluptatibus, optio quas voluptate recusandae at libero
            voluptatem rerum, maxime debitis deserunt. Necessitatibus, dolores
            aut. Inventore, vitae. Nam, odit aliquid Lorem, ipsum dolor sit
            amet consectetur adipisicing elit. Incidunt et voluptatibus?
          </p>
          <p className="mt-4 text-gray-950 leading-relaxed">
            Optio quas voluptate recusandae at libero voluptatem rerum, maxime
            debitis deserunt. Necessitatibus, dolores aut. Inventore, vitae.
            Nam, odit aliquid?
          </p>
        </div>
        <div className="w-[600px] h-[500px] rounded-md overflow-hidden shadow-lg shadow-black/20 relative">
  <div className="absolute inset-0 shadow-inner shadow-black/10"></div>
  <Image
    src={Pic1}
    alt="Our Story Image"
    width={700}
    height={800}
    className="object-cover -mt-5 "
  />
</div>
      </div>

      {/* Site Statistics Section */}
      <div className="mt-28">
        <div className="flex flex-wrap justify-center gap-8 mt-10 mx-10">
          {/* Sellers active on our site */}
          <div className="border border-gray-300 w-56 h-40 flex flex-col justify-center items-center bg-gray-300 shadow-md hover:bg-red-500 hover:scale-105 transition-all duration-300 rounded-lg">
            <IoIosStats size={50} className="text-black" />
            <h2 className="mt-3 text-center text-2xl font-bold text-black">
              10.5k
            </h2>
            <h2 className=" text-center text-sm font-medium text-gray-800">
            Sellers active on our site
            </h2>
          </div>

          {/* Monthly product sales */}
          <div className="border border-gray-300 w-56 h-40 flex flex-col justify-center items-center bg-gray-100 shadow-md hover:bg-red-500 hover:scale-105 transition-all duration-300 rounded-lg">
            <FaShoppingCart size={50} className="text-black" />
            <h2 className="mt-3 text-center text-2xl font-bold text-black">
              33k
            </h2>
            <h2 className=" text-center text-sm font-medium text-gray-800">
            Monthly product sales 
            </h2>
          </div>

          {/* Customers active on our site */}
          <div className="border border-gray-300 w-56 h-40 flex flex-col justify-center items-center bg-gray-100 shadow-md hover:bg-red-500 hover:scale-105 transition-all duration-300 rounded-lg">
            <IoMdPeople size={50} className="text-black" />
            <h2 className="mt-3 text-center text-2xl font-bold text-black">
              45.5k
            </h2>
            <h2 className="text-center text-sm font-medium text-gray-800">
            Customers active on our site 
            </h2>
          </div>

          {/* Annual gross sales on our site */}
          <div className="border border-gray-300 w-56 h-40 flex flex-col justify-center items-center bg-gray-100 shadow-md hover:bg-red-500 hover:scale-105 transition-all duration-300 rounded-lg">
            <FaMoneyBillWave size={50} className="text-black" />
            <h2 className="mt-3 text-center text-2xl font-bold text-black">
              25k
            </h2>
            <h2 className="text-center text-sm font-medium text-gray-800">
            Annual gross sales on our site
            </h2>
          </div>
        </div>
      </div>

      <div className="w-[900px] mx-auto mt-28 mb-28 flex justify-between space-x-6">
      {/* Card 1 */}
      <div className="w-[300px] h-[450px] relative shadow-lg rounded-lg overflow-hidden">
        <Image
          src={Pic2}
          alt="Person 1"
          width={500}
          height={400}
          className="object-cover w-full h-full"
        />
        <div className="absolute bottom-0 bg-gradient-to-t from-black to-transparent w-full p-4 text-white">
          <h2 className="text-lg font-bold">John Doe</h2>
          <p className="text-sm">Web Developer</p>
          <div className="flex space-x-3 mt-2">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-blue-400 text-xl" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-pink-400 text-xl" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-blue-700 text-xl" />
            </a>
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="w-[300px] h-[450px] relative shadow-lg rounded-lg overflow-hidden">
        <Image
          src={Pic3}
          alt="Person 2"
          width={500}
          height={400}
          className="object-cover w-full h-full"
        />
        <div className="absolute bottom-0 bg-gradient-to-t from-black to-transparent w-full p-4 text-white">
          <h2 className="text-lg font-bold">Jane Smith</h2>
          <p className="text-sm">Graphic Designer</p>
          <div className="flex space-x-3 mt-2">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-blue-400 text-xl" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-pink-400 text-xl" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-blue-700 text-xl" />
            </a>
          </div>
        </div>
      </div>

      {/* Card 3 */}
      <div className="w-[300px] h-[450px] relative shadow-lg rounded-lg overflow-hidden">
        <Image
          src={Pic4}
          alt="Person 3"
          width={500}
          height={400}
          className="object-cover w-full h-full"
        />
        <div className="absolute bottom-0 bg-gradient-to-t from-black to-transparent w-full p-4 text-white">
          <h2 className="text-lg font-bold">Alex Brown</h2>
          <p className="text-sm">App Developer</p>
          <div className="flex space-x-3 mt-2">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-blue-400 text-xl" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-pink-400 text-xl" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-blue-700 text-xl" />
            </a>
          </div>
        </div>
      </div>
    </div>
    </div>
    <div className='-mt-48'>
        <Section7/>
    </div>
   
    </div>

    
  );
}
