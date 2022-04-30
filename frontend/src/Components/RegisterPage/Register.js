//====================================================//Require
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

// CSS File
// import "./Register.css";

const Register = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPasssword] = useState("");
  const [phone, setPhone] = useState("");
  const [role_id, setRole_id] = useState("2");

  // ===============================================  RegisterUser Function
  const RegisterUser = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/register", {
        username: username,
        password: password,
        phone: phone,
        role_id: role_id,
      });
      if (res.data.success) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: res.data.message,
          showConfirmButton: false,
          timer: 2000,
        });
        navigate("/login");
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
  return (
    <div className="registerMainDiv">
      <form className="patientRegisterForm" onSubmit={RegisterUser}>
        <select
          onChange={(e) => {
            setRole_id(e.target.value);
          }}
          className="userRole"
          required
        >
          <option value="2">موظف</option>
          <option value="1">مدير</option>
        </select>
        <input
          required
          placeholder="أسم المستخدم"
          className="userNameField"
          type="text"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <input
          placeholder="رقم الهاتف"
          required
          className="phoneField"
          type="text"
          onChange={(e) => {
            setPhone(e.target.value);
          }}
        />
        <input
          placeholder="كلمة السر"
          required
          className="passwordField"
          type="password"
          onChange={(e) => {
            setPasssword(e.target.value);
          }}
        />

        <button type="submit" className="submit_Button_Register">
          تسجيل
        </button>
      </form>
    </div>
  );
};

export default Register;
