import React, { useEffect, useState } from "react";
import "./WORKOUT_ENTRY.scss";
import { FormikProvider, useFormik } from "formik";
import axios from "axios";
import { env } from "../../config/config";
import { useNavigate } from "react-router-dom";

const WORKOUT_ENTRY = () => {
  let navigate = useNavigate();
  useEffect(() => {
    if (!window.localStorage.getItem("app-token")) {
      alert("Please Login");
      navigate("/");
    }
  }, []);
  const [isDatePicked, setIsDatePicked] = useState(false);
  const [currentDate, setCurrentDate] = useState("");
  const formik = useFormik({
    initialValues: {
      workoutTime: "",
    },

    enableReinitialize: true,
    onSubmit: async (values) => {
      try {
        values.entryDate = currentDate;
        values.email = window.localStorage.getItem("userEmail");
        let result = await axios.post(`${env.api}/userworkout/`, values, {
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
    <div className="workoutentry-main">
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
                {/*calories*/}
                <div className="form-outline mb-4">
                  <label>Workout Time (mins):</label>
                  <input
                    className="inputbox"
                    type="number"
                    value={formik.values.workoutTime}
                    onChange={formik.handleChange}
                    name="workoutTime"
                    required
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

export default WORKOUT_ENTRY;
