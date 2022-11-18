import React, { useEffect, useState } from "react";
import DASHCARD from "../../Components/DASHCARD/DASHCARD";
import "./DASHBOARD.scss";
import workout_timeimg from "../../Assets/Images/weight.svg";
import calorieimg from "../../Assets/Images/calories.svg";
import waterimg from "../../Assets/Images/water.svg";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { env } from "../../config/config";

const DASHBOARD = () => {
  let navigate = useNavigate();
  let userEmail = window.localStorage.getItem("userEmail");
  let [calorieGoal, setCalorieGoal] = useState(0);
  let [remainingCal, setRemainingCal] = useState(0);

  const getDashDetails = async () => {
    try {
      let values = {};
      values.presentDate = new Date().toISOString().slice(0, 10);
      values.email = userEmail;
      let result = await axios.post(
        `${env.api}/usercalories/getcalories`,
        values,
        {
          headers: {
            Authorization: window.localStorage.getItem("app-token"),
          },
        }
      );
      if (result.status === 200) {
        console.log(result.data);
        setCalorieGoal(result.data.userCalories);
        setRemainingCal(result.data.dailyRemainingCal);
      }
    } catch (err) {
      alert(`Error Code: ${err.response.status}- ${err.response.data.message}`);
    }
  };

  useEffect(() => {
    if (!window.localStorage.getItem("app-token")) {
      alert("Please Login");
      navigate("/");
    } else {
      getDashDetails();
    }
  }, []);
  return (
    <div className="dashboard-home">
      <div className="container box">
        <DASHCARD
          ctype={"calories"}
          unit={"cal"}
          dashicon={calorieimg}
          page={"caloriesentry"}
          goal={calorieGoal}
          remaining={remainingCal}
        />
        <hr />
        <DASHCARD
          ctype={"water"}
          unit={"ml"}
          dashicon={waterimg}
          page={"addentry"}
          goal={0}
          remaining={0}
        />
        <hr />
        <DASHCARD
          ctype={"workout-time"}
          unit={"mins"}
          dashicon={workout_timeimg}
          page={"addentry"}
          goal={0}
          remaining={0}
        />
      </div>
    </div>
  );
};

export default DASHBOARD;
