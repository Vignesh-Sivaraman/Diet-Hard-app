import "bootstrap/dist/css/bootstrap.min.css";
import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import INSTANT_DIET from "./Routes/INSTANT DIET/INSTANT_DIET";

import LANDING_PAGE from "./Routes/LANDING PAGE/LANDING_PAGE";
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
    </Routes>
  );
}

export default App;
