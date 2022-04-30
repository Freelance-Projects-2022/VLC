//====================================================//Require
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

// CSS File
// import "./BodyTest.css";

//====================================================//Body Car Test  Function
const BodyTest = () => {
  const [vin_tr, setVin_tr] = useState("");
  const [vin_tl, setVin_tl] = useState("");
  const [vin_br, setVin_br] = useState("");
  const [vin_bl, setVin_bl] = useState("");
  const [body_note, setBody_note] = useState("");
  const [engine_test, setEngine_test] = useState("");
  const [gear_test, setGear_test] = useState("");
  const [back_acss, setBack_acss] = useState("");

  // ===============================================  Car Body Test Function

  const carBodyTest = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/cartest/petrolcar", {
        vin_tr: vin_tr,
        vin_tl: vin_tl,
        vin_br: vin_br,
        vin_bl: vin_bl,
        body_note: body_note,
        engine_test: engine_test,
        gear_test: gear_test,
        back_acss: back_acss,
      });
      if (res.data.success) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: res.data.message,
          showConfirmButton: false,
          timer: 2000,
        });
        setVin_tr("");
        setVin_tl("");
        setVin_br("");
        setVin_bl("");
        setBody_note("");
        setEngine_test("");
        setGear_test("");
        setBack_acss("");
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
  //======================================================//Use Effect

  //======================================================//Return
  return (
    <div className="bodyTestMainDiv">
      <form className="bodyTestForm" onSubmit={carBodyTest}>
        <div>
          <input
            required
            className="vin_tr"
            type="text"
            value={vin_tr}
            onChange={(e) => {
              setVin_tr(e.target.value);
            }}
          />
          <label className="">فحص الشاصي الامامي اليمين</label>
        </div>

        <div>
          <input
            required
            value={vin_tl}
            placeholder=""
            className="vin_tl"
            type="text"
            onChange={(e) => {
              setVin_tl(e.target.value);
            }}
          />
          <label className="">فحص الشاصي الامامي الشمال</label>
        </div>
        <div>
          <input
            required
            value={vin_br}
            placeholder=""
            className="vin_br"
            type="text"
            onChange={(e) => {
              setVin_br(e.target.value);
            }}
          />
          <label className="">فحص الشاصي الخلفي اليمين</label>
        </div>
        <div>
          <input
            required
            value={vin_bl}
            placeholder=""
            className="vin_bl"
            type="text"
            onChange={(e) => {
              setVin_bl(e.target.value);
            }}
          />
          <label className="">فحص الشاصي الخلفي الشمال</label>
        </div>
        <div>
          <textarea
            required
            value={body_note}
            placeholder=""
            className="body_note"
            type="text"
            onChange={(e) => {
              setBody_note(e.target.value);
            }}
          />
          <label className="">ملاحظات البودي</label>
        </div>
        <div>
          <input
            required
            placeholder=""
            value={engine_test}
            className="engine_test"
            type="text"
            onChange={(e) => {
              setEngine_test(e.target.value);
            }}
          />
          <label className="">فحص المحرك</label>
        </div>
        <div>
          <input
            required
            placeholder=""
            value={gear_test}
            className="gear_test"
            type="text"
            onChange={(e) => {
              setGear_test(e.target.value);
            }}
          />
          <label className="">فحص الجير</label>
        </div>
        <div>
          <input
            required
            placeholder=""
            value={back_acss}
            className="back_acss"
            type="text"
            onChange={(e) => {
              setBack_acss(e.target.value);
            }}
          />
          <label className="">فحص بككس /أكسات</label>
        </div>
        <button type="submit" className="submit_Button_Register">
          done
        </button>
      </form>
    </div>
  );
};

export default BodyTest;
