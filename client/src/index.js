import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

//theme
import { ThemeProvider } from "styled-components";
import { Default } from "./themes/Default";

//contexts
import StatusProvider from "./contexts/StatusContext";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={Default}>
      <StatusProvider>
        <App />
      </StatusProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
