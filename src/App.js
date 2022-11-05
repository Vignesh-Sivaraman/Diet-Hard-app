import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";

import LANDING_PAGE from "./Routes/LANDING PAGE/LANDING_PAGE";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LANDING_PAGE />} />
    </Routes>
  );
}

export default App;
