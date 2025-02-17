import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import MainLayout from "./layouts/MainLayout.jsx";
import HomePage from "./pages/Home.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <MainLayout>
        <HomePage />
      </MainLayout>
    </BrowserRouter>
  </StrictMode>
);
