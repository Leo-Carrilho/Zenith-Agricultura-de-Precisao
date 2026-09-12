import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./styles.css";
import "./hero.css";
import { DeviceProvider } from "./hooks/useDeviceType";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DeviceProvider><App /></DeviceProvider>
  </React.StrictMode>
);
