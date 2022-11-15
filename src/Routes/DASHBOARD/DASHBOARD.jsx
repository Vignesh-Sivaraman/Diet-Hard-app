import React from "react";
import DASHCARD from "../../Components/DASHCARD/DASHCARD";
import "./DASHBOARD.scss";
import workout_timeimg from "../../Assets/Images/weight.svg";
import calorieimg from "../../Assets/Images/calories.svg";
import waterimg from "../../Assets/Images/water.svg";

const DASHBOARD = () => {
  return (
    <div className="dashboard-home">
      <div className="container box">
        <DASHCARD ctype={"calories"} unit={"cal"} dashicon={calorieimg} />
        <hr />
        <DASHCARD ctype={"water"} unit={"ml"} dashicon={waterimg} />
        <hr />
        <DASHCARD
          ctype={"workout-time"}
          unit={"mins"}
          dashicon={workout_timeimg}
        />
      </div>
    </div>
  );
};

export default DASHBOARD;
