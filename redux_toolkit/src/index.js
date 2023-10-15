import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import userReducer from "./features/User";
import themeReducer from "./features/theme";
import allUsers from "./features/listUsers";
const store = configureStore({
  reducer: {
    user: userReducer,
    theme: themeReducer,
    allUsers: allUsers,
  },
});
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
