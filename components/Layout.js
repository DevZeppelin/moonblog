import React, { useState } from "react";
import { AiOutlineBell, AiOutlineUser } from "react-icons/ai";
import { GiMonkey } from "react-icons/gi";
import { FiSearch } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi"
import Link from "next/link";


export default function Layout({ children }) {
  
  const [open, setOpen] = useState(false);

  const toggleNav = (e) => {
    e.preventDefault();
    setOpen(!open);
  };

  return (
    <div>
      <div className="px-2 md:px-24 bg-black text-white flex justify-between h-16">
        <Link href="/">
          <a className="text-white text-2xl flex align-baseline px-2 md:px-10 my-auto hover:text-blue-500">
            <GiMonkey className="inline text-4xl mr-4" /> moonwatcher.dev
          </a>
        </Link>

        <div className="hidden md:flex items-center w-1/3 text-lg">
          <input
            type="text"
            className="bg-transparent border-b w-full border-white outline-none"
          />
          <FiSearch className="ml-8 text-2xl hover:text-blue-500 cursor-pointer" />
        </div>

        <div className="hidden md:flex items-center text-2xl">
          <AiOutlineBell className="mr-2 cursor-pointer hover:text-blue-500" />
          <AiOutlineUser className="mr-2 cursor-pointer hover:text-blue-500" />
        </div>

        <div className="p-2 md:p-4 md:hidden flex justify-center w-10 text-2xl">
          <button onClick={toggleNav}>
            <GiHamburgerMenu />
          </button>
        </div>
        
      </div>
      <div className="absolute z-20 bg-black text-white w-full" style={{ display: open ? 'block' : 'none' }}>
        <div className="flex flex-col text-base p-4 text-mywhite divide-y" >
        <Link href="/">
          <a className="mr-10  mt-5 px-5 border-b-2 border-transparent hover:border-black">
            Home
          </a>
        </Link>
        <Link href="/article">
          <a className="mr-10 mt-5 px-5 border-b-2 border-transparent hover:border-black">
            Blog
          </a>
        </Link>
        <Link href="/news">
          <a className="mr-10 mt-5 px-5 border-b-2 border-transparent hover:border-black">
            News
          </a>
        </Link>
        <Link href="/dev">
          <a className="mr-10 mt-5 px-5 border-b-2 border-transparent hover:border-black">
            Dev
          </a>
        </Link>
        <Link href="/cripto">
          <a className="mr-10 mt-5 px-5 border-b-2 border-transparent hover:border-black">
            Cripto
          </a>
        </Link>
        <Link href="/politica">
          <a className="mr-10 mt-5 px-5 border-b-2 border-transparent hover:border-black">
            Política
          </a>
        </Link>
        <Link href="/escritos">
          <a className="mr-10 mt-5 px-5 border-b-2 border-transparent hover:border-black">
            Escritos
          </a>
        </Link>
        </div>
      </div>

      <div className="hidden md:flex px-2 md:px-24 bg-white border-b border-black text-base">
        <Link href="/">
          <a className="mr-10  mt-5 px-5 border-b-2 border-transparent hover:border-black">
            Home
          </a>
        </Link>
        <Link href="/article">
          <a className="mr-10 mt-5 px-5 border-b-2 border-transparent hover:border-black">
            Blog
          </a>
        </Link>
        <Link href="/news">
          <a className="mr-10 mt-5 px-5 border-b-2 border-transparent hover:border-black">
            News
          </a>
        </Link>
        <Link href="/dev">
          <a className="mr-10 mt-5 px-5 border-b-2 border-transparent hover:border-black">
            Dev
          </a>
        </Link>
        <Link href="/cripto">
          <a className="mr-10 mt-5 px-5 border-b-2 border-transparent hover:border-black">
            Cripto
          </a>
        </Link>
        <Link href="/politica">
          <a className="mr-10 mt-5 px-5 border-b-2 border-transparent hover:border-black">
            Política
          </a>
        </Link>
        <Link href="/escritos">
          <a className="mr-10 mt-5 px-5 border-b-2 border-transparent hover:border-black">
            Escritos
          </a>
        </Link>
      </div>

      {children}

      <div className="bg-black text-white text-xl py-10 px-6 md:px-24 flex flex-col">
        <div>
          <Link href="/">
            <a className="text-white text-2xl flex align-baseline px-10 my-auto">
              <GiMonkey className="inline text-4xl mr-4" /> moonwatcher.dev
            </a>
          </Link>
        </div>

        <div className="grid text-center grid-cols-3 grid-rows-3 gap-2 mt-10 max-w-3xl  text-base">
              <Link href="/contacto">
                <span className=" text-green-600 cursor-pointer font-bold">
                ♦ Whatsapp ♦
                </span>
              </Link>
              
              <Link href="/contacto">
                <span className=" text-purple-600 cursor-pointer font-bold">
                ♦ Instagram ♦
                 </span>
              </Link>
              
              <Link href="/contacto">
                <span className=" text-blue-800 cursor-pointer font-bold">
                 ♦ Facebook ♦
                </span>
              </Link>
              
              <Link href="/contacto">
                <span className=" text-blue-900 cursor-pointer font-bold">
                  ♦ LinkedIn ♦
                </span>
              </Link>
              
              <Link href="/contacto">
                <span className=" text-gray-700 cursor-pointer font-bold">
                  ♦ Github ♦
                </span>
              </Link>

              <Link href="/contacto">
                <span className=" text-red-700 cursor-pointer font-bold">
               ♦ Gmail ♦
                </span>
              </Link>
        </div>

        <div className="mt-10 text-sm max-w-2xl">
          Gino Pietrobon is Moonwatcher. All rights reserved. &copy; &nbsp;{" "}
          {new Date().getFullYear()}
        </div>
      </div>
      
    </div>
  );
}
