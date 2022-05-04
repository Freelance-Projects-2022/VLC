//====================================================//Require
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import {Form,Button} from "react-bootstrap";
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

  //======================================================//Return
  return (
    <div className="MainLoginDev">
      <Form onSubmit={checkUser} className="loginForm">
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>اسم المستخدم</Form.Label>
    <Form.Control type="text"  placeholder="أسم المستخدم"
          onChange={(e) => {
            setUsername(e.target.value);
          }} />
    
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="كلمة السر"
          onChange={(e) => {
            setPassword(e.target.value);
          }} />
  </Form.Group>
  
  <Button variant="primary" type="submit">
  تسجيل الدخول{" "}
  </Button>
</Form>
     
    </div>
  );
};

export default Login;
