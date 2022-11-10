import React from "react";
import "./ADDITIONAL_INFO.scss";
import { FormikProvider, useFormik, Field } from "formik";

const ADDITIONAL_INFO = () => {
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
      user_name: "",
      user_dob: "",
      dietType: "",
      cuisineType: "",
      mealType: "",
      veg: "",
      calories: 1000,
    },
    // validate: (values) => {
    //   let errors = {};
    //   for (let keys in values) {
    //     if (values[keys] === "") {
    //       errors[keys] = `Please Enter ${keys}`;
    //     }
    //   }
    //   return errors;
    // },
    onSubmit: async (values) => {
      try {
        console.log(values);
      } catch (error) {
        alert(
          `Error Code: ${error.response.status}- ${error.response.data.message}`
        );
      }
    },
  });
  return (
    <div className="additionalInfo-main">
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
              <div className="form-outline mb-4">
                <label>Username:</label>
                <input
                  className="inputbox"
                  type="text"
                  value={formik.values.user_name}
                  onChange={formik.handleChange}
                  name="user_name"
                  required
                />
              </div>
              {/*dob*/}
              <div className="form-outline mb-4">
                <label>Date of Birth:</label>
                <input
                  className="inputbox"
                  type="date"
                  value={formik.values.user_dob}
                  onChange={formik.handleChange}
                  name="user_dob"
                  required
                />
              </div>
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

export default ADDITIONAL_INFO;