import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./styles/index.css";
import { DeviceProvider } from "./hooks/useDeviceType";
import { LanguageProvider } from "./components/LanguageSelector";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LanguageProvider><DeviceProvider><App /></DeviceProvider></LanguageProvider>
  </React.StrictMode>
);
