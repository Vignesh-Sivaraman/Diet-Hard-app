import React, { useEffect, useState } from "react";
import "./WATER_ENTRY.scss";
import { FormikProvider, useFormik } from "formik";
import axios from "axios";
import { env } from "../../config/config";

const WATER_ENTRY = () => {
  const [isDatePicked, setIsDatePicked] = useState(false);
  const [currentDate, setCurrentDate] = useState("");
  const formik = useFormik({
    initialValues: {
      waterQty: "",
    },

    enableReinitialize: true,
    onSubmit: async (values) => {
      try {
        values.entryDate = currentDate;
      } catch (error) {
        alert(
          `Error Code: ${error.response.status}- ${error.response.data.message}`
        );
      }
    },
  });
  return (
    <div className="waterentry-main">
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
          </form>
        </FormikProvider>
      </div>
    </div>
  );
};

export default WATER_ENTRY;
