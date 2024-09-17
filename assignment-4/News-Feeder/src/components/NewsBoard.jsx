import { useContext } from "react";
import { NewsContext } from "../context/contexts";

function NewsBoard() {
  const { newsData } = useContext(NewsContext);
  console.log(newsData?.articles);
  console.log(newsData?.result);
  return (
    <main className="my-10 lg:my-14">
      {newsData?.articles ? newsData?.articles?.map((article) => (
        <div
          key={article.id}
          className="container mx-auto grid grid-cols-12 gap-8"
        >
          {/* <!-- left --> */}
          <div className="col-span-12 grid grid-cols-12 gap-6 self-start xl:col-span-8">
            {/* <!-- news item --> */}
            <div className="col-span-12 grid grid-cols-12 gap-4">
              {/* <!-- info --> */}
              <div className="col-span-12 lg:col-span-4">
                <a href="#">
                  <h3 className="mb-2.5 text-2xl font-bold lg:text-[28px]">
                    {article.title}
                  </h3>
                </a>
                <p className="text-base text-[#5C5955]">
                  {article.description}
                </p>
                <p className="mt-5 text-base text-[#5C5955]">1 hour ago</p>
              </div>
              {/* <!-- thumb --> */}
              <div className="col-span-12 lg:col-span-8">
                <img className="w-full" src={article.urlToImage} alt="thumb" />
                <p className="mt-5 text-base text-[#5C5955]">
                  Illustration: Karolis Strautniekas
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-12 self-start xl:col-span-4">
            <div className="space-y-6 divide-y-2 divide-[#D5D1C9]">
              <div className="col-span-12 mb-6 md:col-span-8">
                <img className="w-full" src={article.urlToImage} alt="thumb" />
                {/* <!-- info --> */}
                <div className="col-span-12 mt-6 md:col-span-4">
                  <a href="#">
                    <h3 className="mb-2.5 text-xl font-bold lg:text-[20px]">
                      {article.title}
                    </h3>
                  </a>
                  <p className="text-base text-[#292219]">
                    Self-driving cars were meant to be its future
                  </p>
                  <p className="mt-5 text-base text-[#94908C]">
                    {article.publishedAt}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )) : newsData?.result?.map((article) => (
        <div
          key={article.id}
          className="container mx-auto grid grid-cols-12 gap-8"
        >
          {/* <!-- left --> */}
          <div className="col-span-12 grid grid-cols-12 gap-6 self-start xl:col-span-8">
            {/* <!-- news item --> */}
            <div className="col-span-12 grid grid-cols-12 gap-4">
              {/* <!-- info --> */}
              <div className="col-span-12 lg:col-span-4">
                <a href="#">
                  <h3 className="mb-2.5 text-2xl font-bold lg:text-[28px]">
                    {article.title}
                  </h3>
                </a>
                <p className="text-base text-[#5C5955]">
                  {article.description}
                </p>
                <p className="mt-5 text-base text-[#5C5955]">1 hour ago</p>
              </div>
              {/* <!-- thumb --> */}
              <div className="col-span-12 lg:col-span-8">
                <img className="w-full" src={article.urlToImage} alt="thumb" />
                <p className="mt-5 text-base text-[#5C5955]">
                  Illustration: Karolis Strautniekas
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-12 self-start xl:col-span-4">
            <div className="space-y-6 divide-y-2 divide-[#D5D1C9]">
              <div className="col-span-12 mb-6 md:col-span-8">
                <img className="w-full" src={article.urlToImage} alt="thumb" />
                {/* <!-- info --> */}
                <div className="col-span-12 mt-6 md:col-span-4">
                  <a href="#">
                    <h3 className="mb-2.5 text-xl font-bold lg:text-[20px]">
                      {article.title}
                    </h3>
                  </a>
                  <p className="text-base text-[#292219]">
                    Self-driving cars were meant to be its future
                  </p>
                  <p className="mt-5 text-base text-[#94908C]">
                    {article.publishedAt}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </main>
  );
}

export default NewsBoard;
