import React from "react";
import MEAL from "../MEAL/MEAL";

const MEAL_LIST = ({ mealData }) => {
  const nutrients = mealData.nutrients;
  return (
    <div className="mail-mealList">
      <section className="nutrients">
        <h1>Macros</h1>
        <ul>
          <li>Calories: {nutrients.calories.toFixed(0)}</li>
          <li>Carbohydrates: {nutrients.carbohydrates.toFixed(0)}</li>
          <li>Fat: {nutrients.fat.toFixed(0)}</li>
          <li>Protein: {nutrients.protein.toFixed(0)}</li>
        </ul>
      </section>

      <div className="container-fluid">
        <div className="row text-center" style={{ margin: "auto" }}>
          {mealData.meals.map((meal) => {
            return <MEAL key={meal.id} meal={meal} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default MEAL_LIST;
