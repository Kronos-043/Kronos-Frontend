import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./App";
import { Route, Routes, HashRouter } from "react-router-dom";
import Settings from "./screens/settings/Settings";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/settings" element={ <Settings /> } />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
