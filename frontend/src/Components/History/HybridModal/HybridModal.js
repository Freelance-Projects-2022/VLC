import React from 'react'
import { Button, Modal, Row,Col, ListGroup } from 'react-bootstrap'

export default function HybridModal({show,onHide,movie}) {
  return (
    <div> <Modal
    show={show}
    onHide={onHide}
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered
    
  >
    <Modal.Header style={{backgroundColor:'black'}}>

         
     
    </Modal.Header>
    <Modal.Body style={{backgroundColor:'black'}}>
    <h4>{movie.title}</h4>
        
        <ListGroup horizontal >
<ListGroup.Item style={{backgroundColor:'black',border:'none',color:'yellow'}}>dscsd</ListGroup.Item>
<ListGroup.Item style={{backgroundColor:'black',border:'none',color:'white'}}>dcsc</ListGroup.Item>
<ListGroup.Item style={{backgroundColor:'black',border:'none',color:'yellow'}}>dcscds</ListGroup.Item>
<ListGroup.Item style={{backgroundColor:'black',border:'none',color:'white'}}>dscdsc</ListGroup.Item>
<ListGroup.Item style={{backgroundColor:'black',border:'none',color:'white'}}><Button  style={{backgroundColor:'black',border:'none',color:'white'}} >Play Movie</Button></ListGroup.Item>
</ListGroup>
      

      <p>
       dscsdcdscsdc
      </p>
    </Modal.Body>
    
  </Modal></div>
  )
}
