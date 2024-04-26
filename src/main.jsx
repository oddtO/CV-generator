import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GeneralInfoProvider } from "./components/contexts/general-info";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GeneralInfoProvider>
      <App />
    </GeneralInfoProvider>
  </React.StrictMode>,
);
