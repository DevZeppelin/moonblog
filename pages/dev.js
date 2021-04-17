import Head from "next/head";
import Layout from "../components/Layout";
import Prismic from "prismic-javascript";
import { Client } from "../prismic-configuration";
import BlogLayout from "../components/BlogLayout";

export default function Dev({blogs}) {
  return (
    <div>
      <Head>
        <title>¡moonwatcher's dev!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
          <BlogLayout tag="dev" title="Dev" blogs={blogs} />          
      </Layout>
    </div>
  );
}

export async function getServerSideProps() {
    const blogs = await Client().query(
      Prismic.Predicates.at("document.tags", ["dev"])
    );  
    
    return {
      props: {
        blogs: blogs     
      },
    };
  }
 