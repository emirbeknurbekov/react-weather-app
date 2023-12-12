import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client"; // Import createRoot from react-dom/client
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

const root = createRoot(document.getElementById("root"));

root.render(
  <>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </>
);

registerServiceWorker();
