import React from "react";
import { Link } from "react-router-dom";
import BUTTON from "../../centralized components/BUTTON/BUTTON";
import DASHCARD from "../../Components/DASHCARD/DASHCARD";
import "./DASHBOARD.scss";
import weightimg from "../../Assets/Images/weight.svg";
import calorieimg from "../../Assets/Images/calories.svg";
import waterimg from "../../Assets/Images/water.svg";

const DASHBOARD = () => {
  return (
    <div className="dashboard-home">
      <div className="container box">
        <DASHCARD ctype={"calories"} unit={"cal"} dashicon={calorieimg} />
        <hr />
        <DASHCARD ctype={"water"} unit={"cal"} dashicon={waterimg} />
        <hr />
        <DASHCARD ctype={"weight"} unit={"cal"} dashicon={weightimg} />
      </div>
    </div>
  );
};

export default DASHBOARD;
