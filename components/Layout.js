import React, { useState } from "react";
import { AiOutlineBell, AiOutlineUser } from "react-icons/ai";
import { BiCodeAlt } from "react-icons/bi";
import { GiMonkey } from "react-icons/gi";
import { FiSearch, FiMail, FiTwitter } from "react-icons/fi";
import { GiHamburgerMenu, GiZeppelin } from "react-icons/gi";
import { FaWhatsapp, FaInstagram, FaFacebook, FaLinkedinIn, FaGithub, FaRegNewspaper } from "react-icons/fa"
import Link from "next/link";


export default function Layout({ children }) {
  const [open, setOpen] = useState(false);

  const toggleNav = (e) => {
    e.preventDefault();
    setOpen(!open);
  };

  return (
    <div>
      <div className="px-2 md:px-24 bg-primary text-white flex justify-between h-16">
        <Link href="/">
          <a className="text-white text-2xl flex align-baseline px-2 md:px-10 my-auto hover:text-secundary">
            <GiMonkey className="inline text-4xl mr-4" /> moonwatcher.dev
          </a>
        </Link>

        

        <div className="hidden md:flex items-center text-2xl">
          <BiCodeAlt className="mr-4 cursor-pointer hover:text-secundary" />
          <GiZeppelin className="mr-4 cursor-pointer hover:text-secundary" />
          <FaRegNewspaper className="mr-4 text-2xl hover:text-secundary cursor-pointer" />
        </div>

        <div className="p-2 md:p-4 md:hidden flex justify-center w-10 text-2xl">
          <button onClick={toggleNav}>
            <GiHamburgerMenu />
          </button>
        </div>
      </div>
      <div
        className="absolute z-20 right-0 bg-primary text-background w-2/5 rounded-b-3xl"
        style={{ display: open ? "block" : "none" }}
      >
        <div className="flex text-right flex-col text-base p-2 text-background mb-5">
          <Link href="/">
            <a className="mr-2  mt-2 px-3 hover:border-black">
              Home 🏠
            </a>
          </Link>
          <Link href="/news">
            <a className="mr-2 mt-5 px-3 hover:border-black">
              Noticias &#128240;
            </a>
          </Link>
          <Link href="/blog">
            <a className="mr-2 mt-5 px-3 hover:border-black">
              Blog &#128053;
            </a>
          </Link>
          <Link href="/dev">
            <a className="mr-2 mt-5 px-3 hover:border-black">
              Dev &#128187;
            </a>
          </Link>
          <Link href="/cripto">
            <a className="mr-2 mt-5 px-3 hover:border-black">
              Cripto$ &#128184;
            </a>
          </Link>
          <Link href="/politica">
            <a className="mr-2 mt-5 px-3 hover:border-black">
              Política &#128188;
            </a>
          </Link>
          <Link href="/escritos">
            <a className="mr-2 mt-5 px-3 hover:border-black">
              Escritos &#9997;
            </a>
          </Link>
          <Link href="/rock">
            <a className="mr-2 mt-5 px-3 hover:border-black">
              Rock &#127928;
            </a>
          </Link>
          <Link href="/river">
            <a className="mr-2 mt-5 px-3 hover:border-black">
              River 🐔
            </a>
          </Link>
        </div>
      </div>

      <div className="hidden md:flex justify-center px-2 md:px-24 bg-backgroundSecundary text-white border-b border-black text-base">
        <Link href="/">
          <a className="mr-6  mt-5 px-3 border-b-2 border-transparent hover:border-black">
            Home
          </a>
        </Link>
        <Link href="/news">
          <a className="mr-6 mt-5 px-3 border-b-2 border-transparent hover:border-black">
            Noticias
          </a>
        </Link>
        <Link href="/blog">
          <a className="mr-6 mt-5 px-3 border-b-2 border-transparent hover:border-black">
            Blog
          </a>
        </Link>
        <Link href="/dev">
          <a className="mr-6 mt-5 px-3 border-b-2 border-transparent hover:border-black">
            Dev
          </a>
        </Link>
        <Link href="/cripto">
          <a className="mr-6 mt-5 px-3 border-b-2 border-transparent hover:border-black">
            Cripto$
          </a>
        </Link>
        <Link href="/politica">
          <a className="mr-6 mt-5 px-3 border-b-2 border-transparent hover:border-black">
            Política
          </a>
        </Link>
        <Link href="/escritos">
          <a className="mr-6 mt-5 px-3 border-b-2 border-transparent hover:border-black">
            Escritos
          </a>
        </Link>
        <Link href="/rock">
          <a className="mr-6 mt-5 px-3 border-b-2 border-transparent hover:border-secundary">
            Rock
          </a>
        </Link>
        <Link href="/river">
          <a className="mr-6 mt-5 px-3 border-b-2 border-transparent hover:border-red-600">
            River Plate
          </a>
        </Link>
      </div>

      {children}

      <div className="bg-primary text-white text-xl py-10 px-6 md:px-24 flex flex-col">
        

        <div id="contacto" className="flex space-x-5 md:space-x-10 text-2xl md:text-4xl justify-center">
          
          <Link href="https://api.whatsapp.com/send?phone=5492616708100" target="_blank">
            
          <button aria-label="go to my whatsapp" target="_blank" rel="noopener" alt="whatsapp-logo">
            <FaWhatsapp className="hover:text-green-700" />
            </button>
          </Link>

          <Link href="https://www.instagram.com/moonwatcher.dev/" >
            <button aria-label="go to my instagram" target="_blank" rel="noopener" alt="instagram-logo">
              <FaInstagram className="hover:text-yellow-700" />
            </button>
          </Link>

          
          <Link href="https://www.twitter.com/moonwatcher73/" >
            <button aria-label="go to my twitter" target="_blank" rel="noopener" alt="twitter-logo">
              <FiTwitter className="hover:text-blue-500" />
            </button>
          </Link>

          <Link href="https://www.facebook.com/Gini77o">
          <button aria-label="go to my fabecook" target="_blank" rel="noopener" alt="facebook-logo"> 
            <FaFacebook className="hover:text-blue-800" />
            </button>
          </Link>

          <Link href="https://github.com/DevZeppelin">
          <button aria-label="go to my github" target="_blank" rel="noopener" alt="github-logo"> 
            <FaGithub className="hover:text-red-400" />
            </button>
          </Link>

          <Link href="https://www.linkedin.com/in/gino-pietrobon">
          <button aria-label="go to my linked in" target="_blank" rel="noopener" alt="linkedin-logo">
            <FaLinkedinIn className="hover:text-yellow-400" />
            </button>
          </Link>

          <Link href="mailto:gino.b.pietrobon@gmail.com">
           <button aria-label="send me a mail" target="_blank" rel="noopener" alt="gmail-logo"> 
            <FiMail className="hover:text-red-600" />
            </button>
          </Link>
        </div>

        <div className="mt-10 text-sm max-w-2xl">
          Make with &#128153; in  Mendoza, Argentina, by Gino Pietrobon. All rights reserved. &copy; &nbsp;{" "}
          {new Date().getFullYear()}
        </div>
      </div>
    </div>
  );
}
