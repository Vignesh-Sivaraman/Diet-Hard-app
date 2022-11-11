import "./SIGN_UP.scss";
import React, { useState } from "react";
import logo from "../../Assets/Images/Diet_Hard_Logo.svg";
import { FormikProvider, useFormik } from "formik";
import signInImage from "../../Assets/Images/sign_in.svg";
import log from "../../Assets/Images/log.svg";
import BUTTON from "../../centralized components/BUTTON/BUTTON";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { env } from "../../config/config";
import axios from "axios";

const SIGN_UP = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
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
      if (values.password !== values.confirmPassword) {
        alert("passwords do not match");
        return;
      }
      try {
        let user = await axios.post(`${env.api}/users/register`, values);
        if (user.status === 200) {
          alert(user.data.message);
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
      className="signUpPage sign-up-mode "
      initial={{
        x: -1000,
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
            <form onSubmit={formik.handleSubmit} className="sign-up-form">
              <Link to="/">
                <img
                  width="100px"
                  height="100px"
                  src={logo}
                  alt="logo"
                  className="m-3"
                />
              </Link>
              <h2 className="title">Sign up</h2>

              <div className="input-field">
                <input
                  type="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  name="email"
                  placeholder="email"
                />
              </div>
              <div className="fw-bold" style={{ color: "orange" }}>
                {formik.errors.email}
              </div>
              <div className="input-field mb-3">
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
              <div className="input-field mb-3">
                <input
                  type="password"
                  value={formik.values.confirmPassword}
                  onChange={formik.handleChange}
                  name="confirmPassword"
                  placeholder="confirm Password"
                />
              </div>
              <div className="fw-bold" style={{ color: "orange" }}>
                {formik.errors.confirmPassword}
              </div>
              <div className="mb-1">
                <BUTTON type="submit" buttonType={"contrast"}>
                  Sign up
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
            <button className="btn transparent" id="sign-up-btn">
              Sign up
            </button>
          </div>
          <img src={signInImage} className="image" alt="" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>One of us ?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              laboriosam ad deleniti.
            </p>
            <Link
              to="/sign-in"
              className="mb-1"
              style={{ textDecoration: "none" }}
            >
              <BUTTON type="button" buttonType={"white"}>
                sign in
              </BUTTON>
            </Link>
          </div>
          <img src={log} className="image" alt="" />
        </div>
      </div>
    </motion.div>
  );
};

export default SIGN_UP;
