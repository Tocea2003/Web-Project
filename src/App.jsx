import { Route, Routes } from "react-router-dom";
import Home from "./Routes/Home";
import Cafenea from "./Routes/Cafenea";
import Tabere from "./Routes/Tabere";
import React from "react";
import { Auth } from "./Routes/auth";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/cafenea" element={<Cafenea />} />
        <Route path="/tabere" element={<Tabere />} />
      </Routes>
    </div>
  );
}

export default App;
