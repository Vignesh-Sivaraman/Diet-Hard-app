import { useNavigate } from "react-router-dom";
import "./BUTTON.scss";

const BUTTON_TYPE_CLASSES = {
  contrast: "contrast", //creates button in #ffaf66 background
  white: "white", //creates button in white background
};

const BUTTON = ({
  children,
  buttonType,
  navPath = null,
  click,
  ...otherProps
}) => {
  const navigate = useNavigate();

  const navigatePage = () => navigate(`navPath`);
  return (
    <button
      className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
      {...otherProps}
      onClick={navPath ? navigatePage : click}
    >
      {children}
    </button>
  );
};

export default BUTTON;
