import React, { useState, useContext, useEffect } from 'react';
import { Container, Col, Form, Button } from 'react-bootstrap';
import AuthContext from '../../context/auth/authContext';
import isAuthenticatedUser from '../../utils/isAuthenticated';

import { Menu } from '../layout/Menu';
import '../style/style.css';



const Login = props => {
  const authContext = useContext(AuthContext);

  const { login, error, clearErrors, isAuthenticated } = authContext;

  useEffect(() => {
    if(isAuthenticated || isAuthenticatedUser()) {
      props.history.push('/');
    }

    if(error === 'User already exists') {
      clearErrors();
    }
  }, [error, isAuthenticated, props.history]);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { email, password } = user;

  const handleChange = e => setUser({...user, [e.target.name]: e.target.value});

  const handleSubmit = e => {
    e.preventDefault();
    login({
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

      <Container className="section" fluid>
        <Col id="login" className="wrapper">
          <Col className="text-center" xs={6} md={4}>
            <h3><em>Commit to be fit.</em></h3><br/>
            <h5><strong>Welcome back!</strong></h5>
            <Form onSubmit={handleSubmit}> 
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
              <Button className="btn-custom" type="submit">Log In</Button>
              <h6>Don't have an account? <a href='/signup'>Sign Up</a></h6>
            </Form>
          </Col>
        </Col>
      </Container>
      </> 
  )
}

export default Login;