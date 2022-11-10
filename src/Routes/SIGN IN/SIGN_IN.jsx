import "./SIGN_IN.scss";
import React, { useState } from "react";
import logo from "../../Assets/Images/Diet_Hard_Logo.svg";
import { FormikProvider, useFormik } from "formik";
import signInImage from "../../Assets/Images/sign_in.svg";
import log from "../../Assets/Images/log.svg";
import BUTTON from "../../centralized components/BUTTON/BUTTON";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const SIGN_IN = () => {
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
        console.log(values);
      } catch (error) {
        alert(
          `Error Code: ${error.response.status}- ${error.response.data.message}`
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
              <p className="forpassword mb-2">Forgot Password?</p>
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
            <Link className="mb-1" style={{ textDecoration: "none" }}>
              <BUTTON type="submit" buttonType={"white"}>
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
