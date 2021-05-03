import { Menu } from '../../layout/Menu'
import { Container, Form, Button } from 'react-bootstrap'
import React, { Component } from 'react';

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../../actions/authAction";
import classnames from "classnames";

const nav = [
  {
    id: 1,
    link: "/signup",
    label: "Sign up"
  }
]

class Login extends Component {
    constructor() {
      super();
      this.state = {
        email: "",
        password: "",
        errors: {}
      };
    }
    componentWillReceiveProps(nextProps) {
      if (nextProps.auth.isAuthenticated) {
        this.props.history.push("/home");
      }
  if (nextProps.errors) {
        this.setState({
          errors: nextProps.errors
        });
      }
    }

    onChange = e => {
      this.setState({ [e.target.id]: e.target.value });
    }
    onSubmit = e => {
      e.preventDefault();

      const userData = {
        email: this.state.email,
        password: this.state.password
      };
      this.props.loginUser(userData);
    };

    render(){
      const {errors} = this.state;
    return(
      <>
      <Menu nav={nav} link="/" />

      <Container className="section">
        <Form onSubmit={this.onSubmit}> 
          <Form.Group controlId="fromBasicUsername">
            <Form.Label>Email</Form.Label>
            <br/>
            <div>
            <input
              placeholder="Enter email"
              onChange={this.onChange}
              value={this.state.email}
              error={errors.email}
              id="email"
              type="email"
              className={classnames("", {
                invalid: errors.email || errors.emailnotfound
              })}
            />
            <span className="red-text">
                  {errors.email}
                  {errors.emailnotfound}
            </span>
            </div>
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <br/>
            <div>
            <input
              placeholder="Enter password"
              onChange={this.onChange}
              value={this.state.password}
              error={errors.password}
              id="password"
              type="password"
              className={classnames("", {
                invalid: errors.password || errors.passwordincorrect
              })}
            />
            <span className="red-text">
                  {errors.password}
                  {errors.passwordincorrect}
            </span>
            </div>
          </Form.Group>
          <Button 
            type="submit"
            className="btn btn-large waves-effect waves-light hoverable blue accent-3"
          >
            Login
          </Button>
        </Form>
      </Container>
      </> 
    )
    }
};

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});
export default connect(
  mapStateToProps,
  { loginUser }
)(Login);