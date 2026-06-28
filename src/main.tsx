import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { Themeprovide } from "./Theme/Theme.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Themeprovide>
        <App />
      </Themeprovide>
    </BrowserRouter>
  </StrictMode>
);
