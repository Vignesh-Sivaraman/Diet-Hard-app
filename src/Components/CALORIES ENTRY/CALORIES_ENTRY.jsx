import React, { useEffect, useState } from "react";
import "./CALORIES_ENTRY.scss";
import { FormikProvider, useFormik } from "formik";
import axios from "axios";
import { env } from "../../config/config";
import { useNavigate } from "react-router-dom";

const CALORIES_ENTRY = () => {
  useEffect(() => {
    if (!window.localStorage.getItem("app-token")) {
      alert("Please Login");
      navigate("/");
    }
  }, []);

  let navigate = useNavigate();
  let [weeklyMeals, setWeeklyMeals] = useState("");
  const [isManual, setisManual] = useState(false);
  const [currentDay, setCurrentDay] = useState("");
  const [isDatePicked, setIsDatePicked] = useState(false);
  const [mealTime, setMealTime] = useState(0);
  const [currentMeal, setCurrentMeal] = useState("Breakfast");
  const [currentDate, setCurrentDate] = useState("");

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

  let [initial, setInitial] = useState({
    calories: currentDay
      ? Math.round(weeklyMeals?.[currentDay].meals[mealTime].calories)
      : "",
    mealType: "",
    mealTitle: currentDay
      ? weeklyMeals?.[currentDay].meals[mealTime].title
      : "",
    protein: currentDay
      ? Math.round(weeklyMeals?.[currentDay].meals[mealTime].protein)
      : "",
    carbohydrates: currentDay
      ? Math.round(weeklyMeals?.[currentDay].meals[mealTime].carbohydrates)
      : "",
    fat: currentDay
      ? Math.round(weeklyMeals?.[currentDay].meals[mealTime].fat)
      : "",
  });
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  useEffect(() => {
    getMealData();
  }, []);

  useEffect(() => {
    if (isManual)
      setInitial({
        mealTitle: "",
        calories: "0",
        mealType: "",
        protein: "0",
        carbohydrates: "0",
        fat: "0",
      });
    else {
      setInitial({
        calories: currentDay
          ? Math.round(weeklyMeals?.[currentDay].meals[mealTime].calories)
          : "",
        mealTitle: currentDay
          ? weeklyMeals?.[currentDay].meals[mealTime].title
          : "",
        mealType: "",
        protein: currentDay
          ? Math.round(weeklyMeals?.[currentDay].meals[mealTime].protein)
          : "",
        carbohydrates: currentDay
          ? Math.round(weeklyMeals?.[currentDay].meals[mealTime].carbohydrates)
          : "",
        fat: currentDay
          ? Math.round(weeklyMeals?.[currentDay].meals[mealTime].fat)
          : "",
      });
    }
  }, [isDatePicked, currentDay, isManual, mealTime]);

  let mealTypes = ["Breakfast", "Lunch", "Dinner"];
  const formik = useFormik({
    initialValues: initial,
    enableReinitialize: true,
    onSubmit: async (values) => {
      try {
        values.mealType = currentMeal;
        values.entryDate = currentDate;
        values.email = window.localStorage.getItem("userEmail");
        let result = await axios.post(`${env.api}/usercalories/`, values, {
          headers: {
            Authorization: window.localStorage.getItem("app-token"),
          },
        });
        if (result.status === 200) {
          alert(result.data.message);
          navigate("/home");
        }
      } catch (error) {
        alert(
          `Error Code: ${error.response.status}- ${error.response.data.message}`
        );
      }
    },
  });
  return (
    <div className="caloriesentry-main">
      <div className="container box">
        <div className="title">
          <h3>Please fill the below details</h3>
        </div>
        <FormikProvider value={formik}>
          <form
            className="myForm"
            onSubmit={formik.handleSubmit}
            style={{ width: "100%" }}
          >
            <div className="row">
              {/*date*/}
              <div className="form-outline mb-4 text-center ">
                <label>Date:</label>
                <input
                  className="inputbox mb-2"
                  type="date"
                  onChange={(e) => {
                    // setCurrentDate(e.target.value);
                    let tempDate = new Date(e.target.value);
                    setCurrentDate(e.target.value);
                    setCurrentDay(weekday[tempDate.getDay()].toLowerCase());
                    setIsDatePicked(true);
                  }}
                  // name="meal_date"
                  // required
                />
                <span className="ms-5" style={{ color: "red" }}>
                  {isDatePicked ? "" : "Please select date first"}
                </span>
              </div>
            </div>
            {isDatePicked ? (
              <div className="row">
                {/*mealType*/}
                <div className="my-2 mb-2">
                  <span className=" fs-5 text-primary">Meal-Type:</span>
                </div>
                {mealTypes.map((mealType, i) => {
                  return (
                    <div className="col-lg-2" key={i}>
                      <input
                        onChange={(e) => {
                          setCurrentMeal(e.target.value);
                          if (e.target.value === "Breakfast") setMealTime(0);
                          if (e.target.value === "Lunch") setMealTime(1);
                          if (e.target.value === "Dinner") setMealTime(2);
                          formik.handleChange(e.target.value);
                        }}
                        type="radio"
                        value={mealType}
                        name="mealType"
                        required
                        defaultChecked={mealType === "Breakfast" ? true : false}
                      />
                      <span>{mealType}</span>
                    </div>
                  );
                })}
                {/*manual option*/}
                <div className="form-outline my-3">
                  <input
                    onChange={(e) => {
                      setisManual(!isManual);
                    }}
                    type="checkbox"
                    disabled={!isDatePicked}
                    value={isManual}
                  />
                  <span>
                    "Had a Different meal your meal plan? Check here to add data
                    manually"
                  </span>
                </div>
                {isManual ? (
                  ""
                ) : (
                  <div className="d-flex">
                    <img
                      className="me-3 my-3"
                      variant="top"
                      src={weeklyMeals?.[currentDay].meals[mealTime].imageURL}
                      style={{ width: "100px", height: "100px" }}
                      alt={weeklyMeals?.[currentDay].meals[mealTime].title}
                    />
                    <div className="d-flex align-items-center">
                      {weeklyMeals?.[currentDay].meals[mealTime].title}
                    </div>
                  </div>
                )}
                {/*mealTitle*/}
                <div className="form-outline mb-4">
                  <label>Meal Title:</label>
                  <input
                    className="inputbox"
                    type="text"
                    value={formik.values.mealTitle}
                    onChange={formik.handleChange}
                    name="mealTitle"
                    required
                    disabled={!isManual}
                  />
                </div>

                {/*calories*/}
                <div className="form-outline mb-4">
                  <label>calories (cal):</label>
                  <input
                    className="inputbox"
                    type="number"
                    value={formik.values.calories}
                    onChange={formik.handleChange}
                    name="calories"
                    required
                    disabled={!isManual}
                  />
                </div>
                {/*protein*/}
                <div className="form-outline mb-4">
                  <label>protein (g):</label>
                  <input
                    className="inputbox"
                    type="number"
                    value={formik.values.protein}
                    onChange={formik.handleChange}
                    name="protein"
                    required
                    disabled={!isManual}
                  />
                </div>
                {/*fat*/}
                <div className="form-outline mb-4">
                  <label>fat (g):</label>
                  <input
                    className="inputbox"
                    type="number"
                    value={formik.values.fat}
                    onChange={formik.handleChange}
                    name="fat"
                    required
                    disabled={!isManual}
                  />
                </div>
                {/*carbohydrates*/}
                <div className="form-outline mb-4">
                  <label>carbohydrates (g):</label>
                  <input
                    className="inputbox"
                    type="number"
                    value={formik.values.carbohydrates}
                    onChange={formik.handleChange}
                    name="carbohydrates"
                    required
                    disabled={!isManual}
                  />
                </div>
                <div className="text-center text-lg-start my-2 pt-2">
                  <input
                    type={"submit"}
                    value="Add entry"
                    className="btn btn-warning btn-lg"
                    style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                  />
                </div>
              </div>
            ) : (
              ""
            )}
          </form>
        </FormikProvider>
      </div>
    </div>
  );
};

export default CALORIES_ENTRY;
