import React from 'react'
import ReactDOM from "react-dom/client";
import "./index.css";
import "./../i18n.config.ts";
import HomePage from "./pages/Home.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HomePage />
  </React.StrictMode>
);
