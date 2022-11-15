import React from "react";
import "./ENTRY_PAGE.scss";
import workout_timeimg from "../../Assets/Images/weight.svg";
import calorieimg from "../../Assets/Images/calories.svg";
import waterimg from "../../Assets/Images/water.svg";
import ADD_ENTRY from "../../Components/ADD ENTRY/ADD_ENTRY";

const ENTRY_PAGE = () => {
  return (
    <div className="entrypage-home">
      <div className="container box">
        <ADD_ENTRY ctype={"calories"} unit={"cal"} dashicon={calorieimg} />
        <hr />
        <ADD_ENTRY ctype={"water"} unit={"ml"} dashicon={waterimg} />
        <hr />
        <ADD_ENTRY
          ctype={"workout-time"}
          unit={"kg"}
          dashicon={workout_timeimg}
        />
      </div>
    </div>
  );
};

export default ENTRY_PAGE;
