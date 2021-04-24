import React, { useState } from "react";
import { AiOutlineBell, AiOutlineUser } from "react-icons/ai";
import { GiMonkey } from "react-icons/gi";
import { FiSearch, FiMail } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaWhatsapp, FaInstagram, FaFacebook, FaLinkedinIn, FaGithub  } from "react-icons/fa"
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
          <a className="text-white text-2xl flex align-baseline px-2 md:px-10 my-auto hover:text-secundary">
            <GiMonkey className="inline text-4xl mr-4" /> moonwatcher.dev
          </a>
        </Link>

        <div className="hidden md:flex items-center w-1/3 text-lg">
          <input
            type="text"
            className="bg-transparent border-b w-full border-white outline-none"
          />
          <FiSearch className="ml-8 text-2xl hover:text-secundary cursor-pointer" />
        </div>

        <div className="hidden md:flex items-center text-2xl">
          <AiOutlineBell className="mr-2 cursor-pointer hover:text-secundary" />
          <AiOutlineUser className="mr-2 cursor-pointer hover:text-secundary" />
        </div>

        <div className="p-2 md:p-4 md:hidden flex justify-center w-10 text-2xl">
          <button onClick={toggleNav}>
            <GiHamburgerMenu />
          </button>
        </div>
      </div>
      <div
        className="absolute z-20 right-0 bg-black text-white w-1/2"
        style={{ display: open ? "block" : "none" }}
      >
        <div className="flex text-right flex-col text-base p-2 text-white divide-y mb-5">
          <Link href="/">
            <a className="mr-2  mt-2 px-5 border-b-2 border-transparent hover:border-black">
              Home
            </a>
          </Link>
          <Link href="/news">
            <a className="mr-2 mt-5 px-5 border-b-2 border-transparent hover:border-black">
              Noticias
            </a>
          </Link>
          <Link href="/article">
            <a className="mr-2 mt-5 px-5 border-b-2 border-transparent hover:border-black">
              Blog
            </a>
          </Link>
          <Link href="/dev">
            <a className="mr-2 mt-5 px-5 border-b-2 border-transparent hover:border-black">
              Dev
            </a>
          </Link>
          <Link href="/cripto">
            <a className="mr-2 mt-5 px-5 border-b-2 border-transparent hover:border-black">
              Cripto
            </a>
          </Link>
          <Link href="/politica">
            <a className="mr-2 mt-5 px-5 border-b-2 border-transparent hover:border-black">
              Política
            </a>
          </Link>
          <Link href="/escritos">
            <a className="mr-2 mt-5 px-5 border-b-2 border-transparent hover:border-black">
              Escritos
            </a>
          </Link>
        </div>
      </div>

      <div className="hidden md:flex px-2 md:px-24 bg-white border-b border-black text-base">
        <Link href="/">
          <a className="mr-10  mt-5 px-3 border-b-2 border-transparent hover:border-black">
            Home
          </a>
        </Link>
        <Link href="/news">
          <a className="mr-10 mt-5 px-3 border-b-2 border-transparent hover:border-black">
            Noticias
          </a>
        </Link>
        <Link href="/article">
          <a className="mr-10 mt-5 px-3 border-b-2 border-transparent hover:border-black">
            Blog
          </a>
        </Link>
        <Link href="/dev">
          <a className="mr-10 mt-5 px-3 border-b-2 border-transparent hover:border-black">
            Dev
          </a>
        </Link>
        <Link href="/cripto">
          <a className="mr-10 mt-5 px-3 border-b-2 border-transparent hover:border-black">
            Cripto
          </a>
        </Link>
        <Link href="/politica">
          <a className="mr-10 mt-5 px-3 border-b-2 border-transparent hover:border-black">
            Política
          </a>
        </Link>
        <Link href="/escritos">
          <a className="mr-10 mt-5 px-3 border-b-2 border-transparent hover:border-black">
            Escritos
          </a>
        </Link>
      </div>

      {children}

      <div className="bg-black text-white text-xl py-10 px-6 md:px-24 flex flex-col">
        <div>
          <Link href="/">
            <a className="text-white text-lg md:text-2xl flex justify-start px-10 my-auto hover:text-secundary">
              <GiMonkey className="inline text-4xl mr-4 " /> moonwatcher.dev
            </a>
          </Link>
        </div>

        <div className="flex space-x-5 md:space-x-10 mt-10 max-w-3xl text-2xl md:text-4xl justify-center">
          
          <Link href="https://api.whatsapp.com/send?phone=5492616708100" target="_blank">
            
          <button target="_blank" rel="noopener" alt="whatsapp-logo">
            <FaWhatsapp className="hover:text-green-700" />
            </button>
          </Link>

          <Link href="https://www.instagram.com/moonwatcher.dev/" >
            <button target="_blank" rel="noopener" alt="instagram-logo">
              <FaInstagram className="hover:text-indigo-700" />
            </button>
          </Link>

          <Link href="https://www.facebook.com/Gini77o">
          <button target="_blank" rel="noopener" alt="facebook-logo"> 
            <FaFacebook className="hover:text-blue-700" />
            </button>
          </Link>

          <Link href="https://github.com/DevZeppelin">
          <button target="_blank" rel="noopener" alt="github-logo"> 
            <FaGithub className="hover:text-pink-700" />
            </button>
          </Link>

          <Link href="https://www.linkedin.com/in/gino-pietrobon">
          <button target="_blank" rel="noopener" alt="linkedin-logo">
            <FaLinkedinIn className="hover:text-yellow-400" />
            </button>
          </Link>

          <Link href="mailto:gino.b.pietrobon@gmail.com">
           <button target="_blank" rel="noopener" alt="gmail-logo"> 
            <FiMail className="hover:text-red-600" />
            </button>
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
