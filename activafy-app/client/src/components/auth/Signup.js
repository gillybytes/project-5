
import { Menu } from '../layout/Menu'
import { Container, Col, Form, Button, Modal } from 'react-bootstrap'

import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';

import '../style/Auth.css';

import PropTypes from "prop-types";
import { registerUser } from "../../actions/authAction";
import classnames from "classnames";

const nav = [
  {
    id: 1,
    link: "/",
    label: "Login"
  }
]

class Signup extends Component {
  constructor(){
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      errors: {}
    };
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }


  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };
    this.props.registerUser(newUser, this.props.history); 
  };


  render(){
    const { errors } = this.state;
  return(
      <>
        <Menu nav={nav} link='/'/>

        <Container className="section">
          <Col class id="signup" className="wrapper">
            <Col className="text-center" xs={6} md={4}>
              <h3><em>Commit to be fit.</em></h3>
              <h5>Create an account.</h5>
              <Form onSubmit={this.onSubmit}>
                <Form.Group controlId="formBasicName">
                  <Form.Label>Name</Form.Label>
                  <div>
                    <input
                      onChange={this.onChange}
                      value={this.state.name}
                      error={errors.name}
                      id="name"
                      type="text"
                      className={classnames("", {
                        invalid: errors.name
                      })}
                    />
                    <span className="red-text">{errors.name}</span>
                  </div>
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <div>
                    <input
                      onChange={this.onChange}
                      value={this.state.email}
                      error={errors.email}
                      id="email"
                      type="email"
                      className={classnames("", {
                        invalid:errors.email
                      })}
                    />
                    <span className="red-text">{errors.email}</span>
                  </div>

                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <div>
                    <input
                      onChange={this.onChange}
                      value={this.state.password}
                      error={errors.password}
                      id="password"
                      type="password"
                      className={classnames("", {
                        invalid: errors.password
                      })}
                    />
                    <span className="red-text">{errors.password}</span>
                  </div>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Confirm Password</Form.Label>
                  <div>
                    <input
                      onChange={this.onChange}
                      value={this.state.password2}
                      error={errors.password2}
                      id="password2"
                      type="password"
                      className={classnames("", {
                        invalid: errors.password2
                      })}
                    />
                    <span className="red-text">{errors.password2}</span>
                  </div>
                </Form.Group>

                <Button type = "submit">
                  Sign up
                </Button>
                <Button variant="primary" href="/home">
                  Sign in with Google account
                </Button>
                <Button variant="primary" >
                  Forgot password?
                </Button>
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
}
Signup.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});
export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Signup));