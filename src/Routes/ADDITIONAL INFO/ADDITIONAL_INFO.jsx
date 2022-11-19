import React, { useEffect } from "react";
import "./ADDITIONAL_INFO.scss";
import { FormikProvider, useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import BUTTON from "../../Centralized_Components/BUTTON/BUTTON";
import axios from "axios";
import { env } from "../../config/config";

const ADDITIONAL_INFO = () => {
  let navigate = useNavigate();
  let userEmail = window.localStorage.getItem("userEmail");

  useEffect(() => {
    if (!window.localStorage.getItem("app-token")) {
      alert("Please Login");
      navigate("/");
    }
    if (window.localStorage.getItem("userDetailsReceived") === "true") {
      alert("already entered");
      navigate("/home");
    }
  }, []);

  const formik = useFormik({
    initialValues: {
      userName: "",
      userDob: "",
      userWeight: "",
      userTargetWeight: "",
      userCalories: "",
      userWater: "",
      userWorkout: "",
    },
    onSubmit: async (values) => {
      try {
        values.email = window.localStorage.getItem("userEmail");
        let result = await axios.post(`${env.api}/users/userdetails`, values, {
          headers: {
            Authorization: window.localStorage.getItem("app-token"),
          },
        });
        if (result.status === 200) {
          window.localStorage.setItem(
            "userDetailsReceived",
            result.data.userDetailsReceived
          );
          alert(result.data.message);
          navigate("/home/mealplan");
        }
      } catch (err) {
        alert(
          `Error Code: ${err.response.status}- ${err.response.data.message}`
        );
      }
    },
  });
  return (
    <div className="additionalInfo-main">
      <div className="my-3 fw-bold text-primary">{userEmail}</div>
      <span>
        <BUTTON
          type="button"
          buttonType={"contrast"}
          onClick={() => {
            window.localStorage.clear();
            navigate("/");
          }}
        >
          Logout
        </BUTTON>
      </span>
      <div className="container box">
        <div className="title">
          <h3>Let us Know about yourself and your goals</h3>
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
                  value={formik.values.userName}
                  onChange={formik.handleChange}
                  name="userName"
                  required
                />
              </div>
              {/*dob*/}
              <div className="form-outline mb-4">
                <label>Date of Birth:</label>
                <input
                  className="inputbox"
                  type="date"
                  value={formik.values.userDob}
                  onChange={formik.handleChange}
                  name="userDob"
                  required
                />
              </div>
              {/*Weight*/}
              <div className="form-outline mt-3 mb-4">
                <label>Weight(Kg)</label>
                <input
                  className="inputbox"
                  type="number"
                  value={formik.values.userWeight}
                  onChange={formik.handleChange}
                  name="userWeight"
                  required
                />
              </div>
              {/*Weight goal*/}
              <div className="form-outline mt-3 mb-4">
                <label>Target Weight:</label>
                <input
                  className="inputbox"
                  type="number"
                  value={formik.values.userTargetWeight}
                  onChange={formik.handleChange}
                  name="userTargetWeight"
                  required
                />
              </div>
              {/*calories*/}
              <div className="form-outline mt-3 mb-4">
                <label>Calorie goal for a day(cal):</label>
                <input
                  className="inputbox"
                  type="number"
                  value={formik.values.userCalories}
                  onChange={formik.handleChange}
                  name="userCalories"
                  required
                />
              </div>
              {/*water*/}
              <div className="form-outline mt-3 mb-4">
                <label>Water conssumption goal for a day(ml):</label>
                <input
                  className="inputbox"
                  type="number"
                  value={formik.values.userWater}
                  onChange={formik.handleChange}
                  name="userWater"
                  required
                />
              </div>
              {/*workout*/}
              <div className="form-outline mt-3 mb-4">
                <label>Workout goal for a day(mins):</label>
                <input
                  className="inputbox"
                  type="number"
                  value={formik.values.userWorkout}
                  onChange={formik.handleChange}
                  name="userWorkout"
                  required
                />
              </div>
              <div className="text-center text-lg-start my-2 pt-2">
                <input
                  type={"submit"}
                  value="submit"
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
