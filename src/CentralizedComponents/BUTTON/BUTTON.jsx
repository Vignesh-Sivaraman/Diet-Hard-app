import "./BUTTON.scss";

const BUTTON_TYPE_CLASSES = {
  contrast: "contrast", //creates button in #ffaf66 background
  white: "white", //creates button in white background
};

const BUTTON = ({
  children,
  buttonType,

  ...otherProps
}) => {
  return (
    <button
      className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default BUTTON;
