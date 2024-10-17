import { useState, useEffect } from "react";
// import.meta.env.VITE_RECIPE_URL;
// import.meta.env.VITE_APIKEY;

export default function Search({ foodData, setFoodData }) {
  const [query, setQuery] = useState("");
  useEffect(() => {
    async function fetchFoodRecipeDetails() {
      const res = await fetch(
        `${import.meta.env.VITE_RECIPE_URL}?query=${query}&apiKey${
          import.meta.env.VITE_APIKEY
        }`
      );
      const data = res.json();
      setFoodData(data.results);
    }
  }, [query]);
  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
}
