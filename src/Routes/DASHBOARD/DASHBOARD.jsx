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
  let [remainingCal, setRemainingCal] = useState(1000);
  let [waterGoal, setWaterGoal] = useState(0);
  let [remainingWater, setRemainingWater] = useState(3700);
  let [workoutGoal, setWorkoutGoal] = useState(0);
  let [remainingWorkout, setRemainingWorkout] = useState(120);
  // let [calorieStatus, setCalorieStatus] = useState("pending");
  // let [water, setWaterStatus] = useState("pending");
  // let [workoutStatus, setWorkoutStatus] = useState("pending");

  const getDashDetails = async () => {
    try {
      let values = {};
      values.presentDate = new Date().toISOString().slice(0, 10);
      values.email = userEmail;
      let result = await axios.post(`${env.api}/reports/getdashdata`, values, {
        headers: {
          Authorization: window.localStorage.getItem("app-token"),
        },
      });
      if (result.status === 200) {
        setCalorieGoal(result.data.userCalories);
        setRemainingCal(result.data.dailyRemainingCal);
        setWaterGoal(result.data.userWater);
        setRemainingWater(result.data.dailyRemainingWater);
        setWorkoutGoal(result.data.userWorkout);
        setRemainingWorkout(result.data.dailyRemainingWorkout);
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
          status={remainingCal === 0 ? "Achieved" : "Pending"}
        />
        <hr />
        <DASHCARD
          ctype={"water"}
          unit={"ml"}
          dashicon={waterimg}
          page={"waterentry"}
          goal={waterGoal}
          remaining={remainingWater}
          status={remainingWater === 0 ? "Achieved" : "Pending"}
        />
        <hr />
        <DASHCARD
          ctype={"workout-time"}
          unit={"mins"}
          dashicon={workout_timeimg}
          page={"workoutentry"}
          goal={workoutGoal}
          remaining={remainingWorkout}
          status={remainingWorkout === 0 ? "Achieved" : "Pending"}
        />
      </div>
    </div>
  );
};

export default DASHBOARD;
