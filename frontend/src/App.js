import "./App.css";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { React, useState, useEffect } from "react";
import LoginPage from "./Components/LoginPage/login";
import RegisterPage from "./Components/RegisterPage/Register";
import Navigation from "./Components/Navigation/navigation";
import BodyCarTest from "./Components/CarTestPage/BodyTestPage/BodyTest";
import HybridCarTest from "./Components/CarTestPage/HybridTestPage/HybridTest";
import History from "./Components/History/History";
function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/Register" element={<RegisterPage />} />
        <Route path="/BodyTest" element={<BodyCarTest />} />
        <Route path="/HybridTest" element={<HybridCarTest />} />
        <Route path="/History" element={<History />} />
      </Routes>
    </div>
  );
}

export default App;
