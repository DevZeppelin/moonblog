import Head from "next/head";
import Layout from "../components/Layout";
import Prismic from "prismic-javascript";
import { Client } from "../prismic-configuration";
import BlogLayout from "../components/BlogLayout";

export default function Blog({blogs, newss}) {
  return (
    <div>
      <Head>
        <title>¡moonwatcher's blog!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
          <BlogLayout tag="article" title="Blog" blogs={blogs} newss={newss} />          
      </Layout>
    </div>
  );
}

export async function getServerSideProps() {
    const blogs = await Client().query(
      Prismic.Predicates.at("document.tags", ["article"])
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
 
