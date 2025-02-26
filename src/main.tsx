import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./App";
import { BrowserRouter } from "react-router-dom";
import { StrictMode } from "react";

createRoot(document.getElementById("root")!).render(
  <StrictMode >
    <BrowserRouter basename="micro-tasks3">
      <App />
    </BrowserRouter>
  </StrictMode>
);
