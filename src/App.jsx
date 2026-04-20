import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import "./App.css";

import { Home } from "./Pages/Home.jsx";
import { SearchMalaskra } from "./pages/SearchMalaskra.jsx";
import { About } from "./pages/About.jsx";
import { ThingmennDetails } from "./pages/ThingmennDetails.jsx";
import { MalaskraDetails } from "./pages/MalDetails.jsx";

import { Navigation } from "./assets/Navigation/navigation.jsx";

function App() {
  return (
    <>
      <Navigation />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/leita-i-malaskra" element={<SearchMalaskra />} />
        <Route path="/um-siduna" element={<About />} />
        <Route path="/thingmadur/:id" element={<ThingmennDetails />} />
        <Route path="/nanar/:id" element={<MalaskraDetails />} />
      </Routes>
    </>
  );
}

export default App;
