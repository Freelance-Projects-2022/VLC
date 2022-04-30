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
// import "./navigation.css";

//====================================================// Navigation function
const Navigation = () => {
  const [doctorName, setDoctorName] = useState("");
  const history = useNavigate();

  //====================================================// return

  return (
    <div className="navigationMainDiv">
      <Link to="/login" alt="test">
        تسجيل الدخول
      </Link>

      <div>
        <Link to="/register" alt="test">
          تسجيل حساب جديد
        </Link>
      </div>
      <div>
        <Link to="/bodyTest" alt="test">
          فحص سيارة (بودي)
        </Link>
      </div>
      <div>
        <Link to="/hybridTest" alt="test">
          فحص سيارة (هايبرد)
        </Link>
      </div>
    </div>
  );
};

export default Navigation;
