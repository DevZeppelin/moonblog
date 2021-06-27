import { Fragment, useState } from "react";
import Router from "next/router";
import Layout from "../components/Layout";
import { useRouter } from "next/router";
import Head from "next/dist/next-server/lib/head";

export default function News({ news }) {
  const router = useRouter();

  const [value, setValue] = useState({
    text: "bitcoin",
    coolMsg: "",
  });

  const { text, coolMsg } = value;

  const handleChange = (name) => (e) => {
    setValue({ ...value, [name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Router.push(`/news/?searchTerm=${text}/#notice-position`);
  };

  const searchFormNews = () => (
    <Fragment>
      <div>
        <div className="my-10 text-center">
          <h1 className=" text-2xl md:text-3xl text-center uppercase font-bold text-secundary">
          Buscador de noticias 🔎
          </h1>
          <p className="opacity-40">
            (Temporalmente en inglés)
            <br />
            Podés usar el traductor de tu navegador para traducirlas
            automáticamente
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4 pb-6 text-center">
          <div className="flex flex-col">
            <div className="text-center">
              <p className="text-xl">
                ¿De qué tema queres tener <b>noticias</b>?
              </p>
              <input
                className="m-6 p-2 border-2 border-primary rounded-md w-44"
                type="text"
                value={text}
                onChange={handleChange("text")}
              />
              <button className="bg-primary text-white rounded-md w-28 align-middle">
                Search
              </button>
            </div>
          </div>
        </form>
      </div>
    </Fragment>
  );
  const searchFormCoolMsg = () => (
    <Fragment>
      <div className="text-center">
        <form onSubmit={handleSubmit} className="space-y-4 pt-16 mx-6">
          <p>
            &#9889; <b>¡Esta página es súper rápida!</b> ¡Mirá este pequeño
            truco! Cuando escribís algo en este cuadro de texto se ve reflejado
            inmediatamente en el documento &#9889;
          </p>
          <div className="text-4xl text-indigo-600">{coolMsg}</div>
          <input
            type="text"
            placeholder="Tus letras en tiempo real"
            onChange={handleChange("coolMsg")}
            className="m-6 p-2 border-2 border-primary rounded-md"
          />
        </form>
      </div>
    </Fragment>
  );

  console.log(news);

  return (
    <div>
      <Head>
        <title>¡moonwatcher's news!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout
        children={
          <div className="w-5/6 md:w-2/3 mx-auto">
            {searchFormNews()}
            <hr />

            {news.map((n, i) => (
              <p key={i} className="p-2">
                <a
                  href={n.url}
                  target="_blank"
                  className="text-xl font-bold text-primary"
                >
                  {i + 1 + ". "}
                </a>
                <a href={n.url} target="_blank">
                  {n.title}
                </a>{" "}
                <span className="opacity-40">({n.created_at.substring(8, 10)}/{n.created_at.substring(5, 7)}/
                {n.created_at.substring(0, 4)})</span>
              </p>
            ))}
            {searchFormCoolMsg()}

            <div className="flex justify-center">
              <button
                className="bg-primary text-white py-3 px-10 my-4 text-lg uppercase rounded-md"
                onClick={() => router.back()}
              >
                Volver 👈
              </button>
            </div>
          </div>
        }
      ></Layout>
    </div>
  );
}

News.getInitialProps = async ({ query }) => {
  let news;
  try {
    const res = await fetch(
      `https://hn.algolia.com/api/v1/search?query=${
        query.searchTerm || "bitcoin"
      }`
    );
    news = await res.json();
    console.log(news);
  } catch (err) {
    console.log("ERROR", err);
    news = [];
  }
  return {
    news: news.hits,
  };
};
