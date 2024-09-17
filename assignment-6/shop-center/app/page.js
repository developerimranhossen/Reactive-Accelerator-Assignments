import data from "./data/products.json";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Hero from "./components/Hero";
import ProductList from "./components/ProductList";

export default function Home() {
  return (
    <>
    <Hero />
      <main>
        <section className="w-11/12 lg:w-10/12 max-w-7xl mx-auto py-10">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:grid-cols-4 my-4 lg:my-10">
            {data.products.map((product) => (
              <ProductList key={product.id} product={product} />
            ))}
          </div>
        </section>
      </main>
      <Form />
      <Footer />
    </>
  );
}
