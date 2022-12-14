import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import CALORIES_ENTRY from "./Components/CALORIES ENTRY/CALORIES_ENTRY";
import ADDITIONAL_INFO from "./Routes/ADDITIONAL INFO/ADDITIONAL_INFO";
import DASHBOARD from "./Routes/DASHBOARD/DASHBOARD";
import EMAIL_VERIFY from "./Routes/EMAIL VERIFY/EMAIL_VERIFY";
import ENTRY_PAGE from "./Routes/ENTRYPAGE/ENTRY_PAGE";
import FORGOT_PASSWORD from "./Routes/FORGOT PASSWORD/FORGOT_PASSWORD";
import GET_RECIPES from "./Routes/GET RECIPES/GET_RECIPES";
import HOME from "./Routes/HOME/HOME";
import CALENDAR from "./Centralized_Components/CALENDAR/CALENDAR";

import LANDING_PAGE from "./Routes/LANDING PAGE/LANDING_PAGE";
import MEAL_PLAN from "./Routes/MEAL PLAN/MEAL_PLAN";
import PASSWORD_VERIFY from "./Routes/PASSWORD VERIFY/PASSWORD_VERIFY";
import RESET_PASS from "./Routes/RESET PASS/RESET_PASS";
import SIGN_IN from "./Routes/SIGN IN/SIGN_IN";
import SIGN_UP from "./Routes/SIGN UP/SIGN_UP";
import WATER_ENTRY from "./Components/WATER ENTRY/WATER_ENTRY";
import WORKOUT_ENTRY from "./Components/WORKOUT ENTRY/WORKOUT_ENTRY";
import MEAL_DETAILS from "./Routes/MEAL DETAILS/MEAL_DETAILS";
import RECIPES from "./Routes/RECIPES/RECIPES";
import ABOUT_US from "./Routes/ABOUT US/ABOUT_US";

function App() {
  return (
    <Routes>
      {/* user sign in, sign up, reset pass routes*/}
      <Route path="/" element={<LANDING_PAGE />} />
      <Route path="/aboutus" element={<ABOUT_US />} />
      <Route path="/sign-up" element={<SIGN_UP />} />
      <Route path="/:id/verify/:token" element={<EMAIL_VERIFY />} />
      <Route path="/sign-in" element={<SIGN_IN />} />
      <Route path="/forpass" element={<FORGOT_PASSWORD />} />
      <Route path="/forpass/:id/verify/:token" element={<PASSWORD_VERIFY />} />
      <Route path="/resetpass" element={<RESET_PASS />} />

      <Route path="/additionalInfo" element={<ADDITIONAL_INFO />} />

      <Route path="/calendar" element={<CALENDAR />} />

      {/* in-app routes*/}
      <Route path="/home" element={<HOME />}>
        <Route index element={<DASHBOARD />} />
        <Route path="mealplan" element={<MEAL_PLAN />} />
        <Route path="addentry" element={<ENTRY_PAGE />} />
        <Route path="caloriesentry" element={<CALORIES_ENTRY />} />
        <Route path="waterentry" element={<WATER_ENTRY />} />
        <Route path="workoutentry" element={<WORKOUT_ENTRY />} />
        <Route path="getrecipes" element={<GET_RECIPES />} />
        <Route path="mealdetails" element={<MEAL_DETAILS />} />
        <Route path="recipe" element={<RECIPES />} />
      </Route>
    </Routes>
  );
}

export default App;
