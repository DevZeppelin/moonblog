import Link from "next/link"
import Head from "next/head";
import Layout from "../components/Layout";
import Prismic from "prismic-javascript";
import { Client } from "../prismic-configuration";
import BlogLayout from "../components/BlogLayout";
import { AiFillFacebook } from "react-icons/ai";

export default function Rock({ blogs }) {
  return (
    <div>
      <Head>
        <title>¡moonwatcher's rock!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <BlogLayout
          tag="rock"
          title="Alma Rockera 100% 🎸"
          blogs={blogs}
          extra={
            <Link href="https://www.facebook.com/almarockera100">
              <a target="_blank">
                <div className="text-4xl flex align-bottom justify-center pb-10 -mt-1.5 text-blue-600">
                  <span className=" text-lg md:text-2xl">Ir a Facebook Oficial •</span>
                  <AiFillFacebook />{" "}
                </div>
              </a>
            </Link>
          }
        />
      </Layout>
    </div>
  );
}

export async function getServerSideProps() {
  const blogs = await Client().query(
    Prismic.Predicates.at("document.tags", ["rock"])
  );

  return {
    props: {
      blogs: blogs,
    },
  };
}
