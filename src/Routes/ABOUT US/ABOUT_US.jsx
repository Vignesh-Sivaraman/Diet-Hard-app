import { useNavigate } from "react-router-dom";
import BUTTON from "../../Centralized_Components/BUTTON/BUTTON";
import "./ABOUT_US.scss";
import logo from "../../Assets/Images/Diet_Hard_Logo.svg";
const ABOUT_US = () => {
  let navigate = useNavigate();
  return (
    <div className="aboutus-home">
      <div className="container box text-center">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "10px auto",
          }}
        >
          {" "}
          <img
            width="100px"
            height="100px"
            src={logo}
            alt="logo"
            className="me-5"
          />
        </div>

        <hr />
        <div className="general">
          Greetings, This is Vignesh Siva, This web app was created for my
          personal developer portfolio. Hope you liked it. use the below links
          for Source Code
          <div className="linkbtn">
            {" "}
            <a
              href={"https://github.com/Vignesh-Sivaraman/Diet-Hard-app.git"}
              style={{ textDecoration: "none" }}
              target="blank"
            >
              <BUTTON buttonType={"contrast"}>CLIENT</BUTTON>
            </a>
            <a
              href={"https://github.com/Vignesh-Sivaraman/Diet-Hard-server.git"}
              style={{ textDecoration: "none" }}
              target="blank"
            >
              <BUTTON buttonType={"contrast"}>SERVER</BUTTON>
            </a>
          </div>
        </div>
        <hr />

        <div className="disclaimer">
          Disclaimer: All datas provided in this app are only mock data. Do not
          consider the datas provided in this web app for your personal health
          care. May the Force be with you.
        </div>
        <hr />
        <div
          className="back"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "10px auto",
          }}
        >
          <BUTTON
            buttonType={"contrast"}
            onClick={() => {
              navigate("/");
            }}
          >
            BACK TO HOME
          </BUTTON>
        </div>
      </div>
    </div>
  );
};

export default ABOUT_US;
