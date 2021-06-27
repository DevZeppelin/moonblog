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
        <div className="flex mb-12 flex-wrap-reverse md:flex-wrap mx-auto my-auto mt-16 md:mt-0">
          <div className="flex flex-col w-4/5 md:w-1/2 mt-10 ml-8 md:ml-24 md:mt-8">
            <div className="space-y-4 text-center">
              <div className=" pt-8 space-y-5">
                <h1 className=" w-full md:w-2/3 text-center text-2xl uppercase font-bold opacity-80 ml-2 md:ml-24">
                  ¡ Bienvenido a{" "}
                  <span className="text-secundary">moonblog</span> !
                </h1>
                <h2 className="text-xl">
                  Soy <b>Gino</b> y ésta es mi Web, donde encontrarás cosas
                  como:
                </h2>
                <div className="md:grid grid-cols-2 gap-2">
                  <Link href="/dev">
                    <div className="indexItem space-y-2 p-6 rounded-lg cursor-pointer">
                      <span>💻</span>
                      <p>
                        Camino a seguir para convertirte en un{" "}
                        <i>programador</i>:
                      </p>
                      <button className="bg-primary text-white py-1 px-5 uppercase rounded-md cursor-pointer font-bold hover:underline">
                        Blog Dev
                      </button>
                    </div>
                  </Link>

                  <Link href="/news">
                    <div className="indexItem space-y-2 p-6 rounded-lg cursor-pointer">
                      <span>📻</span>
                      <p>
                        <i>Noticiero tecnológocio</i> con un buscador de
                        noticias súper-veloz:
                      </p>
                      <button className="transform hover:underline bg-primary text-white py-1 px-5 uppercase rounded-md cursor-pointer font-bold">
                        Tecnoticiero
                      </button>
                    </div>
                  </Link>

                  <Link href="/cripto">
                    <div className="indexItem space-y-2 p-6 rounded-lg cursor-pointer">
                      <span>💰</span>
                      <p>
                        Sección del Blog enfocada en <i>Bitcoin</i> y{" "}
                        <i>Criptomonedas</i>:
                      </p>
                      <button className="bg-primary text-white py-1 px-5 uppercase rounded-md cursor-pointer font-bold hover:underline">
                        Criptomonedas
                      </button>
                    </div>
                  </Link>
                  <Link href="/escritos">
                    <div className="indexItem space-y-2 p-6 rounded-lg cursor-pointer">
                      <span>📜</span>
                      <p>
                        Textos entretenidos escritos por mi y por mi hermano
                        Adriel:
                      </p>
                      <button className="bg-primary text-white py-1 px-5 uppercase rounded-md cursor-pointer font-bold hover:underline">
                        Escritos
                      </button>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/3 flex flex-auto items-center justify-center align-middle mr-6 ">
            <img
              className="flex my-auto"
              src="logo.svg"
              alt="img"
              width="240"
              height="240"
            />
          </div>
        </div>
        <style jsx>{`
          .indexItem:hover {
            border: solid 1px #13a89e;
            box-shadow: 0px 0px 10px #0e364e;
            background-color: whitesmoke;
          }
        `}</style>
      </Layout>
    </div>
  );
}
