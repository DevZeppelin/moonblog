import Head from "next/head";
import Layout from "../components/Layout";
import Prismic from "prismic-javascript";
import { Client } from "../prismic-configuration";
import BlogLayout from "../components/BlogLayout";
import Link from "next/dist/client/link";
import { BiSearchAlt } from "react-icons/bi";

export default function Escritos({ blogs }) {
  return (
    <div>
      <Head>
        <title>¡moonwatcher's news!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        
          <BlogLayout
            tag="news"
            title="¡Moon News! 👓"
            blogs={blogs}
            extra={
              <Link href="/tecnoticiero">
                <div className=" cursor-pointer text-4xl flex align-bottom justify-center mb-10 -mt-1.5 text-white bg-primary rounded-md py-2">
                  <span className=" text-lg md:text-2xl">
                    Ir al Buscador de Noticias •
                  </span>
                  <BiSearchAlt />{" "}
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
    Prismic.Predicates.at("document.tags", ["news"])
  );

  console.log(blogs);
  console.log(blogs.results[0].data);

  return {
    props: {
      blogs: blogs,
    },
  };
}
