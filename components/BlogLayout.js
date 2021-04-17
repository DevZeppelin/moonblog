import { RichText } from "prismic-reactjs";
import Link from "next/link";

export default function BlogLayout ({tag, title, blogs, newss}) {
  return (
    <div>             
        <div className="flex">
          <div className="flex flex-col md:w-2/3 ml-4 md:ml-24 mr-4 md:mr-20 text-center">
        <h1 className="text-3xl text-center my-8 mb-16">Moonwatcher's {title}</h1>
            {blogs.results.map((article, index) => (
              <div className="mb-10" key={article.uid}>
                <Link href={`${tag}/${article.uid}`}>
                  <h1 className="bold text-3xl text-blue-500 cursor-pointer mb-4">
                    {RichText.render(article.data["blog-title"])}
                  </h1>
                </Link>

                <img
                  className="w-2/3 flex  mx-auto border-gray-800 border-2"
                  src={article.data["image"].url}
                  alt="img"
                />

                <h1 className="mt-5 mb-6 px-8">
                  {" "}
                  {RichText.render(article.data["preview-info"])}
                </h1>

                <hr className="mt-5" />

              </div>
            ))}
          </div>
          <div className="hidden md:flex flex-col w-1/3">
            <h1 className="text-xl uppercase font-bold opacity-50 my-10 ml-24">
              Noticias
            </h1>

            {newss.results.map((article, index) => (
              <div key={article.uid}>
                <Link href={`news/${article.uid}`}>
                  <h1 className="bold text-base mr-10 text-blue-500 cursor-pointer">
                    {RichText.render(article.data["news-title"])}
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