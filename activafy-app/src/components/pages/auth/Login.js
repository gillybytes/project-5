import { Menu } from '../../layout/Menu'
import { Container, Form, Button } from 'react-bootstrap'
import React, { useState } from 'react';

import { toast } from "react-toastify";

export const Login = ({ setAuth }) => {

    const [inputs, setInputs] = useState({
      email: "",
      password: "",
    });

    const {email, password} = inputs;

    const onChange = e => {
      setInputs({...inputs, [e.target.name]: e.target.value});

    }; 

    const onSubmitForm = async(e) => {
      e.preventDefault();
      try {
          const body = {email, password};
          const response = await fetch("http://localhost:5000/auth/login1",
              {
                  method: "POST",
                  headers: {"Content-Type": "application/json"},
                  body: JSON.stringify(body)
              }
          );
              const parseRes = await response.json();

              if(parseRes.token) {
                  localStorage.setItem('token', parseRes.token);
                  setAuth(true);
                  toast.success(`Welcome Back, ${parseRes.name.charAt(0).toUpperCase()}${parseRes.name.substring(1,)}!`)
              } else {
                  setAuth(false);
                  toast.error(parseRes);
              }
            
      } catch (err) {
          console.error(err.message);
      }
    };
    
    const nav = [
        {
          id: 1,
          link: "/signup",
          label: "Sign up"
        }
      ]
    
    return(
        <>
        <Menu nav={nav} link="/" />
        <Container className="section">
          <Form onSubmit={onSubmitForm}>
            <Form.Group controlId="fromBasicUsername">
              <Form.Label>Email</Form.Label>
              <Form.Control 
                type="email"
                name="email" 
                placeholder="Enter email"
                value={email}
                onChange={e => onChange(e)}
                />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control 
                name="password"
                type="password" 
                placeholder="Enter password" 
                value={password}
                onChange={e => onChange(e)}
                />
            </Form.Group>
            <Button className="btn btn-success btn-block">
              Login
            </Button>
          </Form>
        </Container>
        </>
    )
}