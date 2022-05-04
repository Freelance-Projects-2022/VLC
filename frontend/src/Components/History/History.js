//====================================================//Require
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import BillNoHistory from "./BillNoHistory/History";
import HybridHistory from "./HybridHistory/HybridHistory";
import BodyHistory from "./BodyHistory/BodyHistory";

// CSS File
import "./History.css";
//====================================================//Create history Function
const History = () => {
  const Route = useNavigate();
  const [car_order_no, setCar_order_no] = useState("");
  const [allCarTest, setAllCarTest] = useState("");
  //====================================================//Tabs

  const [hybridTab, setHybridTab] = useState(false);
  const [bodyTab, setBodyTab] = useState(false);
  const [carNoTab, setCarNoTab] = useState(false);

  //====================================================//get car depend on order no

  //======================================================//Return
  return (
    <div id="projects">
      <ul className="Projects_List_Tabs">
        <li
          className="List_Tabs_item"
          onClick={() => {
            setHybridTab(true);
            setBodyTab(false);
            setCarNoTab(false);
          }}
        >
          سجلات الهايبرد
        </li>
        <li
          className="List_Tabs_item"
          onClick={() => {
            setHybridTab(false);
            setBodyTab(true);
            setCarNoTab(false);
          }}
        >
          سجلات البودي
        </li>
        <li
          className="List_Tabs_item"
          onClick={() => {
            setHybridTab(false);
            setBodyTab(false);
            setCarNoTab(true);
          }}
        >
          رقم الفاتورة
        </li>
      </ul>

      {bodyTab ? (
        <div className="Projects_Content_Tab">
          {" "}
          <BodyHistory />
        </div>
      ) : (
        ""
      )}
      {hybridTab ? (
        <div className="Projects_Content_Tab">
          <HybridHistory />
        </div>
      ) : (
        ""
      )}
      {carNoTab ? (
        <div className="Projects_Content_Tab">
          {" "}
          <BillNoHistory />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default History;
