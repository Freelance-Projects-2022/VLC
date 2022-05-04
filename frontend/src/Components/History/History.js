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
    </div>
  );
};

export default History;
