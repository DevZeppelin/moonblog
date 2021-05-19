import Head from "next/head";
import Layout from "../components/Layout";
import Prismic from "prismic-javascript";
import { Client } from "../prismic-configuration";
import BlogLayout from "../components/BlogLayout";

export default function River({blogs}) {
  return (
    <div>
      <Head>
        <title>River Plate ♥</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
          <BlogLayout tag="rock" title="Blog de River Plate 🐓" blogs={blogs} />          
      </Layout>
    </div>
  );
}

export async function getServerSideProps() {
    const blogs = await Client().query(
      Prismic.Predicates.at("document.tags", ["river"])
    );     

       
    return {
      props: {
        blogs: blogs,
        
      },
    };
  }
 