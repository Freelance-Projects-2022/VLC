//====================================================//Require
import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import Swal from "sweetalert2";

// CSS File
import "./HybridTest.css";

//====================================================//Body Car Test  Function
const HybridTest = () => {
  //======================================================//Return
  return (
    <div className="hybridTestMainDiv">
      <form className="patientRegisterForm">
        <div>
          <input
            required
            placeholder=""
            className="userNameField"
            type="text"
            onChange={() => {}}
          />
          <label className="">فحص الشاصي الامامي اليمين</label>
        </div>

        <div>
          <input
            required
            placeholder=""
            className="userNameField"
            type="text"
            onChange={() => {}}
          />
          <label className="">فحص الشاصي الامامي الشمال</label>
        </div>
        <div>
          <input
            required
            placeholder=""
            className="userNameField"
            type="text"
            onChange={() => {}}
          />
          <label className="">فحص الشاصي الخلفي اليمين</label>
        </div>
        <div>
          <input
            required
            placeholder=""
            className="userNameField"
            type="text"
            onChange={() => {}}
          />
          <label className="">فحص الشاصي الخلفي الشمال</label>
        </div>
        <div>
          <textarea
            required
            placeholder=""
            className="userNameField"
            type="text"
            onChange={() => {}}
          />
          <label className="">ملاحظات البودي</label>
        </div>
        <div>
          <input
            required
            placeholder=""
            className="userNameField"
            type="text"
            onChange={() => {}}
          />
          <label className="">فحص المحرك</label>
        </div>
        <div>
          <input
            required
            placeholder=""
            className="userNameField"
            type="text"
            onChange={() => {}}
          />
          <label className="">فحص الجير</label>
        </div>
        <div>
          <input
            required
            placeholder=""
            className="userNameField"
            type="text"
            onChange={() => {}}
          />
          <label className="">فحص بككس /أكسات</label>
        </div>
        <button type="submit" className="submit_Button_Register">
          {" "}
          done
        </button>
      </form>
    </div>
  );
};

export default HybridTest;
