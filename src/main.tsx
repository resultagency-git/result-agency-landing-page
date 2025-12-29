import React from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

import "./moment";

import "./styles/tooltip.scss";
import "./index.scss";

// Get the root DOM node
const domNode = document.getElementById("root") as HTMLElement;

// Create React root
const root = createRoot(domNode);

// Render the app
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
