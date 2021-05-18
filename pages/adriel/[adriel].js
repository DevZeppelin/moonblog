import { Client } from "../../prismic-configuration";
import Layout from "../../components/Layout";
import Head from "next/head";
import SlugLayout from "../../components/SlugLayout";

export default function AdrielSlug({ article }) {
  return (
    <div>
      <Head>
        <title>¡adriel's escritos!</title>
      </Head>
      <Layout>
        <SlugLayout article={article}/>
      </Layout>
    </div>
  );
}

// this gets called on each request

export async function getServerSideProps(context) {
  const article = await Client().getByUID("blog", context.query.adriel);

  return {
    props: {
      article: article,
    },
  };
}
