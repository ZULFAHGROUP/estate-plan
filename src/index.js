import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { AuthProvider } from "./contextAPI/AuthProvider";
import { DarkModeContextProvider } from "./context/darkModeContext";
import { Provider } from "react-redux";
import store from "./redux/store";

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <DarkModeContextProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </DarkModeContextProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
