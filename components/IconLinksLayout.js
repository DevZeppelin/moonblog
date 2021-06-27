import React, { Fragment } from "react";
import Link from "next/dist/client/link";
import { BiCodeAlt } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
import { GiZeppelin } from "react-icons/gi";

export default function IconLinksLayout({ state, searchText, codeText, zeppelinText }) {
  return (
    <Fragment>
      <div className={`${state}`}>
        <div className="flex">
            <abbr  title="¡Potente buscador de noticias!">
              <Link href="/tecnoticiero">
                <FiSearch className="mr-4 text-3xl hover:text-secundary cursor-pointer" />
              </Link>
            </abbr>
              {searchText}
        </div>


        <div className="flex" >
            <abbr title="codeObrero ¡Empezá hoy a programar!">
              <a href="https://code-obrero.vercel.app" target="_blank">
                <BiCodeAlt className="mr-4 text-3xl cursor-pointer hover:text-secundary" />
              </a>
            </abbr>
              {codeText}
        </div>

        <div className="flex">
            <abbr  title="DevZeppelin. Webs 100% perfomance">
              <a href="https://dev-zeppelin.vercel.app" target="_blank">
                <GiZeppelin className="mr-4 text-3xl cursor-pointer hover:text-secundary" />
              </a>
            </abbr>
              {zeppelinText}
        </div>
      </div>
    </Fragment>
  );
}
