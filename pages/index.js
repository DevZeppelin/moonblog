import Head from "next/head";
import Layout from "../components/Layout";
import Link from "next/link";


export default function Home({ blogs }) {
  return (
    <div>
      <Head>
        <title>¡moonwatcher baby!</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="UTF-8" />
        <meta
          name="description"
          content="Moonwatcher Blog. Artículos, Noticias, Criptomonedas, Escritos, Blog de programación (dev) y Artículos sobre política"
        />
        <meta
          name="keywords"
          content="dev,crypto,news,programacion,noticias,criptomonedas,politica,articles,articulos,blog,escritos,moonwatcher,blog"
        />
        <meta name="author" content="Gino Pietrobon" />
      </Head>
      <Layout>
        <div className="flex">
          <h1 className=" w-full md:w-2/3 text-center text-2xl uppercase font-bold opacity-80 mt-16 ml-2 md:ml-24">
          ¡ Bienvenido a <span className="text-secundary">moonblog</span> !
          </h1>
        </div>
        <div className="flex mb-12 flex-wrap-reverse md:flex-wrap mx-auto my-auto">
          <div className="flex flex-col w-4/5 md:w-1/2 my-10 ml-8 md:ml-24  mt-8">
            <div className="space-y-4">
              <p>
                Soy <b>Gino</b>. Técnico Universitario en Redes y
                Telecomunicaciones, estudiante de programación y amante de la
                tecnología.
              </p>
              <p>
                Te invito a recorrer mi <Link href="/article"><strong className="uppercase cursor-pointer font-bold text-secundary hover:underline">Blog</strong></Link>, lugar donde escribo algunas de mis ideas. Leyendo mis <Link href="/news"><strong className="uppercase cursor-pointer font-bold text-secundary hover:underline">Noticias</strong></Link> estarás al tanto de lo
                que ocurre en el mundo tecnológico. También hay una sección
                exclusiva para <Link href="/dev"><strong className="uppercase cursor-pointer font-bold text-secundary hover:underline">Programadores</strong></Link> y otra en donde se habla de
                Bitcoin y <Link href="/cripto"><strong className="uppercase cursor-pointer font-bold text-secundary hover:underline">Criptomonedas</strong></Link>.
              </p>
              <p>
                Si te das una vuelta, espero tu comentario, opinión, aporte o
                consejo.
              </p>
              <p>
                En el footer tenés mi{" "}
                <Link href="#contacto">
                  <span className="text-primary cursor-pointer font-bold">
                    Contacto
                  </span>
                </Link>
              </p>
              
            </div>
          </div>
          <div className="md:w-1/3 flex flex-auto items-center justify-center align-middle mr-6 ">
            <img className="flex my-auto" src="logo.svg" alt="img" width="240" height="240" />
          </div>
        </div>
      </Layout>
    </div>
  );
}
