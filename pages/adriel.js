import Head from "next/head";
import Layout from "../components/Layout";
import Prismic from "prismic-javascript";
import { Client } from "../prismic-configuration";
import BlogLayout from "../components/BlogLayout";
import Link from "next/link"

export default function Escritos({ blogs }) {
  return (
    <div>
      <Head>
        <title>¡adriel's escritos!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <BlogLayout
          tag="escritos"
          title="Escritos de mi hermano Adriel 📝"
          blogs={blogs}
        />
        <Link href={"/escritos"}>
          <div className="flex justify-center">
            <button className="bg-primary text-white py-3 px-10 my-4 text-lg uppercase">
              {" "}
              Volver a Escritos 👈
            </button>
          </div>
        </Link>
      </Layout>
    </div>
  );
}

export async function getServerSideProps() {
  const blogs = await Client().query(
    Prismic.Predicates.at("document.tags", ["adriel"])
  );

  console.log(blogs);

  return {
    props: {
      blogs: blogs,
    },
  };
}
