import Head from "next/head";
import Layout from "../components/Layout";
import Prismic from "prismic-javascript";
import { Client } from "../prismic-configuration";
import BlogLayout from "../components/BlogLayout";

export default function Blog({blogs}) {
  return (
    <div>
      <Head>
        <title>¡moonwatcher's blog!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
          <BlogLayout tag="article" title="Blog" blogs={blogs} />          
      </Layout>
    </div>
  );
}

export async function getServerSideProps() {
    const blogs = await Client().query(
      Prismic.Predicates.at("document.tags", ["article"])
    );     
    
    return {
      props: {
        blogs: blogs        
      },
    };
  }
 
