//====================================================//Require
import React, { useState, useEffect } from "react";
import axios from "axios";
// import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

// CSS File
import "./HybridTest.css";

//====================================================//Body Car Test  Function
const HybridTest = () => {
  const [engine_test, setEngine_test] = useState("");
  const [transmission, setTransmission] = useState("");
  const [srs, setSrs] = useState("");
  const [abs_system, setAbs_system] = useState("");
  const [ac, setAc] = useState("");
  const [hybrid_system, setHybrid_system] = useState("");
  const [hv_battery, setHv_battery] = useState("");
  const [eleectric_system, setEleectric_system] = useState("");
  const [emc, setEmc] = useState("");
  const [soh, setSoh] = useState("");
  const [note, setNote] = useState("");

  const hybridCarTest = async (e) => {
    console.log("itsworking");
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/cartest/hybridcar", {
        engine_test: engine_test,
        transmission: transmission,
        srs: srs,
        abs_system: abs_system,
        ac: ac,
        hybrid_system: hybrid_system,
        hv_battery: hv_battery,
        eleectric_system: eleectric_system,
        emc: emc,
        soh: soh,
        note: note,
      });
      if (res.data.success) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: res.data.message,
          showConfirmButton: false,
          timer: 2000,
        });
        setEngine_test("");
        setTransmission("");
        setSrs("");
        setAbs_system("");
        setAc("");
        setHybrid_system("");
        setHv_battery("");
        setEleectric_system("");
        setEmc("");
        setSoh("");
        setNote("");
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
    <div className="hybridTestMainDiv">
      <form className="hybridTestForm" onSubmit={hybridCarTest}>
        <div>
          <input
            required
            className="engine_test"
            type="text"
            value={engine_test}
            onChange={(e) => {
              setEngine_test(e.target.value);
            }}
          />
          <label className="">engine_test</label>
        </div>

        <div>
          <input
            required
            value={transmission}
            placeholder=""
            className="transmission"
            type="text"
            onChange={(e) => {
              setTransmission(e.target.value);
            }}
          />
          <label className="">transmission</label>
        </div>
        <div>
          <input
            required
            value={srs}
            placeholder=""
            className="srs"
            type="text"
            onChange={(e) => {
              setSrs(e.target.value);
            }}
          />
          <label className="">srs</label>
        </div>
        <div>
          <input
            required
            value={abs_system}
            placeholder=""
            className="abs_system"
            type="text"
            onChange={(e) => {
              setAbs_system(e.target.value);
            }}
          />
          <label className="">abs_system</label>
        </div>
        <div>
          <textarea
            required
            value={ac}
            placeholder=""
            className="ac"
            type="text"
            onChange={(e) => {
              setAc(e.target.value);
            }}
          />
          <label className="">ac</label>
        </div>
        <div>
          <input
            required
            placeholder=""
            value={hybrid_system}
            className="hybrid_system"
            type="text"
            onChange={(e) => {
              setHybrid_system(e.target.value);
            }}
          />
          <label className="">hybrid_system</label>
        </div>
        <div>
          <input
            required
            placeholder=""
            value={hv_battery}
            className="hv_battery"
            type="text"
            onChange={(e) => {
              setHv_battery(e.target.value);
            }}
          />
          <label className="">hv_battery</label>
        </div>
        <div>
          <input
            required
            placeholder=""
            value={eleectric_system}
            className="eleectric_system"
            type="text"
            onChange={(e) => {
              setEleectric_system(e.target.value);
            }}
          />
          <label className="">eleectric_system</label>
        </div>
        <div>
          <input
            required
            placeholder=""
            value={emc}
            className="emc"
            type="text"
            onChange={(e) => {
              setEmc(e.target.value);
            }}
          />
          <label className="">emc</label>
        </div>
        <div>
          <input
            required
            placeholder=""
            value={soh}
            className="soh"
            type="text"
            onChange={(e) => {
              setSoh(e.target.value);
            }}
          />
          <label className="">soh</label>
        </div>
        <div>
          <input
            required
            placeholder=""
            value={note}
            className="note"
            type="text"
            onChange={(e) => {
              setNote(e.target.value);
            }}
          />
          <label className="">note</label>
        </div>
        <button type="submit" className="submit_Button_Register">
          done
        </button>
      </form>
    </div>
  );
};

export default HybridTest;
