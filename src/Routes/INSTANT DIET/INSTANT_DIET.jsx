import axios from "axios";
import React, { useState } from "react";
import BUTTON from "../../centralized components/BUTTON/BUTTON";
import MEAL_LIST from "../../Components/MEAL LIST/MEAL_LIST";
import "./INSTANT_DIET.scss";

const INSTANT_DIET = () => {
  const [mealData, setMealData] = useState(null);
  const [calories, setCalories] = useState(2000);

  function handleChange(e) {
    setCalories(e.target.value);
  }

  const getMealData = async () => {
    try {
      let response = await axios.get(
        `https://api.spoonacular.com/mealplanner/generate?apiKey=3382bef24374486fb5df95c19672bb47&timeFrame=day&targetCalories=${calories}`
      );
      setMealData(response.data);
      console.table(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="instantDiet-main">
      <section className="controls">
        <input
          type="number"
          placeholder="Calories (e.g. 2000)"
          onChange={handleChange}
        />
        <BUTTON buttonType={"contrast"} click={getMealData}>
          Get Daily Meal Plan
        </BUTTON>
        {mealData && <MEAL_LIST mealData={mealData} />}
      </section>
    </div>
  );
};

export default INSTANT_DIET;
