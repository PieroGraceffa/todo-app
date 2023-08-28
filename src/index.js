// Import necessary React modules and components.
import React from "react";
import ReactDOM from "react-dom";
// Import the Provider component from React Redux.
import { Provider } from "react-redux";
// Import the CSS styles for the app.
import "./index.css";
// Import the main App component.
import App from "./App";
// Import the Redux store.
import store from "./store";

// Render the application inside the Provider component.
ReactDOM.render(
  <Provider store={store}>
    {/* Wrapping the App component inside React.StrictMode for development checks */}
    <React.StrictMode>
      <App /> {/* Render the main App component */}
    </React.StrictMode>
  </Provider>,
  document.getElementById("root") // Mount the app in the element with the ID "root".
);
