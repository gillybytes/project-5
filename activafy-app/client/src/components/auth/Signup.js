import React, { useState, useContext, useEffect } from 'react';
import { Container, Col, Form, Button, Modal } from 'react-bootstrap';
import AuthContext from '../../context/auth/authContext';
import isAuthenticatedUser from '../../utils/isAuthenticated';

import { Menu } from '../layout/Menu'
import '../style/Auth.css';


const Signup = props => {
  const authContext = useContext(AuthContext);

  const { register, error, clearErrors, isAuthenticated } = authContext;
  
  useEffect(() => {
    if(isAuthenticated || isAuthenticatedUser()) {
      //props.history.push('/home');   // FIX THIS: check context
    }

    if(error === 'User already exists') {
      clearErrors();
    }
  }, [error, isAuthenticated, props.history]);

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const { name, email, password, confirmPassword } = user;

  const handleChange = e => setUser({...user, [e.target.name]: e.target.value});

  const handleSubmit = e => {
    e.preventDefault();
    register({
      name,
      email,
      password
    });
  };

  const nav = [
    {
      id: 1,
      link: "/",
      label: "Log in"
    },
    {
      id: 2,
      link: "/signup",
      label: "Sign up"
    }
  ]

  return(
      <>
        <Menu nav={nav} />

        <Container className="section">
          <Col class id="signup" className="wrapper">
            <Col className="text-center" xs={6} md={4}>
              <h3><em>Commit to be fit.</em></h3><br/>
              <h5>Create an account.</h5>
              <Form onSubmit={handleSubmit}>
                <Form.Group>
                  <Form.Row>
                    <Form.Control
                      type='text'
                      name='name'
                      placeholder='Name'
                      value={name}
                      onChange={handleChange}
                      required
                    />
                  </Form.Row>
                </Form.Group>
                <Form.Group>
                  <Form.Row>
                    <Form.Control
                      type='email'
                      name='email'
                      placeholder='Email'
                      value={email}
                      onChange={handleChange}
                      required
                    />
                  </Form.Row>
                </Form.Group>
                <Form.Group>
                  <Form.Row>
                    <Form.Control
                      type='password'
                      name='password'
                      placeholder='Password'
                      value={password}
                      onChange={handleChange}
                      required
                    />
                  </Form.Row>
                </Form.Group>
                <Form.Group>
                  <Form.Row>
                    <Form.Control
                      type='password'
                      name='confirmPassword'
                      placeholder='Confirm Password'
                      value={confirmPassword}
                      onChange={handleChange}
                      required
                    />
                  </Form.Row>
                </Form.Group>
                <Form.Group className="text-center">
                  <Form.Check type='checkbox' label="By checking this box, I agree to the Terms of Service and Privacy Policy." required />
                </Form.Group>
                <p>Click here for the <a href="/terms" target="_blank" >Terms of Service</a> & <a href="/privacy" target="_blank"> Privacy Policy</a>.</p>
                <Button className="btn-custom" type = "submit">Sign up</Button>
                <Button className="btn-custom" href="/home">Sign up with Google</Button>
                <h6>Already have an account? {''} <a href='/' className='text-center mb-md-4'>Login here </a></h6>
              </Form>
            </Col>
          </Col>
        
          <Modal size="lg" aria-labelledby="contained-modal-title-vcenter">
                <Modal.Header closeButton>
                  <Modal.Title>Password recovery</Modal.Title>
                </Modal.Header>
                <Modal.Body>We sent you a password recovery email.</Modal.Body>
                <Modal.Footer>
                 <Button variant="primary" >
                    Ok
                  </Button>          
                </Modal.Footer>
              </Modal>
        </Container>
      </>
  )
}

export default Signup;