import React, { useContext } from 'react';

// import useParam
import { useParams } from 'react-router-dom';

// import cartContext
import { CartContext } from '../contexts/CartContext';

// Import product context
import { ProductContext } from '../contexts/ProductContext';

const ProductDetails = () => {
  // get the product id from the url
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);

  // get the single products based on the id
  const product = products.find((item) => {
    return item.id === parseInt(id);
  });

  // if product is not found
  if (!product) {
    return (
      <section className="h-screen flex justify-center items-center  ">
        Loading...
      </section>
    );
  }

  // Destructure product
  const { title, price, description, image } =
    product;

  return (
    <section className="pt-32 pb-12 lg:py-32 h-full flex items-center">
      <div className="container mx-auto">
        {/* Image and wrapper */}
        <div className="flex flex-col lg:flex-row items-center  ">
          {/* Image */}
          <div className="flex flex-1 justify-center items-center mb-8 lg:mb-0 ">
            <img
              className="max-w-[120px] md:max-w-[200px] lg:max-w-sm  "
              src={image}
              alt="/"
            />
          </div>
          {/* Text */}
          <div className="flex-1 text-center lg:text-left  ">
            <h1 className="text-[20px] md:text-[26px] font-medium mb-2 max-w-[400px] md:max-w-[450px] mx-auto lg:mx-0 ">
              {title}
            </h1>
            <div className="text-xl text-red-500 font-medium mb-4 md:mb-6  ">
              ${price}
            </div>
            <p className=" mb-5 md:mb-8 ">
              {description}{' '}
            </p>
            <button
              onClick={() =>
                addToCart(product, product.id)
              }
              className="bg-primary mb-4 py-4 px-8 text-white  "
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
