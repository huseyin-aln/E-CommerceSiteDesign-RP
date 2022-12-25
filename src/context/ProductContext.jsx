import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext();

const ProductContextProvider = ({ children }) => {
  const [show, setShow] = useState(true);
  // const [cart, setCart] = useState([]);

  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
  };

  const handleChange = (item, count) => {
    const index = cart.indexOf(item);
    const arr = cart;
    arr[index].amount += count;
    if (arr[index].amount === 0) {
      arr[index.amount] = 1;
    }
    setCart([...arr]);
  };

  return (
    <ProductContext.Provider
      value={{ cart, setCart, show, setShow, handleClick, handleChange }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
