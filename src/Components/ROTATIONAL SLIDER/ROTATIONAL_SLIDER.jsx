import React from "react";
import "./ROTATIONAL_SLIDER.scss";
import landing_img1 from "../../Assets/Images/Landing_Img_1.jpg";
import landing_img2 from "../../Assets/Images/Landing_Img_2.jpg";
import landing_img3 from "../../Assets/Images/Landing_Img_3.jpg";
const ROTATIONAL_SLIDER = () => {
  return (
    <div className="rotational_slider-main">
      <span className="outer-circle"> </span>
      <span className="inner-circle"> </span>
      <img
        width="100px"
        className="item"
        style={{ animationDelay: "-2s" }}
        alt="display_images"
        src={landing_img1}
      />
      <img
        width="100px"
        className="item"
        style={{ animationDelay: "-4s" }}
        alt="display_images"
        src={landing_img2}
      />
      <img
        width="100px"
        className="item"
        style={{ animationDelay: "-6s" }}
        alt="display_images"
        src={landing_img3}
      />
    </div>
  );
};

export default ROTATIONAL_SLIDER;
