import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import INSTANT_DIET from "./Routes/INSTANT DIET/INSTANT_DIET";

import LANDING_PAGE from "./Routes/LANDING PAGE/LANDING_PAGE";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LANDING_PAGE />} />
      <Route path="/instantdiet" element={<INSTANT_DIET />} />
    </Routes>
  );
}

export default App;
