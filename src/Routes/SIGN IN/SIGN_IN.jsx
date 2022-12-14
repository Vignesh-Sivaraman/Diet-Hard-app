import "./SIGN_IN.scss";
import React from "react";
import logo from "../../Assets/Images/Diet_Hard_Logo.svg";
import { FormikProvider, useFormik } from "formik";
import signInImage from "../../Assets/Images/sign_in.svg";
import BUTTON from "../../Centralized_Components/BUTTON/BUTTON";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";
import { env } from "../../config/config";

const SIGN_IN = () => {
  const navigate = useNavigate();
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
        let loginData = await axios.post(`${env.api}/users/signin`, values);

        if (loginData.status === 200) {
          window.localStorage.setItem("app-token", loginData.data.token);
          window.localStorage.setItem("userEmail", loginData.data.userEmail);
          window.localStorage.setItem(
            "userDetailsReceived",
            loginData.data.userDetailsReceived
          );
          if (loginData.data.userDetailsReceived) {
            navigate("/home");
          } else {
            navigate("/additionalinfo");
          }
        }
      } catch (err) {
        alert(
          `Error Code: ${err.response.status}- ${err.response.data.message}`
        );
      }
    },
  });
  return (
    <motion.div
      className="signInPage"
      initial={{
        x: 1000,
        transition: { type: "ease", duration: 1 },
      }}
      animate={{
        x: 0,
        transition: { type: "ease", duration: 1 },
      }}
    >
      <div className="forms-container">
        <div className="signin-signup">
          <FormikProvider value={formik}>
            <form className="sign-in-form" onSubmit={formik.handleSubmit}>
              <Link to="/">
                <img
                  width="100px"
                  height="100px"
                  src={logo}
                  alt="logo"
                  className="m-3"
                />
              </Link>

              <h2 className="title">Sign in</h2>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input
                  type="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  name="email"
                  placeholder="email"
                />
              </div>
              <span className="fw-bold" style={{ color: "orange" }}>
                {formik.errors.email}
              </span>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input
                  type="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  name="password"
                  placeholder="password"
                />
              </div>
              <div className="fw-bold" style={{ color: "orange" }}>
                {formik.errors.password}
              </div>
              <Link style={{ textDecoration: "none" }} to="/forpass">
                <p className="forpassword mb-2">Forgot Password?</p>
              </Link>

              <div className="mb-1">
                <BUTTON type="submit" buttonType={"contrast"}>
                  Login
                </BUTTON>
              </div>
            </form>
          </FormikProvider>
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here ?</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
              ex ratione. Aliquid!
            </p>
            <Link
              to="/sign-up"
              className="mb-1"
              style={{ textDecoration: "none" }}
            >
              <BUTTON type="button" buttonType={"white"}>
                sign up
              </BUTTON>
            </Link>
          </div>
          <img src={signInImage} className="image" alt="" />
        </div>
      </div>
    </motion.div>
  );
};

export default SIGN_IN;
