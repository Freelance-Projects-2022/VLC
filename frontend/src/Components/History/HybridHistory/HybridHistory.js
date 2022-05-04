//====================================================//Require
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

// CSS File

//====================================================//Create history Function
const HybridHistory = () => {
  //====================================================//get car depend on order no

  const HybridHistory = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/cartest/gethybridtest"
      );
      if (res.data.success) {
        console.log(
          "🚀 ~ file: HybridHistory.js ~ line 19 ~ HybridHistory ~ res.data",
          res.data
        );
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

  useEffect(() => {
    HybridHistory();
  }, []);
  //======================================================//Return
  return <div className="MainHybridHistory"></div>;
};

export default HybridHistory;
