import Head from "next/head";
import Layout from "../components/layout";
import Link from "next/link";

export default function Home({ blogs, newss }) {
  return (
    <div>
      <Head>
        <title>¡moonwatcher baby!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="flex">
          <h1 className=" w-full md:w-2/3 text-center text-2xl uppercase font-bold opacity-50 mt-16 ml-2 md:ml-24">
            ¡Bienvenidos a mi sitio!
          </h1>
        </div>
        <div className="flex mb-12 flex-wrap-reverse mx-auto">
          <div className="flex flex-col w-4/5 md:w-1/2 my-10 ml-8 md:ml-24  mt-8">
            <div className="space-y-4">
              <p>
                Soy <b>Gino</b>. Técnico Universitario en Redes y
                Telecomunicaciones, estudiante de programación y amante de la
                tecnología.
              </p>
              <p>
                Te invito a recorrer mi <i>Blog</i> aver si te parece
                interesante. Leyendo mis <i>Noticias</i> estarás al tanto de lo
                que ocurre en el mundo tecnológico. También hay una sección
                exclusiva para <i>programadores</i> y otra en donde se habla de
                Bitcoin y <i>Criptomonedas</i>.
              </p>
              <p>
                Si te das una vuelta, espero tu comentario, opinión, aporte o
                consejo.
              </p>
              <p>
                En el footer tenés mi{" "}
                <Link href="/contacto">
                  <span className="text-blue-700 cursor-pointer font-bold">
                    Contacto
                  </span>
                </Link>
              </p>
              <p className="text-center">
               <Link href="/article">
                  <button className=" bg-blue-700 text-white cursor-pointer font-bold p-4 border-gray-800 border-2  mt-10 rounded-sm">
                    ¡Ir al blog!
                  </button>
                </Link>
                </p>
            </div>
            
          </div>
          <div className="w-full md:w-1/3 flex justify-center">
            <img
              src="logo.png"
              alt="img"
            />
          </div>
        </div>
      </Layout>
    </div>
  );
}
