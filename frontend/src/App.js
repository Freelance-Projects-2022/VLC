import "./App.css";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { React, useState, useEffect } from "react";
import LoginPage from "./Components/LoginPage/login";
import RegisterPage from "./Components/RegisterPage/Register";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/Register" element={<RegisterPage />} />
      </Routes>
    </div>
  );
}

export default App;
