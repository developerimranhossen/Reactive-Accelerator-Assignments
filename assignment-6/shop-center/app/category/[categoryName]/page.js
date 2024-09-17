import Footer from "@/app/components/Footer";
import Hero from "@/app/components/Hero";
import data from "../../data/products.json";
import Form from "@/app/components/Form";
import ProductList from "@/app/components/ProductList";
import Link from "next/link";
import CustomLingk from "@/app/components/CustomLingk";
// import Button from "@/app/components/Button";

function page({ params }) {
  let slicedParams = params.categoryName.slice(3);
  const filteredProduct = data.products.filter(
    (product) => product.category == slicedParams
  );

  const product = filteredProduct[0];
  // console.log(product);

  return (
    <>
      <Hero />
      <main>
        {/* <!-- Product section start --> */}
        <section className="w-11/12 lg:w-10/12 max-w-7xl mx-auto py-0 lg:py-10 lg:flex justify-between items-start">
          <div className="w-full flex items-center justify-between lg:block lg:w-2/12 my-10 lg:my-0 lg:mt-4">
            <CustomLingk path={"/"}>All</CustomLingk>
            <CustomLingk path="/category/:smartphones">Smartphones</CustomLingk>
            <CustomLingk path="/category/:laptops">Laptops</CustomLingk>
            <CustomLingk path="/category/:fragrances">Fragrances</CustomLingk>
            <CustomLingk path="/category/:skincare">Skincare</CustomLingk>
            <CustomLingk path="/category/:groceries">Groceries</CustomLingk>
          </div>
          <div className="sticky top-0 right-0 w-full lg:w-10/12 grid grid-cols-2 gap-4 lg:grid-cols-3 my-4 lg:my-10">
            {filteredProduct.map((product) => (
              <ProductList key={product.id} product={product} />
            ))}
          </div>
        </section>

        <Form />
      </main>
      <Footer />
    </>
  );
}

export default page;
