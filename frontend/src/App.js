import "./App.css";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { React, useState, useEffect } from "react";
import LoginPage from "./Components/LoginPage/login";
import RegisterPage from "./Components/RegisterPage/Register";
import Navigation from "./Components/Navigation/navigation";
import BodyCarTest from "./Components/CarTestPage/BodyTestPage/BodyTest";
import HybridCarTest from "./Components/CarTestPage/HybridTestPage/HybridTest";
import History from "./Components/History/History";
import Accounting from "./Components/Accounting/Accounting";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [isLogout, setIslogout] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <div className="App">
      <Navigation
        isLogin={isLogin}
        setIsLogin={setIsLogin}
        isLogout={isLogout}
        setIslogout={setIslogout}
        isAdmin={isAdmin}
        setIsAdmin={setIsAdmin}
      />
      <Routes>
        <Route
          path="/Login"
          element={
            <LoginPage
              setIsLogin={setIsLogin}
              setIslogout={setIslogout}
              setIsAdmin={setIsAdmin}
            />
          }
        />
        <Route path="/Register" element={<RegisterPage />} />
        <Route path="/BodyTest" element={<BodyCarTest />} />
        <Route path="/HybridTest" element={<HybridCarTest />} />
        <Route path="/History" element={<History />} />
        <Route path="/Accounting" element={<Accounting />} />
        <Route path="/Accounting" element={<Accounting />} />
      </Routes>
    </div>
  );
}

export default App;
