import Head from "next/head";
import Layout from "../components/Layout";
import Prismic from "prismic-javascript";
import { Client } from "../prismic-configuration";
import BlogLayout from "../components/BlogLayout";

export default function Escritos({blogs}) {
  return (
    <div>
      <Head>
        <title>¡moonwatcher's news!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
          <BlogLayout tag="news" title="News" blogs={blogs} />          
      </Layout>
    </div>
  );
}

export async function getServerSideProps() {
    const blogs = await Client().query(
      Prismic.Predicates.at("document.tags", ["news"])
    );

    console.log(blogs)
    console.log(blogs.results[0])
    console.log(blogs.results[1]) 
    
    
    return {
      props: {
        blogs: blogs,        
      },
    };
  }
 
