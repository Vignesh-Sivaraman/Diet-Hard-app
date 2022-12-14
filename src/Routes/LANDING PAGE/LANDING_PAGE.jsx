import "./LANDING_PAGE.scss";

import React, { Suspense, lazy } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const LANDING_TOPBAR = lazy(() =>
  import("../../Components/LANDING TOP BAR/LANDING_TOPBAR")
);

const ROTATIONAL_SLIDER = lazy(() =>
  import("../../Components/ROTATIONAL SLIDER/ROTATIONAL_SLIDER")
);

const BUTTON = lazy(() => import("../../Centralized_Components/BUTTON/BUTTON"));

const LANDING_PAGE = () => {
  return (
    <Suspense>
      <div className="landing_page-main">
        <motion.div
          initial={{
            y: -200,
            transition: { type: "spring", duration: 2 },
          }}
          animate={{
            y: 0,
            transition: { type: "spring", duration: 2 },
          }}
          className="topbar"
        >
          <LANDING_TOPBAR />
        </motion.div>

        <div className="container-fluid content">
          <div className="row flex-column-reverse flex-lg-row ">
            <motion.div
              className="col-lg-6 description"
              initial={{
                scale: 0.1,
                transition: { type: "spring", duration: 2 },
              }}
              animate={{
                scale: 1,
                transition: { type: "spring", duration: 2 },
              }}
            >
              <div className="mainDesc">
                Welcome to Diet Hard, a one place solution for Your personal
                diet care.
              </div>
              <p className="addDesc">
                Here At Diet Hard, We focus on a single platform solution to
                tract your diet and fitness goals. So, Lets begin your
                prosperous health journey
              </p>
              <motion.div
                initial={{
                  scale: 0.1,
                  transition: { type: "spring", duration: 2, delay: 0.25 },
                }}
                animate={{
                  scale: 1,
                  transition: { type: "spring", duration: 2, delay: 0.25 },
                }}
              >
                <Link to="/sign-up" style={{ textDecoration: "none" }}>
                  <BUTTON type="button" buttonType={"contrast"}>
                    Get Started
                  </BUTTON>
                </Link>
              </motion.div>
            </motion.div>
            <motion.div
              className="col-lg-6 slider"
              initial={{
                opacity: 0,
                transition: { type: "ease", duration: 2, delay: 1 },
              }}
              animate={{
                opacity: 1,
                transition: { type: "ease", duration: 2, delay: 1 },
              }}
            >
              <ROTATIONAL_SLIDER />
            </motion.div>
          </div>
        </div>
      </div>
    </Suspense>
  );
};

export default LANDING_PAGE;
