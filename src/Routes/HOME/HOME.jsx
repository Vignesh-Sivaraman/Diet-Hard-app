import React from "react";
import { Outlet } from "react-router-dom";
import TOPBAR from "../../Components/TOP BAR/TOPBAR";
import "./HOME.scss";

const HOME = () => {
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
