import Head from "next/head";
import Layout from "../components/Layout";
import Prismic from "prismic-javascript";
import { Client } from "../prismic-configuration";
import BlogLayout from "../components/BlogLayout";

export default function Blog({blogs}) {

  console.log(blogs.data)

  return (
    <div>
      <Head>
        <title>¡moonwatcher's blog!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
          <BlogLayout tag="blog" title="Moon-Blog ⭐" blogs={blogs} />          
      </Layout>
    </div>
  );
}

export async function getServerSideProps() {
    const blogs = await Client().query(
      Prismic.Predicates.at("document.tags", ["blog"])
      );     
          
    return {
      props: {
        blogs: blogs        
      },
    };

  }
 
