import React from "react";
import { Link } from "react-router-dom";
import BUTTON from "../../Centralized Components/BUTTON/BUTTON";
import "./DASHCARD.scss";

const DASHCARD = (props) => {
  return (
    <div className="dashbox container">
      <div className={`dash-title ${props.ctype}`}>
        <span> Your Daily summary</span>
        <span className="topic">
          <span>DAY STREAK:</span> 10000
        </span>
      </div>

      <div className="dashcontent-box row">
        <div
          className="col-lg-4 d-flex align-items-center justify-content-center "
          style={{ margin: "20px 0" }}
        >
          <img
            src={props.dashicon}
            height="200px"
            width="200px"
            alt={props.ctype}
          />
        </div>

        <div className="col-lg-8 d-flex flex-column align-items-center justify-content-center ">
          <p> {props.ctype} Remaining for the day</p>
          <div className="dash-data">
            <span className="dash-value">1800 {props.unit}</span>

            <Link className="entry-btn" to="/home/addentry">
              <BUTTON type="button" buttonType={"contrast"}>
                Add Entry
              </BUTTON>
            </Link>
          </div>

          <span className="dash-goal">
            Your goal: <b>{1000}</b> {props.unit}
          </span>
        </div>
      </div>
    </div>
  );
};

export default DASHCARD;
