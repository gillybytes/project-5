import { useState } from 'react'
import { Menu } from '../../layout/Menu'
import { Container, Form, Button, Modal } from 'react-bootstrap'

export const Signup = () => {
  const nav = [
    {
      id: 1,
      link: "/",
      label: "Login"
    }
  ]

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return(
      <>
        <Menu nav={nav} link='/'/>
        <Container className="section">
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" href="/home">
              Sign up
            </Button> { }
            <Button variant="primary" href="/home">
              Sign in with Google account
            </Button> { }
            <Button variant="primary" onClick={handleShow}>
              Forgot password?
            </Button>
          </Form>


          <Modal size="lg" aria-labelledby="contained-modal-title-vcenter" centered show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Password recovery</Modal.Title>
                </Modal.Header>
                <Modal.Body>We sent you a password recovery email.</Modal.Body>
                <Modal.Footer>
                 <Button variant="primary" onClick={handleClose}>
                    Ok
                  </Button>          
                </Modal.Footer>
              </Modal>

        </Container>
        
          

    
      </>
  )
}
