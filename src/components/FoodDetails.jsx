import { useEffect, useState } from "react";
import styles from "./fooddetails.module.css";
export default function FoodDetails({ foodId }) {
  const [food, setFood] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = "2296cf06fb4d4a438416fee99e55e2d8";
  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await res.json();
      setFood(data);
      setIsLoading(false);
    }
    fetchFood();
  }, [foodId]);
  return (
    <div className={styles.recipeCard}>
      <div>
        <h1 className={styles.recipeName}>{food.title}</h1>
        <img src={food.image} className={styles.recipeImage} />

        <div className={styles.recipeDetails}>
          <span>
            <strong>🕣{food.readyInMinutes} Mins</strong>
          </span>
          <span>
            <strong>🧑‍🧑‍🧒 serves: {food.servings}</strong>
          </span>
          <span>
            <strong>{food.vegetarian ? "🥕 Veg " : "🍗 Non Veg"}</strong>
          </span>
          <span>
            <strong>{food.vegan ? "🐮 Vegan " : ""}</strong>
          </span>
        </div>
        <div>
          $ <span>{food.pricePerServing / 100} per Serving</span>
        </div>
      </div>
      <div className={styles.recipeInstructions}>
        <h2>Instructions</h2>
        <ol>
          {isLoading ? (
            <p> Loading ....</p>
          ) : (
            food.analyzedInstructions[0].steps.map((step) => (
              <li>{step.step}</li>
            ))
          )}
        </ol>
      </div>
    </div>
  );
}
