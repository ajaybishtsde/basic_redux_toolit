import React from "react";
import Profile from "./components/Profile";
import Login from "./components/Login";
import ChangeColor from "./components/ChangeColor";
import { useDispatch } from "react-redux";
import { listUsers } from "./features/listUsers";

const App = () => {
  const dispatch = useDispatch();
  return (
    <>
      <Profile />
      <Login />
      <br />
      <br />
      <br />
      <ChangeColor />
      <br />
      <br />
      <button
        onClick={() => {
          dispatch(listUsers());
        }}
      >
        All Users
      </button>
    </>
  );
};

export default App;
