import { useState } from 'react'
import { Menu } from '../layout/Menu'
import { Container, Row, Col, Button, Modal } from 'react-bootstrap'

import '../../style/style.css'


export const Settings = () => {
  const nav = [
    {
      id: 1,
      link: "/home",
      label: "Dashboard"
    },
    {
      id: 2,
      link: "/settings",
      label: "Settings"
    },
    {
      id: 3,
      link: "/",
      label: "Sign out"
    }
  ]
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Menu nav={nav} link='/home' />
      <Container className="section">
        <Row className="justify-content-center">
          <Col className="text-center" md="auto">
            <h1>User Settings</h1><br/>
            <h3>Add notifications enhancement</h3>
            <p><Button variant="primary" onClick={handleShow}>Turn on notification</Button></p>
            <p>Use modal</p>
            <Modal size="lg" aria-labelledby="contained-modal-title-vcenter" centered show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Notification</Modal.Title>
                </Modal.Header>
                <Modal.Body>Proceed to turn on notification?</Modal.Body>
                <Modal.Footer>
                 <Button variant="primary" onClick={handleClose}>
                    Yes
                  </Button>
                  <Button variant="secondary" onClick={handleClose}>
                    No
                  </Button>                
                </Modal.Footer>
              </Modal>
          </Col>
        </Row>
      </Container>
    </>
  )
}
