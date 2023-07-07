import { useContext } from "react";
import styles from "./styles.module.css";
import { CartContext } from "../../App";

export default function Item({ item }) {
  const { name, price, image } = item || {};

  const { cartItems, setCartItems } = useContext(CartContext);

  const addToCart = (item) => {
    setCartItems((prev) => ({ ...prev, [name]: { name, price, quantity: 1 } }));
  };

  return (
    <div className={styles.container}>
      <img src={image} height="200px" width="230px" alt={name} />
      <div className={styles.item_name}>{name}</div>
      <div className={styles.item_price}>{price} INR</div>
      <div className={styles.add_to_cart}>
        <button
          onClick={() => addToCart(item)}
          className={`${styles.btn} + ${
            cartItems[name] ? styles.present : styles.absent
          }`}
        >
          {cartItems[name] ? "ADDED" : "ADD TO CART"}
        </button>
      </div>
    </div>
  );
}
