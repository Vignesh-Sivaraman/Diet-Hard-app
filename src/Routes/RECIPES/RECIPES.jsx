import React, { useEffect, useState } from "react";
import "./RECIPES.scss";
import { env } from "../../config/config";
import axios from "axios";
import RECIPE from "../../Components/RECIPE/RECIPE";

const RECIPES = () => {
  let [weeklyMeals, setWeeklyMeals] = useState("");

  const getMealData = async () => {
    try {
      let result = await axios.get(
        `https://api.edamam.com/api/recipes/v2?type=public&app_id=${
          env.id
        }&app_key=${env.key}&${window.localStorage.getItem("depth")}`
      );
      console.log(result);
      if (result) {
        setWeeklyMeals(result.data.hits);
      }
    } catch (err) {
      alert(`Error Code: ${err.response.status}- ${err.response.data.message}`);
    }
  };

  useEffect(() => {
    getMealData();
  }, []);

  return (
    <>
      {weeklyMeals ? (
        <div className="recipes-home">
          <div className="container box text-center">
            <div className="container">
              <div className="row text-center" style={{ margin: "auto" }}>
                {weeklyMeals.map((dish, i) => {
                  return <RECIPE key={i + 1} dish={dish} />;
                })}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>Loading</div>
      )}
    </>
  );
};

export default RECIPES;
