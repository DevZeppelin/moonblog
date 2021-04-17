import { RichText } from "prismic-reactjs";
import { Client } from "../../prismic-configuration";
import Layout from "../../components/Layout";
import Link from "next/link";
import Head from "next/head"

export default function New({ article }) {
  return (
    
    
    <div>
        <Head>
            <title>¡moonwatcher's news!</title>            
        </Head>
        <Layout>
          <div className="w-2/3 mx-auto text-center">
            <h1 className="text-3xl uppercase font-bold opacity-50 my-10">
              {RichText.render(article.data["news-title"])}
            </h1>
            <img
              className="shadow-xl mb-20 mx-auto"
              src={article.data["image"].url}
              alt="image"
            />
            <div className="text-lg opacity-75 space-y-4">
              {RichText.render(article.data["news-rich-text"])}
            </div>
            <Link href="/">
              <button
                className="bg-black text-white py-3 px-10 my-4 text-lg uppercase"
              >
                {" "}
                Back to home &nbsp; 👈
              </button>
            </Link>
          </div>
        </Layout>
    </div>
  );
}

// this gets called on each request

export async function getServerSideProps(context) {
  const article = await Client().getByUID("news", context.query.news);

  return {
    props: {
      article: article,
    },
  };
}
