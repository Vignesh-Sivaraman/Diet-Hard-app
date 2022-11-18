import React, { useEffect } from "react";
import "./ADDITIONAL_INFO.scss";
import { FormikProvider, useFormik, Field } from "formik";
import { useNavigate } from "react-router-dom";
import BUTTON from "../../Centralized Components/BUTTON/BUTTON";
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

  let veg = ["yes", "no"];
  const formik = useFormik({
    initialValues: {
      userName: "",
      userDob: "",
      userWeight: "",
      userTargetWeight: "",
      userCalories: "",
      userVeg: "",
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

              {/* isVeg */}
              <div className="mt-4 mb-2">
                <span className=" fs-5 text-primary">Vegetarian:</span>
              </div>
              {veg.map((isveg, i) => {
                return (
                  <div className="col-lg-1" key={i}>
                    <input
                      onChange={formik.handleChange}
                      type="radio"
                      value={isveg}
                      name="userVeg"
                      required
                    />
                    <span>{`${isveg}`}</span>
                  </div>
                );
              })}

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
