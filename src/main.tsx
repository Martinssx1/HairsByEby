import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { Themeprovide } from "./Theme/Theme.tsx";

import HairContext from "./Context/HairContext";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Themeprovide>
        <HairContext>
          <App />
        </HairContext>
      </Themeprovide>
    </BrowserRouter>
  </StrictMode>,
);
