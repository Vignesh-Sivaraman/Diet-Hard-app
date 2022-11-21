import React, { useEffect, useState } from "react";
import MEAL from "../../Components/MEAL/MEAL";
import "./MEAL_PLAN.scss";
import { env } from "../../config/config";
import axios from "axios";

const MEAL_PLAN = () => {
  let [weeklyMeals, setWeeklyMeals] = useState("");

  const getMealData = async () => {
    try {
      let values = { entry: "free" };
      let result = await axios.post(`${env.api}/reports/getmealplan`, values, {
        headers: {
          Authorization: window.localStorage.getItem("app-token"),
        },
      });
      if (result.status === 200) {
        setWeeklyMeals(result.data.mealPlanData[0]);
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
        <div className="mealPlan-home">
          <div className="container box text-center">
            <hr />
            <h3> {"Monday"} </h3>
            <hr />
            <div className="container">
              <div className="row text-center" style={{ margin: "auto" }}>
                {weeklyMeals.monday.meals.map((meal) => {
                  return <MEAL key={meal.id} meal={meal} />;
                })}
              </div>
              <hr />
              <h3> {"Tuesday"} </h3>
              <hr />
              <div className="row text-center" style={{ margin: "auto" }}>
                {weeklyMeals.tuesday.meals.map((meal) => {
                  return <MEAL key={meal.id} meal={meal} />;
                })}
              </div>
              <hr />
              <h3> {"Wednesday"} </h3>
              <hr />
              <div className="row text-center" style={{ margin: "auto" }}>
                {weeklyMeals.wednesday.meals.map((meal) => {
                  return <MEAL key={meal.id} meal={meal} />;
                })}
              </div>
              <hr />
              <h3> {"Thursday"} </h3>
              <hr />
              <div className="row text-center" style={{ margin: "auto" }}>
                {weeklyMeals.thursday.meals.map((meal) => {
                  return <MEAL key={meal.id} meal={meal} />;
                })}
              </div>
              <hr />
              <h3> {"Friday"} </h3>
              <hr />
              <div className="row text-center" style={{ margin: "auto" }}>
                {weeklyMeals.friday.meals.map((meal) => {
                  return <MEAL key={meal.id} meal={meal} />;
                })}
              </div>
              <hr />
              <h3> {"Saturday"} </h3>
              <hr />
              <div className="row text-center" style={{ margin: "auto" }}>
                {weeklyMeals.saturday.meals.map((meal) => {
                  return <MEAL key={meal.id} meal={meal} />;
                })}
              </div>
              <hr />
              <h3> {"Sunday"} </h3>
              <hr />
              <div className="row text-center" style={{ margin: "auto" }}>
                {weeklyMeals.sunday.meals.map((meal) => {
                  return <MEAL key={meal.id} meal={meal} />;
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

export default MEAL_PLAN;
