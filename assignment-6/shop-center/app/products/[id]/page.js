import Image from "next/image";
import data from "../../data/products.json";
import Link from "next/link";

function ProductPage({ params }) {
  const filteredProduct = data.products.filter(
    (product) => product.id == params.id
  );

  const roundedRating = Math.round(filteredProduct[0].rating);

  return (
    <main className="h-screen">
      <section className="bg-[#fafaf2] h-full py-20">
        <div className="w-11/12 lg:w-8/12 max-w-7xl mx-auto flex flex-col gap-12 lg:flex-row items-center justify-between">
          <div className="w-full lg:w-7/12 border border-slate-500/20 p-4">
            <Image
              src={filteredProduct[0].thumbnail}
              className="w-[400px] h-[500px] mx-auto object-cover"
              width={400}
              height={500}
              alt=""
            />

            <div className="flex gap-4 mt-4">
              {filteredProduct[0]?.images?.map((imgUrl) => (
                <Image
                  key={imgUrl}
                  src={imgUrl}
                  className="w-[100px] h-[100px] mx-auto border object-cover"
                  width={100}
                  height={100}
                  alt=""
                />
              ))}
            </div>
          </div>
          <div className="w-full lg:w-5/12">
            <h1 className="italic text-xl lg:text-3xl font-serif font-semibold">
              {filteredProduct[0]?.title}
            </h1>
            <span className="text-[#919090] my-3">
              <Link href={`/category/:${filteredProduct[0].category}`}>
                {filteredProduct[0].category}
              </Link>
            </span>
            <div className="mt-3 flex items-center justify-start gap-1">
              {[...Array(roundedRating)].map((rating) => (
                <Image
                  key={rating}
                  src="/svg/star.svg"
                  width={20}
                  height={20}
                  alt=""
                />
              ))}
            </div>
            <hr className="my-5 bg-black" />

            <div>
              <p className="my-3">
                <span className="text-rose-600 opacity-60 line-through">
                  {filteredProduct[0].price}
                </span>
                <span className="font-bold text-2xl">
                  {filteredProduct[0].discountPercentage}
                </span>
              </p>
            </div>
            <div>
              <p className="leading-7">{filteredProduct[0].description}</p>

              <button className="w-full bg-[#1a1a1a] hover:bg-[#3a3a3a] text-center py-3 mt-5 text-white rounded-full">
                Add To Cart - ${filteredProduct[0].discountPercentage}
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ProductPage;
