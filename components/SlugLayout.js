import { RichText } from "prismic-reactjs";
import Link from "next/link";
import { useRouter } from "next/router";

export default function SlugLayout({ article }) {
  const router = useRouter();
  const date = article.data["blog-date"];

  console.log(article.data);

  return (
    <div className="w-5/6 md:w-2/3 mx-auto">
      
      <h1 className=" text-xl md:text-3xl text-center uppercase font-bold text-lowContrast my-12 md:my-16">
        {RichText.render(article.data["blog-title"])}
      </h1>
      <div className="text-base text-center md:text-lg opacity-50 space-y-4 md:space-y-4 ">
        Redactado el día {date[8] + date[9]} del mes {date[5] + date[6]} del año{" "}
        {date[0] + date[1] + date[2] + date[3]}
      </div>
      <img
        className="shadow-xl text-center mb-10 md:mb-15 mx-auto border-gray-800 border-2"
        src={article.data["image"].url}
        alt="image"
      />
      <div className="text-base md:text-lg  space-y-8 md:space-y-8">
        {RichText.render(article.data["blog-rich-text"])}
      </div>

      <div className="flex justify-center">
        <button
          className="bg-primary text-white py-3 px-10 my-4 text-lg uppercase rounded-md"
          onClick={() => router.back()}
        >
          Volver 👈
        </button>
      </div>
    </div>
  );
}
