import Search from "./components/Search";
import { useState } from "react";

function App() {
  const [foodData, setFoodData] = useState([]);
  return (
    <div>
      <Search foodData={foodData} setFoodData={setFoodData} />
    </div>
  );
}

export default App;
