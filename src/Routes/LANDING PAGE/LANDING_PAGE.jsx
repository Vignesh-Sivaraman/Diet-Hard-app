import "./LANDING_PAGE.scss";

import React from "react";
import ROTATIONAL_SLIDER from "../../Components/ROTATIONAL SLIDER/ROTATIONAL_SLIDER";
import LANDING_TOPBAR from "../../Components/LANDING TOP BAR/LANDING_TOPBAR";
import BUTTON from "../../centralized components/BUTTON/BUTTON";

const LANDING_PAGE = () => {
  return (
    <div className="landing_page-main">
      <div className="topbar">
        <LANDING_TOPBAR />
      </div>

      <div className="container-fluid content">
        <div className="row flex-column-reverse flex-lg-row ">
          <div className="col-lg-6 description ms-5 ps-5">
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus
              sit amet dictum sit amet justo donec. Lacinia at quis risus sed
              vulputate odio.
            </p>
            <BUTTON type="button" navPath={"/entry"} buttonType={"contrast"}>
              Get Started
            </BUTTON>
          </div>
          <div className="col-lg-6 slider">
            <ROTATIONAL_SLIDER />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LANDING_PAGE;
