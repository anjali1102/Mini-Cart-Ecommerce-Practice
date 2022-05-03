import React, { useState } from "react";
export const CartContext = React.createContext({});
export default function CartContextProvider({ children }) {

  const [cart,setCart]=useState('')
  const addToCart = (product) => {
    // setCart(...cart, product)                 //object is not iterable error
    setCart([...cart, product])
    // setCart([...cart],product)                  //no error message
  };
  const values = {
    addToCart,
  };
  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
}
