import { RichText } from "prismic-reactjs";
import Link from "next/link";

export default function BlogLayout({ tag, title, blogs, extra }) {
  return (
    <div>
      <div className="flex">
        <div className="flex flex-col md:w-2/3 ml-4 md:ml-24 mr-4 md:mr-20 text-center">
          <h1 className=" text-2xl font-bold md:text-3xl text-center my-8 mb-4 md:mb-16">
            {title}
          </h1>

          <div className="md:hidden mb-2 block text-left mx-12">
            
            <h1 className=" text-base uppercase font-bold opacity-60 text-primary text-center">
              Índice
            </h1>

            {blogs.results.map((article, index) => (
              <div key={article.uid}>
                <Link href={`${article.tags[0]}/${article.uid}`}>
                  <span className="flex bold text-xs opacity-60 cursor-pointer">
                    •{RichText.render(article.data["blog-title"])}
                  </span>
                </Link>
              </div>
            ))}
            <hr />
            <div className="mt-4"> {extra} </div>
            
          </div>

          <div className="md:hidden mb-6">
            <h1 className=" text-xl uppercase">Entradas</h1>
            <p> 👇</p>
          </div>

          {blogs.results.map((article, index) => (
            <div className=" mb-4 md:mb-10" key={article.uid}>
              <Link href={`${tag}/${article.uid}`}>
                <h1 className="bold uppercase text-xl md:text-xl text-secundary cursor-pointer mb-4">
                  {RichText.render(article.data["blog-title"])}
                </h1>
              </Link>

              <Link href={`${tag}/${article.uid}`}>
                <img
                  className="w-2/3 flex  mx-auto cursor-pointer border-gray-800 border-2"
                  src={article.data["image"].url}
                  alt="img"
                />
              </Link>

              <h1 className="mt-5 mb-6 px-8">
                {" "}
                {RichText.render(article.data["preview-info"])}
              </h1>

              <hr className="mt-5" />
            </div>
          ))}
        </div>
        <div className="hidden md:flex flex-col w-1/3">
          
          <div className="mr-10 mt-16"> {extra} </div>

          <h1 className="text-xl uppercase font-bold text-primary mb-10 ml-24">
            Índice
          </h1>

          {blogs.results.map((article, index) => (
            <div key={article.uid}>
              <Link href={`${article.tags[0]}/${article.uid}`}>
                <h1 className="flex bold text-base mr-10 opacity-60 cursor-pointer">
                  {RichText.render(article.data["blog-title"])}
                </h1>
              </Link>

              <hr className="mt-5" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
