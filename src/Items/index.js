import Item from "./Item";
import items from "./items";
import styles from "./styles.module.css";

export default function Items() {
  return (
    <div className={styles.container}>
      {items.map((item) => (
        <Item item={item} />
      ))}
    </div>
  );
}
