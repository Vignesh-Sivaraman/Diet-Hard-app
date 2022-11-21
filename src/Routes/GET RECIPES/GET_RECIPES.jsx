import React from "react";
import "./GET_RECIPES.scss";
import { FormikProvider, useFormik } from "formik";
import { env } from "../../config/config";
import { useNavigate } from "react-router-dom";

const GET_RECIPES = () => {
  let navigate = useNavigate();

  let dietTypes = [
    "high-fiber",
    "high-protein",
    "low-fat",
    "low-carb",
    "balanced",
  ];
  let cuisineTypes = ["American", "Chinese", "Indian"];
  let mealTypes = ["Breakfast", "Dinner", "Lunch"];
  let veg = [true, false];
  const formik = useFormik({
    initialValues: {
      dietType: "",
      cuisineType: "",
      mealType: "",
      veg: "",
      calories: 1000,
    },

    onSubmit: async (values) => {
      try {
        let vegOption = values.veg === "true" ? "&health=vegetarian" : "";
        let tempUrl = `diet=${values.dietType}${vegOption}&cuisineType=${values.cuisineType}&mealType=${values.mealType}&calories=${values.calories}`;
        window.localStorage.setItem("depth", tempUrl);
        navigate("/home/recipe");
      } catch (error) {
        alert(
          `Error Code: ${error.response.status}- ${error.response.data.message}`
        );
      }
    },
  });
  return (
    <div className="getRecipes-main">
      <div className="container box">
        <div className="title">
          <h3>Choose the below option for food recipes</h3>
        </div>
        <FormikProvider value={formik}>
          <form
            className="myForm"
            onSubmit={formik.handleSubmit}
            style={{ width: "100%" }}
          >
            <div className="row">
              {/*userName*/}

              {/*dob*/}

              {/*calories*/}
              <div className="form-outline mt-3 mb-4">
                <label>calories (optional):</label>
                <input
                  className="inputbox"
                  type="number"
                  value={formik.values.calories}
                  onChange={formik.handleChange}
                  name="calories"
                />
              </div>
              {/*dietType*/}
              <div className="mt-4 mb-2">
                <span className=" fs-5 text-primary">Diet-Type:</span>
              </div>
              {dietTypes.map((dietType, i) => {
                return (
                  <div className="col-lg-2" key={i}>
                    <input
                      onChange={formik.handleChange}
                      type="radio"
                      value={dietType}
                      name="dietType"
                      required
                    />
                    <span>{dietType}</span>
                  </div>
                );
              })}
              {/*cuisine Type*/}
              <div className="mt-4 mb-2">
                <span className=" fs-5 text-primary">Cuisine-Type:</span>
              </div>
              {cuisineTypes.map((cuisineType, i) => {
                return (
                  <div className="col-lg-2" key={i}>
                    <input
                      onChange={formik.handleChange}
                      type="radio"
                      value={cuisineType}
                      name="cuisineType"
                      required
                    />
                    <span>{cuisineType}</span>
                  </div>
                );
              })}
              {/*mealType*/}
              <div className="mt-4 mb-2">
                <span className=" fs-5 text-primary">Meal-Type:</span>
              </div>
              {mealTypes.map((mealType, i) => {
                return (
                  <div className="col-lg-2" key={i}>
                    <input
                      onChange={formik.handleChange}
                      type="radio"
                      value={mealType}
                      name="mealType"
                      required
                    />
                    <span>{mealType}</span>
                  </div>
                );
              })}
              {/* isVeg */}
              <div className="mt-4 mb-2">
                <span className=" fs-5 text-primary">Vegetarian:</span>
              </div>
              {veg.map((isveg, i) => {
                return (
                  <div className="col-lg-2" key={i}>
                    <input
                      onChange={formik.handleChange}
                      type="radio"
                      value={isveg}
                      name="veg"
                      required
                    />
                    <span>{`${isveg}`}</span>
                  </div>
                );
              })}

              <div className="text-center text-lg-start my-2 pt-2">
                <input
                  type={"submit"}
                  value="Get recipe"
                  className="btn btn-warning btn-lg"
                  style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                />
              </div>
            </div>
          </form>
        </FormikProvider>
      </div>
    </div>
  );
};

export default GET_RECIPES;
