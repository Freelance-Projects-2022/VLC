//====================================================//Require
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { React, useEffect, useState } from "react";
import axios from "axios";

//React icon
// import { BsHouseFill, BsLockFill, BsNewspaper, BsWindow } from "react-icons/bs";
// import { RiTruckFill, RiLogoutCircleRLine } from "react-icons/ri";
// import { BsFillCalendarWeekFill } from "react-icons/bs";
// import { FiSettings } from "react-icons/fi";

// CSS File
import "./navigation.css";

//====================================================// Navigation function
const Navigation = ({
  isLogin,
  isAdmin,
  setIsLogin,
  isLogout,
  setIslogout,
  setIsAdmin,
}) => {
  const Route = useNavigate();

  const logout = () => {
    setIsLogin(false);
    setIslogout(true);
    setIsAdmin(false);
  };
  //====================================================// return
  return (
    <div className="navigationMainDiv">
      {isLogin ? (
        <></>
      ) : (
        <Link to="/login" alt="test">
          تسجيل الدخول
        </Link>
      )}

      <div>
        {isAdmin ? (
          <Link to="/register" alt="test">
            تسجيل حساب جديد
          </Link>
        ) : (
          <></>
        )}
      </div>
      <div>
        <Link to="/bodyTest" alt="test">
          إنشاء فحص سيارة (بودي)
        </Link>
      </div>
      <div>
        <Link to="/hybridTest" alt="test">
          إنشاء فحص سيارة (هايبرد)
        </Link>
      </div>
      <div>
        <Link to="/history" alt="test">
          السجلات{" "}
        </Link>
      </div>
      <div>
        <Link to="/accounting" alt="test">
          المحاسبة
        </Link>
      </div>
      <div>
        {isLogout ? (
          <></>
        ) : (
          <Link
            to="/"
            alt="test"
            onClick={() => {
              logout();
            }}
          >
            تسجيل الخروج
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navigation;
