import React from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "../features/User";
import { changeColor } from "../features/theme";
const Login = () => {
  const dispatch = useDispatch();
  return (
    <>
      <button
        onClick={() => {
          dispatch(login({ name: "ajay", age: 29, email: "ajay@example.com" }));
        }}
      >
        Login
      </button>
      <br />
      <br />
      <br />
      <button
        onClick={() => {
          dispatch(logout());
          dispatch(changeColor("grey"));
        }}
      >
        Logout
      </button>
    </>
  );
};

export default Login;
