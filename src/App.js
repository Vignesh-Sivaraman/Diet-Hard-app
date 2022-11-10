import "bootstrap/dist/css/bootstrap.min.css";
import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import CALENDAR from "./centralized components/CALENDAR/CALENDAR";
import ADDITIONAL_INFO from "./Routes/ADDITIONAL INFO/ADDITIONAL_INFO";
import GET_RECIPES from "./Routes/GET RECIPES/GET_RECIPES";
import HOME from "./Routes/HOME/HOME";
import INSTANT_DIET from "./Routes/INSTANT DIET/INSTANT_DIET";

import LANDING_PAGE from "./Routes/LANDING PAGE/LANDING_PAGE";
import MEAL_PLAN from "./Routes/MEAL PLAN/MEAL_PLAN";
import SIGN_IN from "./Routes/SIGN IN/SIGN_IN";
import SIGN_UP from "./Routes/SIGN UP/SIGN_UP";
// const LANDING_PAGE = lazy(() => import("./Routes/LANDING PAGE/LANDING_PAGER"));
// const SIGN_IN = lazy(() => import("./Routes/SIGN IN/SIGN_IN"));
// const SIGN_UP = lazy(() => import("./Routes/SIGN UP/SIGN_UP"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<LANDING_PAGE />} />
      <Route path="/instantdiet" element={<INSTANT_DIET />} />
      <Route path="/sign-in" element={<SIGN_IN />} />
      <Route path="/sign-up" element={<SIGN_UP />} />
      <Route path="/calendar" element={<CALENDAR />} />
      <Route path="/additionalInfo" element={<ADDITIONAL_INFO />} />
      <Route path="/home" element={<HOME />}>
        <Route index element={<GET_RECIPES />} />
        <Route path="mealplan" element={<MEAL_PLAN />} />
      </Route>
    </Routes>
  );
}

export default App;
