import React from "react";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import logo from "./logo.svg";
import "./login.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div>
      <Container>
        <h1 className="title">{"Project Tracker"}</h1>
        <Row>
          <Col>{<img src={logo} className="App-logo" alt="logo" />}</Col>
          <Col xs={5}>
            <Form>
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formHorizontalEmail"
              >
                <Form.Label column sm={2}>
                  Email
                </Form.Label>
                <Col sm={10}>
                  <Form.Control type="email" placeholder="Email" />
                </Col>
              </Form.Group>
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formHorizontalPassword"
              >
                <Form.Label column sm={2}>
                  Password
                </Form.Label>
                <Col sm={10}>
                  <Form.Control type="password" placeholder="Password" />
                </Col>
              </Form.Group>
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formHorizontalCheck"
              >
                <Col sm={{ span: 10, offset: 2 }}>
                  <Form.Check label="Remember me" />
                </Col>
              </Form.Group>

              <Link to="/home">
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Link>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Login;
