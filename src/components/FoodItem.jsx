import styles from "./foodItem.module.css";

export default function FoodItem({ food, setFoodId }) {
  return (
    <div className={styles.itemContainer}>
      <img src={food.image} alt="" className={styles.itemImg} />
      <div className={styles.itemContent}>
        <p className={styles.itemName}>{food.title}</p>
      </div>

      <div className={styles.btnContainer}>
        <button className={styles.itemBtn} onClick={() => setFoodId(food.id)}>
          View Recipe
        </button>
      </div>
    </div>
  );
}
