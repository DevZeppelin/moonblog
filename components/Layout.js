import React, { useState } from "react";
import IconLinksLayout from "./IconLinksLayout";

import { GiMonkey } from "react-icons/gi";
import { FiMail, FiTwitter } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";
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
          <a className="text-background text-2xl flex align-baseline px-2 md:px-10 my-auto hover:text-secundary">
            <GiMonkey className="inline text-4xl mr-4" /> moonwatcher.dev
          </a>
        </Link>

        <IconLinksLayout state={"hidden md:flex items-center"} />

        <div className="p-2 md:p-4 md:hidden flex justify-center w-10 text-2xl">
          <button onClick={toggleNav} aria-label="Hamburguer Button of Main Content">
            <GiHamburgerMenu />
          </button>
        </div>
      </div>
      <div
        className="absolute z-20 right-0 bg-primary text-background w-1/2 rounded-b-3xl"
        style={{ display: open ? "block" : "none" }}
      >
        <div className="flex text-right flex-col text-base p-2 text-background mb-5">
          <Link href="/">
            <a className="mr-2  mt-2 px-3 hover:border-black">Home 🏠</a>
          </Link>
          <Link href="/news">
            <a className="mr-2 mt-5 px-3 hover:border-black">
              Noticias &#128240;
            </a>
          </Link>
          <Link href="/blog">
            <a className="mr-2 mt-5 px-3 hover:border-black">Blog &#128053;</a>
          </Link>
          <Link href="/dev">
            <a className="mr-2 mt-5 px-3 hover:border-black">Programación &#128187;</a>
          </Link>
          <Link href="/cripto">
            <a className="mr-2 mt-5 px-3 hover:border-black">
              Criptomonedas &#128184;
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
            <a className="mr-2 mt-5 px-3 hover:border-black">Rock &#127928;</a>
          </Link>
          <Link href="/river">
            <a className="mr-2 mt-5 px-3 hover:border-black">River 🐔</a>
          </Link>
        </div>
      </div>

      <div className="hidden md:flex justify-center px-2 md:px-24 bg-backgroundSecundary text-background border-b border-black text-base">
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
            Programación
          </a>
        </Link>
        <Link href="/cripto">
          <a className="mr-6 mt-5 px-3 border-b-2 border-transparent hover:border-black">
            Criptomonedas
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
            River
          </a>
        </Link>
      </div>

      {children}

      <div className="md:hidden flex flex-col mx-auto">
        <p className="text-center font-bold py-3 bg-primary text-background">⭐ Recomendaciones ⭐</p>
        <br />
        <div>
          <IconLinksLayout
            state={"flex md:hidden text-center flex-col pl-6 text-primary text-sm align-middle"}
            searchText={<p className="my-auto font-bold hover:text-secundary">¡Potente buscador de noticias!</p>}
            codeText={<p className="my-auto font-bold hover:text-secundary">codeObrero ¡Empezá hoy a programar!</p>}
            zeppelinText={<p className="my-auto font-bold hover:text-secundary">DevZeppelin. Webs 100% perfomance</p>}
          />
        </div>
      </div>

      <div className="bg-primary text-white text-xl px-6 md:px-24 flex flex-col py-10 mt-8">
        
        <div
          id="contacto"
          className="flex space-x-5 md:space-x-10 text-2xl md:text-4xl justify-center"
        >
          <a
            href="https://api.whatsapp.com/send?phone=5492616708100"
            target="_blank"
            rel="noopener"
          >
            <button
              aria-label="go to my whatsapp"              
              alt="whatsapp-logo"
            >
              <FaWhatsapp className="hover:text-green-700" />
            </button>
          </a>

          <a href="https://www.instagram.com/moonwatcher.dev/"
            target="_blank"
            rel="noopener">
            <button
              aria-label="go to my instagram"
              
              alt="instagram-logo"
            >
              <FaInstagram className="hover:text-yellow-700" />
            </button>
          </a>

          <a href="https://www.twitter.com/moonwatcher73/"
          target="_blank"
          rel="noopener">
            <button
              aria-label="go to my twitter"
              
              alt="twitter-logo"
            >
              <FiTwitter className="hover:text-blue-500" />
            </button>
          </a>

          <a href="https://www.facebook.com/Gini77o"
          target="_blank"
          rel="noopener">
            <button
              aria-label="go to my fabecook"
              
              alt="facebook-logo"
            >
              <FaFacebook className="hover:text-blue-800" />
            </button>
          </a>

          <a href="https://github.com/DevZeppelin"
          target="_blank"
          rel="noopener">
            <button
              aria-label="go to my github"
              
              alt="github-logo"
            >
              <FaGithub className="hover:text-red-400" />
            </button>
          </a>

          <a href="https://www.linkedin.com/in/gino-pietrobon"
          target="_blank"
          rel="noopener">
            <button
              aria-label="go to my linked in"
              
              alt="linkedin-logo"
            >
              <FaLinkedinIn className="hover:text-yellow-400" />
            </button>
          </a>

          <a href="mailto:gino.b.pietrobon@gmail.com"
           target="_blank"
           rel="noopener">
            <button
              aria-label="send me a mail"
             
              alt="gmail-logo"
            >
              <FiMail className="hover:text-red-600" />
            </button>
          </a>
        </div>

        <div className="mt-10 text-sm max-w-2xl">
          Make with &#128153; in Mendoza, Argentina, by Gino Pietrobon. All
          rights reserved. &copy; &nbsp; {new Date().getFullYear()}
        </div>
      </div>
    </div>
  );
}