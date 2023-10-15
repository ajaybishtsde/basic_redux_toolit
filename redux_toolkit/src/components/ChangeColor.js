import React from "react";
import { useDispatch } from "react-redux";
import { changeColor } from "../features/theme";
const ChangeColor = () => {
  const dispatch = useDispatch();
  const [color, setColor] = React.useState("");
  return (
    <>
      <input
        type="text"
        onChange={(e) => {
          setColor(e.target.value);
        }}
      />
      <button
        onClick={() => {
          dispatch(changeColor(color));
        }}
      >
        Chnage Color
      </button>
    </>
  );
};

export default ChangeColor;
