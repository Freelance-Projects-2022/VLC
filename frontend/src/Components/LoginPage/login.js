// //====================================================//Require
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Grid, Row, Col, Form } from "react-bootstrap";

// CSS File
import "./login.css";

//====================================================//Create Login Function

const Login = () => {
  const history = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  //======================================================//CheckUser Function
  const checkUser = async (e) => {
    console.log("run");
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/login", {
        username,
        password,
      });
      if (res.data.success) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: res.data.message,
          showConfirmButton: false,
          timer: 2000,
        });
      } else throw Error;
    } catch (error) {
      if (error.response && error.response.data) {
        Swal.fire({
          position: "center",
          icon: "warning",
          title: error.response.data.message,
          showConfirmButton: false,
          timer: 2000,
        });
        return;
      }
      Swal.fire({
        position: "center",
        icon: "warning",
        title: "Error happened while Login, please try again",
        showConfirmButton: false,
        timer: 2000,
      });
    }
  };

  //   //======================================================//Return
  return (
    <div className="MainLoginDev">
      <form onSubmit={checkUser} className="loginForm">
        <input
          type="text"
          placeholder="أسم المستخدم"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="كلمة السر"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button type="submit" className="submitButton">
          تسجيل الدخول
        </button>
      </form>
    </div>
  );
};

export default Login;
