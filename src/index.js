// src/index.js
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeModeProvider } from "./contexts/ThemeModeContext";
import { HelmetProvider } from "react-helmet-async";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <ThemeModeProvider>
        <App />
      </ThemeModeProvider>
    </HelmetProvider>
  </React.StrictMode>
);
