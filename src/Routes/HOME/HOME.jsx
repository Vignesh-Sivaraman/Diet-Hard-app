import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import TOPBAR from "../../Components/TOP BAR/TOPBAR";

const HOME = () => {
  useEffect(() => {}, []);

  return (
    <div>
      <TOPBAR></TOPBAR>

      <div className="homecontent">
        <Outlet />
      </div>
    </div>
  );
};

export default HOME;
