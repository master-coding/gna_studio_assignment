import { useState, useContext } from "react";
import styles from "./styles.module.css";
import { CartContext } from "../App";

export default function Checkout() {
  const { cartItems, setCartItems, show, setShow } = useContext(CartContext);

  const totalPrice = (items) => {
    let sum = 0;
    Object.keys(items).forEach((key) => {
      sum = sum + items[key].price * items[key].quantity;
    });

    return sum;
  };

  const [total, setTotal] = useState(totalPrice(cartItems));

  const delItem = (key) => {
    if (key === "Pudding") {
      const { Pudding, ...rest } = cartItems;
      setCartItems(rest);
    } else if (key === "Caramel") {
      const { Caramel, ...rest } = cartItems;
      setCartItems(rest);
    } else if (key === "Pastry") {
      const { Pastry, ...rest } = cartItems;
      setCartItems(rest);
    } else {
      console.log(cartItems);
      const { Strawberry, ...rest } = cartItems;
      setCartItems(rest);
    }
  };

  const increase = (cartItem) => {
    setCartItems((prev) => ({
      ...prev,
      [cartItem.name]: {
        name: cartItem.name,
        price: cartItem.price,
        quantity: cartItem.quantity + 1,
      },
    }));

    setTotal((prev) => prev + cartItem.price);
  };

  const decrease = (cartItem) => {
    setCartItems((prev) => ({
      ...prev,
      [cartItem.name]: {
        name: cartItem.name,
        price: cartItem.price,
        quantity: Math.max(cartItem.quantity - 1, 0),
      },
    }));

    // setTotal((prev) => (prev.quantity >= 1 ? prev - cartItem.price : prev));
    setTotal(totalPrice(cartItems));
    console.log(cartItems, "cartItems");
    console.log(totalPrice, "total");
  };

  const proceed = () => {
    setShow(false);
    console.log(`Your total Price is ${totalPrice(cartItems)}`);
  };

  return (
    <div className={`${styles.modal} ${show ? styles.show_modal : null}`}>
      <div className={styles.checkout}>
        <div className={styles.header}>YOUR ORDER</div>
        <div className={styles.content}>
          <div>
            {Object.keys(cartItems).map((cartItemKey) => {
              return (
                <div className={styles.item}>
                  <div>{cartItems[cartItemKey].name}</div>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <button
                      className={styles.counter}
                      onClick={() => decrease(cartItems[cartItemKey])}
                    >
                      -
                    </button>
                    <div>{cartItems[cartItemKey].quantity}</div>
                    <button
                      className={styles.counter}
                      onClick={() => increase(cartItems[cartItemKey])}
                    >
                      +
                    </button>
                  </div>
                  <div>{cartItems[cartItemKey].price}</div>
                  <div>
                    {cartItems[cartItemKey].price *
                      cartItems[cartItemKey].quantity}
                  </div>
                  <button
                    onClick={() => delItem(cartItemKey)}
                    className={styles.del}
                  >
                    Delete
                  </button>
                </div>
              );
            })}
          </div>
        </div>
        <div>Total Price: {totalPrice(cartItems)}</div>
        <div className={styles.footer}>
          <button
            onClick={proceed}
            className={`${styles.btn} ${styles.proceed}`}
          >
            Proceed
          </button>
          <button
            onClick={() => setShow(false)}
            className={`${styles.btn} ${styles.close}`}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
