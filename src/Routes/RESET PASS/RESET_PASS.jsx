import React, { useState } from "react";
import { FormikProvider, useFormik } from "formik";
import { env } from "../../config/config";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function RESET_PASS() {
  let [isLoading, setIsLoading] = useState(false);
  let navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: (values) => {
      let errors = {};
      for (let keys in values) {
        if (values[keys] === "") {
          errors[keys] = `Please Enter ${keys}`;
        }
      }
      return errors;
    },
    onSubmit: async (values) => {
      try {
        setIsLoading(true);

        let loginData = await axios.post(`${env.api}/users/resetpass`, values);

        if (loginData.status === 200) {
          alert(loginData.data.message);
          setIsLoading(false);
          navigate("/sign-in");
        }
      } catch (error) {
        alert(
          `Error Code: ${error.response.status}- ${error.response.data.message}`
        );
        setIsLoading(false);
      }
    },
  });
  return (
    <div
      className="container-fluid h-custom2 d-flex justify-content-center align-items-center flex-column"
      style={{ position: "relative", height: "100%" }}
    >
      {isLoading ? (
        <div
          style={{
            textAlign: "center",
            color: "orange",
            fontWeight: "bold",
            fontSize: "30px",
          }}
        >
          Loading...
        </div>
      ) : (
        ""
      )}
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col-lg-12">
          <h1
            className=" mb-4"
            style={{
              fontSize: "50px",
              fontFamily: "pacifico",
            }}
          >
            Please enter your email id & new password
          </h1>
          <FormikProvider value={formik}>
            <form onSubmit={formik.handleSubmit}>
              <div className="form-outline mb-4">
                <label className="form-label fw-bold fs-3">Email address</label>
                <input
                  className="form-control"
                  type="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  name="email"
                />
                <span className="fw-bold" style={{ color: "orange" }}>
                  {formik.errors.email}
                </span>
              </div>
              <div className="form-outline mb-4">
                <label className="form-label  fw-bold fs-3">
                  Enter New Password
                </label>
                <input
                  className="form-control"
                  type="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  name="password"
                />
                <span className="fw-bold" style={{ color: "orange" }}>
                  {formik.errors.password}
                </span>
              </div>
              <div className="text-center text-lg-start mt-3 pt-2">
                <input
                  type={"submit"}
                  value="submit"
                  className="btn btn-warning btn-lg"
                  style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                />
              </div>
            </form>
          </FormikProvider>
        </div>
      </div>
    </div>
  );
}

export default RESET_PASS;
