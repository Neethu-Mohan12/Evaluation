import React, { useContext } from "react";

import CartContext from "../../context/cart/CartContext";
import { Link,useLocation} from "react-router-dom";

function Header() {
  const { cart } = useContext(CartContext);
  const { pathname } = useLocation();

  return (
    <div className="w-full p-8 justify-between items-center flex bg-black fixed top-0 left-0 z-50">
      <Link to="/" className="text-white text-2xl font-bold uppercase hover:scale-105 hover:text-yellow-400 duration-400 cursor-pointer">
        shopy
      </Link>
      
      {pathname === "/cart" ? (
        <Link to="/" className="text-white">
          <i className="fa-solid fa-house text-xl hover:text-yellow-400"></i>
        </Link>
      ) : (
        <Link to="/cart" className="flex justify-between items-end gap-3 me-5 text-xl">
          <div className="relative">
            <i className="fa-solid fa-cart-shopping text-xl text-white hover:text-2xl hover:text-yellow-400 cursor-pointer"></i>
            <div className="w-3 h-4 absolute -top-1 right-0 bg-red-700 rounded-full flex justify-center">
              <p className="text-xs text-white">{cart?.products?.length}</p>
            </div>
          </div>
          <Link to="/" className="text-white hover:text-yellow-400">
            <i className="fa-solid fa-house text-xl"></i>
          </Link>
        </Link>
      )}
    </div>
  );
}

export default Header;

