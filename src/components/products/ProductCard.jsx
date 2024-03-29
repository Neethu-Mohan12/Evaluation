import React, { useContext } from "react";
import CartContext from "../../context/cart/CartContext";
import { addToCart } from "../../context/cart/actions";

import { useNavigate } from "react-router-dom";
function ProductCard({ product }) {
  const { cart, dispatchCart } = useContext(CartContext);
  const navigate=useNavigate();
  const handleAddToCart = () => {
    const existingProduct = cart.products.find(item => item.id === product.id);
    

    if (existingProduct) {
     
      dispatchCart({
        type: 'INCREMENT_QUANTITY',
        payload: product.id
      });

    } else {
     
      dispatchCart(addToCart(product));
 
    }
  };
  return (
<div onClick={()=>navigate(`/product/${product.id}`)} className="p-5 shadow-2xl  shadow-black flex flex-col cursor-pointer bg-white">
      <h1 className="text-xl font-bold">{product.title}</h1>
      <h1>{product.brand}</h1>
      <img className="h-28 object-contain" src={product.images[0]} alt="images" />
      <p>{product.description}</p>
      <h1 className="text-yellow-900 font-bold text-xl">${product.price}</h1>
      <div className="flex justify-between">
        <button
           onClick={handleAddToCart}
          className="bg-gray-500 rounded p-2 shadow-black uppercase hover:text-white"
        >
          add to cart
        </button>
        <button>
          <i className="fa-solid fa-heart text-red-700 text-2xl hover:scale-105 duration-150"></i>
        </button>
      </div>
    </div>
  );
}

export default ProductCard;

