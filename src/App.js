import React, { useState } from "react";
import Header from "./Header";
import Items from "./Items";
import styles from "./styles.module.css";

export const CartContext = React.createContext();

export default function App() {
  const [cartItems, setCartItems] = useState({});
  const [show, setShow] = useState(false);

  return (
    <CartContext.Provider value={{ cartItems, setCartItems, show, setShow }}>
      <div className={styles.container}>
        <Header />
        <div className={styles.bakery}>Bakery</div>
        <Items />
      </div>
    </CartContext.Provider>
  );
}
