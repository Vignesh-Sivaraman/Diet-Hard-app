import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import BUTTON from "../../Centralized_Components/BUTTON/BUTTON";
import "./DASHCARD.scss";

const DASHCARD = (props) => {
  useEffect(() => {}, []);

  return (
    <div className="dashbox container">
      <div className={`dash-title ${props.ctype}`}>
        <span>
          {" "}
          Your Daily summary {`(${new Date().toISOString().slice(0, 10)})`}
        </span>
        <span className="topic">
          <span>DAILY GOAL STATUS:</span>
          <span className={`status ${props.status}`}> {props.status}</span>
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
            <span className="dash-value">
              {props.remaining} {props.unit}
            </span>

            <Link className="entry-btn" to={`/home/${props.page}`}>
              <BUTTON type="button" buttonType={"contrast"}>
                Add Entry
              </BUTTON>
            </Link>
          </div>

          <span className="dash-goal">
            Your goal: <b>{props.goal}</b> {props.unit}
          </span>
        </div>
      </div>
    </div>
  );
};

export default DASHCARD;
