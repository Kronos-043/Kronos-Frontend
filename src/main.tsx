import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./App";
import { Route, Routes, HashRouter } from "react-router-dom";
import Settings from "./screens/settings/Settings";
import About from "./screens/about/About";
import Classes from "./screens/classes/Classes";
import LastSchedules from "./screens/lastschedules/LastSchedules";
import EditSchedule from "./screens/editschedule/EditSchedule";
import NewSchedule from "./screens/newschedule/NewSchedule";
import Teachers from "./screens/teachers/Teachers";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/classes" element={ <Classes /> } />
        <Route path="/lastSchedules" element={ <LastSchedules /> } />
        <Route path="/editSchedule" element={ <EditSchedule /> } />
        <Route path="/newSchedule" element={ <NewSchedule /> } />
        <Route path="/teachers" element={ <Teachers /> } />
        <Route path="/settings" element={ <Settings /> } />
        <Route path="/about" element={ <About /> } />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
