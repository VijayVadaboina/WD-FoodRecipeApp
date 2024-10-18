import { useState, useEffect } from "react";
import styles from "./search.module.css";
// import.meta.env.VITE_RECIPE_URL;
// import.meta.env.VITE_APIKEY;
const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "2296cf06fb4d4a438416fee99e55e2d8";

export default function Search({ foodData, setFoodData }) {
  const [query, setQuery] = useState("");
  useEffect(() => {
    async function fetchFoodRecipeDetails() {
      const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);

      //   const res = await fetch(
      //     `${import.meta.env.VITE_RECIPE_URL}?query=${query}&apiKey${
      //       import.meta.env.VITE_APIKEY
      //     }`
      //   );
      const data = await res.json();
      setFoodData(data.results);
    }
    fetchFoodRecipeDetails();
  }, [query]);
  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className={styles.input}
      />
    </div>
  );
}
