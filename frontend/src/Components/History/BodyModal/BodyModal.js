import React, { useRef } from 'react';
// import ReactToPrint from 'react-to-print';

import { Button, Modal, Row,Col, ListGroup, Table } from 'react-bootstrap'

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
    <div className="OrderTable">
        
        <Table bordered hover>
          <tbody>
            <tr>
              <th>رقم الشاصي</th>
              <td>
              {test.car_vin}

              </td>
            </tr>
            <tr>
              <th>رقم السيارة</th>

              <td>
              {test.car_no}

              </td>
            </tr>
            <tr>
              <th>لون السيارة</th>

              <td>
            {test.car_color}
                 
              </td>
            </tr>
          </tbody>
        </Table>
        <Table striped bordered hover>
          <tbody>
            <tr>
              <th>نوع السيارة</th>
              <td>
              {test.car_brand}

              </td>
            </tr>
            <tr>
              <th>موديل السيارة</th>

              <td>
              {test.car_model}

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
            {test.vin_tr}

              </td>
          </tr>
          <tr>
            <th>فحص الشاصي الامامي الشمال</th>

            <td>
            {test.vin_tl}

            </td>
          </tr>
          <tr>
            <th>فحص الشاصي الخلفي اليمين</th>

            <td>
            {test.vin_br}

            </td>
          </tr>
          <tr>
            <th>فحص الشاصي الخلفي الشمال</th>

            <td>
            {test.vin_bl}
              
            </td>
          </tr>
          <tr>
            <th colspan="2">ملاحظات البودي</th>
            
          </tr>
        <tr>
          <td colspan="2">
          {test.body_note}
          
          </td>
        </tr>
        <tr>
            <th>فحص المحرك</th>

            <td>
            {test.engine_test}
            
            </td>
          </tr>
          <tr>
            <th>فحص الجير</th>

            <td>
            {test.gear_test}
            
            </td>
          </tr>
          <tr>
            <th>فحص بككس /أكسات</th>

            <td>
            {test.back_acss}
            
            </td>
          </tr>
        </tbody>
      </Table>
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
