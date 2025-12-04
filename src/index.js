import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ToolsProvider } from "./contexts/ToolsContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ToolsProvider>
      <App />
    </ToolsProvider>
  </React.StrictMode>
);
