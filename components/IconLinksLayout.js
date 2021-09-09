import React, { Fragment } from "react";
import Link from "next/dist/client/link";
import { BiCodeAlt } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
import { GiZeppelin } from "react-icons/gi";

export default function IconLinksLayout({
  state,
  searchText,
  codeText,
  zeppelinText,
}) {
  return (
    <Fragment>
      <div className={`${state}`}>
        <div className="flex">
          <Link href="/tecnoticiero">
            <div className="flex">
              <abbr title="¡Potente buscador de noticias!">
                <FiSearch className="mr-4 text-3xl hover:text-secundary cursor-pointer" />
              </abbr>
              {searchText}
            </div>
          </Link>
        </div>

        <div className="flex">
          <a className="flex" href="https://code-obrero.vercel.app" target="_blank" rel="noopener">
            <abbr title="codeObrero ¡Empezá hoy a programar!">
              <BiCodeAlt className="mr-4 text-3xl cursor-pointer hover:text-secundary" />
            </abbr>
            {codeText}
          </a>
        </div>

        <div className="flex">
          <a className="flex" href="https://devzeppelin.ar" target="_blank" rel="noopener">
            <abbr title="DevZeppelin. Webs 100% perfomance">
              <GiZeppelin className="mr-4 text-3xl cursor-pointer hover:text-secundary" />
            </abbr>
            {zeppelinText}
          </a>
        </div>
      </div>
    </Fragment>
  );
}
