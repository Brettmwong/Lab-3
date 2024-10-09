import { useState } from "react";
import PropTypes from "prop-types";
import colors from "../src/data/data.js.";

const ColorBox = ({ color }) => {
  const [currentColor, setCurrentColor] = useState(color);

  const changeColor = () => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setCurrentColor(randomColor);
  };

  return (
    <div
      onClick={changeColor}
      style={{
        backgroundColor: currentColor,
        width: "50px",
        height: "50px",
      }}
    ></div>
  );
};

ColorBox.propTypes = {
  color: PropTypes.string.isRequired,
};

export default ColorBox;
