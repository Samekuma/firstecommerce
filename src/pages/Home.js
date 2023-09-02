import React, { useContext } from 'react';

// import Components
import Product from '../components/Product';

// import product Context
import { ProductContext } from '../contexts/ProductContext';

// Import Hero
import Hero from '../components/Hero'

const Home = () => {
  // get products from product context

  const { products } = useContext(ProductContext);

  // Get only men and women's clothing category

  const filteredProducts = products.filter(
    (item) => {
      return (
        item.category === "men's clothing" ||
        item.category === "women's clothing"
      );
    }
  );

  return (
    <div>
      <Hero />
      <section className="py-16">
        <div className="container mx-auto ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[30px] mx-auto md:max-w-none md:mx-0  max-w-sm xl:grid-cols-5 ">
            {filteredProducts.map((product) => {
              return (
                <Product
                  product={product}
                  key={product.id}
                />
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
