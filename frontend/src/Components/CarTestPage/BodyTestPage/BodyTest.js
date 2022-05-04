//====================================================//Require
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Button, Table } from "react-bootstrap";
import "./BodyTest.css";

// CSS File
// import "./BodyTest.css";

//====================================================//Body Car Test  Function
const BodyTest = () => {
  const [car_color, setCar_color] = useState("");
  const [car_model, setCar_model] = useState("");
  const [car_no, setCar_no] = useState("");
  const [car_brand, setCar_brand] = useState("");
  const [car_vin, setCar_vin] = useState("");
  const [vin_tr, setVin_tr] = useState("");
  const [vin_tl, setVin_tl] = useState("");
  const [vin_br, setVin_br] = useState("");
  const [vin_bl, setVin_bl] = useState("");
  const [body_note, setBody_note] = useState("");
  const [engine_test, setEngine_test] = useState("");
  const [gear_test, setGear_test] = useState("");
  const [back_acss, setBack_acss] = useState("");
  const [note, setNote] = useState("");
  const [test_price, setTest_price] = useState("");
  const [car_notes, setCar_notes] = useState("");
  const [dateNow, setDateNow] = useState("");
  const [test_date, setTest_date] = useState("");

  // ===============================================  Car Body Test Function

  const carBodyTest = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/cartest/BodyTest", {
        car_color: car_color,
        car_model: car_model,
        car_no: car_no,
        car_brand: car_brand,
        car_vin: car_vin,
        vin_tr: vin_tr,
        vin_tl: vin_tl,
        vin_br: vin_br,
        vin_bl: vin_bl,
        body_note: body_note,
        engine_test: engine_test,
        gear_test: gear_test,
        back_acss: back_acss,
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
        setVin_tr("");
        setVin_tl("");
        setVin_br("");
        setVin_bl("");
        setBody_note("");
        setEngine_test("");
        setGear_test("");
        setBack_acss("");
        setCar_color("");
        setCar_model("");
        setCar_no("");
        setCar_brand("");
        setNote("");
        setTest_price("");
        setCar_notes("");
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
    setDateNow(dateNowVar);
    setTest_date(dateNowVar);
  };

  useEffect(() => {
    date();
  });

  //======================================================//Return
  return (
    <div className="bodyTestMainDiv">
    
      <form className="bodyTestForm" onSubmit={carBodyTest}>
      <div><span>التاريخ : </span>{dateNow}
      
      </div>
      
      <div className="OrderTable">
        
        <Table bordered hover>
          <tbody>
            <tr>
              <th>رقم الشاصي</th>
              <td>
                <input
                  required
                  className="car_vin"
            placeholder="انقر للكتابة"

                  type="text"
                  value={car_vin}
                  onChange={(e) => {
                    setCar_vin(e.target.value);
                  }}
                />
              </td>
            </tr>
            <tr>
              <th>رقم السيارة</th>

              <td>
                <input
                  required
                  className="car_no"
            placeholder="انقر للكتابة"

                  type="text"
                  value={car_no}
                  onChange={(e) => {
                    setCar_no(e.target.value);
                  }}
                />
              </td>
            </tr>
            <tr>
              <th>لون السيارة</th>

              <td>
                <input
                  required
                  className="car_color"
            placeholder="انقر للكتابة"

                  type="text"
                  value={car_color}
                  onChange={(e) => {
                    setCar_color(e.target.value);
                  }}
                />
              </td>
            </tr>
          </tbody>
        </Table>
        <Table striped bordered hover>
          <tbody>
            <tr>
              <th>نوع السيارة</th>
              <td>
                <input
                  required
                  className="car_brand"
            placeholder="انقر للكتابة"

                  type="text"
                  value={car_brand}
                  onChange={(e) => {
                    setCar_brand(e.target.value);
                  }}
                />
              </td>
            </tr>
            <tr>
              <th>موديل السيارة</th>

              <td>
                <input
                  required
                  className="setCar_model"
            placeholder="انقر للكتابة"

                  type="text"
                  value={car_model}
                  onChange={(e) => {
                    setCar_model(e.target.value);
                  }}
                />
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
      <h5 style={{ backgroundColor: "blue", color: "whitesmoke" }}>
        تقرير فحص السيارة
      </h5>
      <Table bordered hover>
        <tbody>
          <tr>
            <th>فحص الشاصي الامامي اليمين</th>
            <td>
              {" "}
              <input
                required
                className="vin_tr"
                type="text"
                value={vin_tr}
                onChange={(e) => {
                  setVin_tr(e.target.value);
                }}
              />
            </td>
          </tr>
          <tr>
            <th>فحص الشاصي الامامي الشمال</th>

            <td>
              <input
                required
                value={vin_tl}
                placeholder="انقر للكتابة"
                className="vin_tl"
                type="text"
                onChange={(e) => {
                  setVin_tl(e.target.value);
                }}
              />
            </td>
          </tr>
          <tr>
            <th>فحص الشاصي الخلفي اليمين</th>

            <td>
              <input
                required
                value={vin_br}
                placeholder="انقر للكتابة"
                className="vin_br"
                type="text"
                onChange={(e) => {
                  setVin_br(e.target.value);
                }}
              />
            </td>
          </tr>
          <tr>
            <th>فحص الشاصي الخلفي الشمال</th>

            <td>
              <input
                required
                value={vin_bl}
                placeholder="انقر للكتابة"
                className="vin_bl"
                type="text"
                onChange={(e) => {
                  setVin_bl(e.target.value);
                }}
              />
            </td>
          </tr>
          <tr>
            <th colspan="2">ملاحظات البودي</th>
            
          </tr>
        <tr>
          <td colspan="2">
          <textarea
            required
            value={body_note}
            placeholder="انقر للكتابة"
            className="body_note"
            type="text"
            onChange={(e) => {
              setBody_note(e.target.value);
            }}
          />
          </td>
        </tr>
        <tr>
            <th>فحص المحرك</th>

            <td>
            <input
            required
            placeholder="انقر للكتابة"
            value={engine_test}
            className="engine_test"
            type="text"
            onChange={(e) => {
              setEngine_test(e.target.value);
            }}
          />
            </td>
          </tr>
          <tr>
            <th>فحص الجير</th>

            <td>
            <input
            required
            placeholder="انقر للكتابة"
            value={gear_test}
            className="gear_test"
            type="text"
            onChange={(e) => {
              setGear_test(e.target.value);
            }}
          />
            </td>
          </tr>
          <tr>
            <th>فحص بككس /أكسات</th>

            <td>
            <input
            required
            placeholder="انقر للكتابة"
            value={back_acss}
            className="back_acss"
            type="text"
            onChange={(e) => {
              setBack_acss(e.target.value);
            }}
          />
            </td>
          </tr>
        </tbody>
      </Table>
      <Table bordered hover>
          <tbody>
            <tr>
              <th>ملاحظات على السيارة</th>
              <td>
              <input
            required
            placeholder="انقر للكتابة"
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
            required
            placeholder="انقر للكتابة"
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

export default BodyTest;
