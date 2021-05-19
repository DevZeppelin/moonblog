import Head from "next/head";
import Layout from "../components/Layout";
import Prismic from "prismic-javascript";
import { Client } from "../prismic-configuration";
import BlogLayout from "../components/BlogLayout";
import { FiUserPlus } from "react-icons/fi";
import Link from "next/link";

export default function Escritos({ blogs }) {
  return (
    <div>
      <Head>
        <title>¡moonwatcher's escritos!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <BlogLayout
          tag="escritos"
          title="Moonwatcher's Escritos ✍"
          blogs={blogs}
          extra={
            <Link href="/adriel">
              <div className="flex justify-center mb-10 py-2 bg-primary rounded-md">
                <div className="md:text-xl cursor-pointer text-gray-300">
                  
                  <p>+ Escritos de Adriel</p> 
                  <hr />
                </div>
              </div>
            </Link>
          }
        />
      </Layout>
    </div>
  );
}

export async function getServerSideProps() {
  const blogs = await Client().query(
    Prismic.Predicates.at("document.tags", ["escritos"])
  );

  console.log(blogs);

  return {
    props: {
      blogs: blogs,
    },
  };
}
