import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Routes from "./routes/routes";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={Routes} />
);
