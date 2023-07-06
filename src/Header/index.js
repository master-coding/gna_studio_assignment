import { useContext } from "react";
import Checkout from "../Checkout";
import cart from "../assets/images/cart.png";
import styles from "./styles.module.css";
import { CartContext } from "../App";

export default function Header() {
  const { show, setShow } = useContext(CartContext);

  return (
    <div className={styles.header_container}>
      <header>GAN STUDIOS</header>
      <button className={styles.cart} onClick={() => setShow(!show)}>
        <img src={cart} height="40px" width="40px" alt="cart" />
      </button>
      {show ? <Checkout /> : null}
    </div>
  );
}
