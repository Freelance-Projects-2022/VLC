import React, { useRef } from 'react';
// import ReactToPrint from 'react-to-print';

import { Button, Modal, Row,Col, ListGroup, Table } from 'react-bootstrap'
import './HybridModal.css';
export default function BodyModal({show,onHide,test}) {
   
  return (
    <div> <Modal
    show={show}
    onHide={onHide}
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered
    
  >
    
    <Modal.Body >
    
        
        <Table bordered hover>
          <tbody>
            <tr>
              <td>
              {test.car_vin}

              </td>
              <th>Car vin</th>

            </tr>
            <tr>

              <td>
              {test.car_no}

              </td>
              <th>Car No</th>

            </tr>
            <tr>
              <td>
              {test.car_brand}

              </td>
              <th>Type</th>

            </tr>
          </tbody>
        </Table>
       
      
      <h5 style={{ backgroundColor: "blue", color: "whitesmoke" }}>
      Technical Inspection Report
      </h5>
      
      <div className="OrderTableModal">
      <Table bordered hover>
        <tbody>
          <tr>

            <td>
            {test.engine_test}

              </td>
          <th>Engine</th>

          </tr>
          <tr>


            <td>
            {test.transmission}

            </td>
          <th>Transmission</th>

          </tr>
          <tr>


            <td>
            {test.srs}

            </td>
          <th>SRS</th>

          </tr>
          <tr>


            <td>
            {test.abs_system}
              
            </td>
          <th>ABS</th>

          </tr>
         
        <tr>


            <td>
            {test.ac}
            
            </td>
        <th>A/C</th>

          </tr>
          
        </tbody>
      </Table>
      <Table bordered hover>
        <tbody>
          <tr>

            <td>
            {test.hybrid_system}

              </td>
          <th>Hybrid System</th>

          </tr>
          <tr>



            <td>
            {test.hv_battery}

            </td>
          <th>H.V Battery</th>

          </tr>
          <tr>



            <td>
            {test.eleectric_system}

            </td>
          <th>Eleectric System</th>

          </tr>
          <tr>



            <td>
            {test.emc}
              
            </td>
          <th>E.M.C</th>

          </tr>
         
        <tr>



            <td>
            {test.soh}
            
            </td>
        <th>S.O.H</th>

          </tr>
          
        </tbody>
      </Table>
      </div>
      <Table bordered hover>
          <tbody>
            
            <tr>
              <th>سعر الفحص</th>

              <td>
              {test.test_price}
              
              </td>
            </tr>
            <tr>
              <th>ملاحظات شخصية</th>

              <td>
              {test.car_notes}
              </td>
            </tr>
            <tr ><td colspan="2"><Button type="submit" className="submit_Button_Register" onClick={() =>{window.print()}}>
          طباعة
        </Button></td></tr>
          </tbody>
        </Table>
    </Modal.Body>
    
  </Modal></div>
  )
}
