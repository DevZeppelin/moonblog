import { RichText } from "prismic-reactjs";
import Link from "next/link";


export default function SlugLayout({ article }) {
  return (
    <div className="w-5/6 md:w-2/3 mx-auto">
      <h1 className=" text-xl md:text-3xl text-center uppercase font-bold text-secundary my-10">
        {RichText.render(article.data["blog-title"])}
      </h1>
      <img
        className="shadow-xl text-center mb-10 md:mb-20 mx-auto border-gray-800 border-2"
        src={article.data["image"].url}
        alt="image"
      />
      <div className="text-base md:text-lg opacity-75 space-y-2 md:space-y-4">
        {RichText.render(article.data["blog-rich-text"])}
      </div>
      <Link href={'/'}>
        <div className="flex justify-center">
          <button className="bg-black text-white py-3 px-10 my-4 text-lg uppercase">
            {" "}
            Home &nbsp; 👈
          </button>
        </div>
      </Link>
    </div>
  );
}
