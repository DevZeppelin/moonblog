import Head from "next/head";
import Layout from "../components/layout";
import Prismic from "prismic-javascript";
import { Client } from "../prismic-configuration";
import BlogLayout from "../components/BlogLayout";

export default function Politica({blogs, newss}) {
  return (
    <div>
      <Head>
        <title>¡moonwatcher's politics!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
          <BlogLayout tag="politica" title="Política" blogs={blogs} newss={newss} />          
      </Layout>
    </div>
  );
}

export async function getServerSideProps() {
    const blogs = await Client().query(
      Prismic.Predicates.at("document.tags", ["politica"])
    );
  
    const newss = await Client().query(
      Prismic.Predicates.at("document.type", "news")
    );
    
    return {
      props: {
        blogs: blogs,
        newss: newss,     
      },
    };
  }
 