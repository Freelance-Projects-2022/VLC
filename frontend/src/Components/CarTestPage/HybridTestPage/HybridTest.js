//====================================================//Require
import React, { useState, useEffect } from "react";
import axios from "axios";
// import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

// CSS File
import "./HybridTest.css";
import { Button,Table } from "react-bootstrap";

//====================================================//Body Car Test  Function
const HybridTest = () => {
  const [car_no, setCar_no] = useState("");
  const [car_brand, setCar_brand] = useState("");
  const [car_vin, setCar_vin] = useState("");
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
  const [test_price, setTest_price] = useState("");
  const [car_notes, setCar_notes] = useState("");
  const [dateNow, setDateNow] = useState("");
  const [test_date, setTest_date] = useState("");

  const hybridCarTest = async (e) => {
    console.log("itsworking");
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/cartest/hybridcar", {
        car_no: car_no,
        car_brand: car_brand,
        car_vin: car_vin,
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
        test_price: test_price,
        car_notes: car_notes,
        test_date: test_date,
      });
      if (res.data.success) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: res.data.message,
          showConfirmButton: false,
          timer: 2000,
        });
        setCar_no("");
        setCar_brand("");
        setCar_vin("");
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

  const date = () => {
    var today = new Date();
    var date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();
    var dateNowVar = date;
    setTest_date(dateNowVar);
    setDateNow(dateNowVar);
  };

  useEffect(() => {
    date();
  });
  //======================================================//Return
  return (
    <div className="hybridTestMainDiv">
      <form className="hybridTestForm" onSubmit={hybridCarTest}>
      <div><span>Date : </span>{dateNow}
      
      </div>
      
      <div className="OrderTable">
        
        <Table bordered hover>
          <tbody>
            <tr>
            <td>
                <input
            placeholder="انقر للكتابة"

                  required
                  className="car_vin"
            

                  type="text"
                  value={car_vin}
                  onChange={(e) => {
                    setCar_vin(e.target.value);
                  }}
                />
              </td>
              <th>Car Vin</th>
              
            </tr>
            <tr>
              

              <td>
              <input
            placeholder="انقر للكتابة"

            required
            className="car_no"
            type="text"
            value={car_no}
            onChange={(e) => {
              setCar_no(e.target.value);
            }}
          />
              </td>
              <th>Car No</th>
            </tr>
            <tr>
              <td>
              <input
            placeholder="انقر للكتابة"

            required
            className="car_vin"
            type="text"
            value={car_vin}
            onChange={(e) => {
              setCar_vin(e.target.value);
            }}
          />
              </td>
              <th> Type</th>

            </tr>
          </tbody>
        </Table>
        
      </div>
      <h5 style={{ backgroundColor: "blue", color: "whitesmoke" }}>
       Technical Inspection Report
      </h5>
      <div className="OrderTable">
      <Table bordered hover>
        <tbody>
          <tr>
            <td>
              {" "}
              <input
            placeholder="انقر للكتابة"

            required
            className="engine_test"
            type="text"
            value={engine_test}
            onChange={(e) => {
              setEngine_test(e.target.value);
            }}
          />
            </td>
            <th>Engine</th>

          </tr>
          <tr>

            <td>
            <input
            placeholder="انقر للكتابة"

            required
            value={transmission}
            
            className="transmission"
            type="text"
            onChange={(e) => {
              setTransmission(e.target.value);
            }}
          />
            </td>
            <th>Transmission</th>

          </tr>
          <tr>

            <td>
            <input
            placeholder="انقر للكتابة"

            required
            value={srs}
            
            className="srs"
            type="text"
            onChange={(e) => {
              setSrs(e.target.value);
            }}
          />
            </td>
            <th>SRS</th>

          </tr>
          <tr>

            <td>
            <input
            placeholder="انقر للكتابة"

            required
            value={abs_system}
            
            className="abs_system"
            type="text"
            onChange={(e) => {
              setAbs_system(e.target.value);
            }}
          />
            </td>
            <th>ABS</th>

          </tr>
          <tr>

            <td>
            <input
            placeholder="انقر للكتابة"

            required
            
            value={hybrid_system}
            className="hybrid_system"
            type="text"
            onChange={(e) => {
              setAc(e.target.value);
            }}
          />
            </td>
            <th>A/C</th>

          </tr>
          
        
        </tbody>
      </Table>
      <Table bordered hover>
        <tbody>
          <tr>
            <td>
              {" "}
              <input
            placeholder="انقر للكتابة"

            required
            
            value={hybrid_system}
            className="hybrid_system"
            type="text"
            onChange={(e) => {
              setHybrid_system(e.target.value);
            }}
          />
            </td>
            <th>Hybrid System</th>

          </tr>
          <tr>

            <td>
            <input
            placeholder="انقر للكتابة"

            required
            
            value={hv_battery}
            className="hv_battery"
            type="text"
            onChange={(e) => {
              setHv_battery(e.target.value);
            }}
          />
            </td>
            <th>H.V Battery</th>

          </tr>
          <tr>

            <td>
            <input
            placeholder="انقر للكتابة"

            required
            
            value={eleectric_system}
            className="eleectric_system"
            type="text"
            onChange={(e) => {
              setEleectric_system(e.target.value);
            }}
          />
            </td>
            <th>Eleectric System</th>

          </tr>
          <tr>

            <td>
            <input
            placeholder="انقر للكتابة"

            required
            
            value={emc}
            className="emc"
            type="text"
            onChange={(e) => {
              setEmc(e.target.value);
            }}
          />
            </td>
            <th>E.M.C</th>

          </tr>
          <tr>

            <td>
            <input
            placeholder="انقر للكتابة"

            required
            
            value={soh}
            className="soh"
            type="text"
            onChange={(e) => {
              setSoh(e.target.value);
            }}
          />
            </td>
            <th>S.O.H</th>

          </tr>
          
        
        </tbody>
      </Table>
</div>
     
      <Table bordered hover id="tableRight">
          <tbody>
            <tr>
              <th>ملاحظات على السيارة</th>
              <td>
              <input
            placeholder="انقر للكتابة"

            required
            value={note}
            className="note"
            type="text"
            onChange={(e) => {
              setNote(e.target.value);
            }}
          />
              </td>
            </tr>
            <tr>
              <th>سعر الفحص</th>

              <td>
              <input

            required
            placeholder="انقر للكتابة"
            value={test_price}
            className="test_price"
            type="number"
            onChange={(e) => {
              setTest_price(e.target.value);
            }}
          />
              </td>
            </tr>
            <tr>
              <th>ملاحظات شخصية</th>

              <td>
              <input
            placeholder="انقر للكتابة"

            required
            value={car_notes}
            className="car_notes"
            type="text"
            onChange={(e) => {
              setCar_notes(e.target.value);
            }}
          />
              </td>
            </tr>
            <tr ><td colspan="2"><Button type="submit" className="submit_Button_Register">
          إنشاء
        </Button></td></tr>
          </tbody>
        </Table>
        
        
      </form>
      
    </div>
  );
};

export default HybridTest;
