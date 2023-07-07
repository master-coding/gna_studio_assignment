import { useContext } from "react";
import Checkout from "../Checkout";
import cart from "../assets/images/cart.png";
import styles from "./styles.module.css";
import { CartContext } from "../App";

export default function Header() {
  const { cartItems, show, setShow } = useContext(CartContext);
  const totalItems = Object.keys(cartItems).length;

  return (
    <div className={styles.header_container}>
      <header>GAN STUDIOS</header>
      <button className={styles.cart} onClick={() => setShow(!show)}>
        <div className={styles.items}>{totalItems > 0 ? totalItems : null}</div>
        <img src={cart} height="40px" width="40px" alt="cart" />
      </button>
      {show ? <Checkout /> : null}
    </div>
  );
}
