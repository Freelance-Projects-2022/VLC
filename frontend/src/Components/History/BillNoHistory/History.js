//====================================================//Require
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

// CSS File

//====================================================//Create history Function
const History = () => {
  const Route = useNavigate();
  const [car_order_no, setCar_order_no] = useState("");
  const [allCarTest, setAllCarTest] = useState("");

  //====================================================//get car depend on order no

  const getCarByOnOrderNo = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:5000/cartest/getCarByOrderNo",
        {
          car_order_no: car_order_no,
        }
      );
      if (res.data.success) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: res.data.message,
          showConfirmButton: false,
          timer: 2000,
        });
        console.log(res.data.result);
        setAllCarTest(res.data.result);
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
      <div>
        <div
          onClick={() => {
            Route("/HybridHistory");
          }}
        >
          سجلات الهايبرد
        </div>
        <div
          onClick={() => {
            Route("/BodyHistory");
          }}
        >
          سجلات البودي
        </div>{" "}
        <div
          onClick={() => {
            Route("/BillNoHistory");
          }}
        >
          رقم الفاتورة{" "}
        </div>{" "}
      </div>
      <form className="getCarByOnOrderNo" onSubmit={getCarByOnOrderNo}>
        <div>
          <input
            required
            className="car_order_no"
            type="text"
            value={car_order_no}
            onChange={(e) => {
              setCar_order_no(e.target.value);
            }}
          />
          <label className="">رقم الفاتورة</label>
        </div>
        <div>
          <button type="submit" className="bill_no_btn">
            أبحث
          </button>
        </div>
      </form>
    </div>
  );
};

export default History;
