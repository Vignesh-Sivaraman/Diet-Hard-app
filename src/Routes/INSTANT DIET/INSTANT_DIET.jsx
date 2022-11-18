import axios from "axios";
import React, { useState } from "react";
import BUTTON from "../../CentralizedComponents/BUTTON/BUTTON";
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
        `https://api.spoonacular.com/mealplanner/generate?apiKey=06775893738749e4ae344f157b2ba83c&timeFrame=day&targetCalories=${calories}`
      );
      setMealData(response.data);
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
        <BUTTON buttonType={"contrast"} onClick={getMealData}>
          Get Daily Meal Plan
        </BUTTON>
        {mealData && <MEAL_LIST mealData={mealData} />}
      </section>
    </div>
  );
};

export default INSTANT_DIET;
