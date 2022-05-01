//====================================================//Require
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

// CSS File

//====================================================//Create history Function
const History = () => {
  //====================================================//get car depend on order no

  const getCarDependOnOrderNo = async () => {
    console.log("btata");
    try {
      const res = await axios.get(
        "http://localhost:5000/cartest/getCarByOrderNo"
      );
      if (res.data.success) {
        console.log(
          "🚀 ~ file: History.js ~ line 19 ~ getCarDependOnOrderNo ~ res.data.results",
          res.data.results
        );
      } else throw Error;
    } catch (error) {
      if (!error.response.data.success) {
        // return setMessage(error.response.data.message);
      }
      // setMessage("Error happened while Get Data, please try again");
    }
  };
  //======================================================//Return
  return (
    <div className="MainLoginDev">
      <button onClick={getCarDependOnOrderNo}>get data</button>
    </div>
  );
};

export default History;
