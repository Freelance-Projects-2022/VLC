//====================================================//Require
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Table } from "react-bootstrap";
import {MdOutlineElectricCar} from "react-icons/md";
// CSS File
import './BodyHistory.css';
import BodyModal from "../BodyModal/BodyModal.js";
//====================================================//Create history Function
const History = () => {
  const [car_order_no, setCar_order_no] = useState("");
  const [allCarTest, setAllCarTest] = useState([]);
  const [modalShow, setModalShow] = useState(false);
const [singleTest, setSingleTest] = useState({});
  //====================================================//get All Body Test
const getAllBodyTest=async()=>{
  const result = await axios.get('http://localhost:5000/cartest/getbodytests');
  if (result.data.success) {
    
    console.log(result.data.results);
    setAllCarTest(result.data.results);
  }
}
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
  
  useEffect(()=>{
    getAllBodyTest();

  },[])
  //======================================================//Return
  return (
    <div className="MainLoginDev">
      <Table>
{/* <thead>

<tr>
<form className="getCarByOnOrderNo" onSubmit={getCarByOnOrderNo}>

  <td>
  <input
            required
            className="car_order_no"
            type="text"
            placeholder="ادخل رقم الفاتورة"
            value={car_order_no}
            onChange={(e) => {
              setCar_order_no(e.target.value);
            }}
          />
  </td>
  <td>
  <button type="submit" className="bill_no_btn">
            أبحث
          </button>
  </td>
</form>
        
</tr>

</thead> */}
<tbody>
  {allCarTest.map((test)=>(
    <tr key={test.id}>
    <td><MdOutlineElectricCar/></td>
    <td><h6 className="linkTestPage" onClick={()=>{
      setModalShow(true);
      setSingleTest(test);
    }}>{test.car_brand}{" "}{test.test_date}</h6></td>
  </tr>
  
  ))}
  
</tbody>
      </Table>
      <BodyModal
      show={modalShow}
      test={singleTest}
      onHide={() => setModalShow(false)}
      />
      
    </div>
  );
};

export default History;
