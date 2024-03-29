import React from 'react';
import Header from '../components/Header/Header';

import ProductDetails from '../components/ProductDetails/ProductDetails';

function ProductDetailsPage() {
  const addToCart = (product) => {
   
    console.log('Product added to cart:', product);
  };

  return (
    <div>
      <Header />
      <ProductDetails addToCart={addToCart} />
      
    </div>
  );
}

export default ProductDetailsPage;

