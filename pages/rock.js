import Head from "next/head";
import Layout from "../components/Layout";
import Prismic from "prismic-javascript";
import { Client } from "../prismic-configuration";
import BlogLayout from "../components/BlogLayout";

export default function Rock({blogs}) {
  return (
    <div>
      <Head>
        <title>¡moonwatcher's rock!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
          <BlogLayout tag="rock" title="Rock" blogs={blogs} />          
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
 