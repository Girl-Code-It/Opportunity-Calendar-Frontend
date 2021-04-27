import React, { useState } from 'react';
import styles from '../../CSS/SignupLogin.module.css';
import { Navbar, Form, Card, Button, Row,Col, InputGroup } from 'react-bootstrap';

import { GoogleLogin } from 'react-google-login';
import { BsEye, BsEyeSlash } from 'react-icons/bs';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () =>
    setShowPassword((prevShowPassword) => !prevShowPassword);

  return (
    <div>
      <Navbar bg="light" expand="lg" className={styles.NavBar}>
        <Navbar.Brand className={styles.Logo}>
          <a
            href="/"
            className={styles.Brand}
            style={{ fontSize: '35px', color: '#000000' }}
          >
            Girl
            <span style={{ color: '#008DC8' }}> Code </span>
            It
          </a>
        </Navbar.Brand>
      </Navbar>

      <Row className="d-flex justify-content-center">
          <Card className={styles.card}>
            <h5>Login</h5>
            <Form>
              <Form.Group controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
              </Form.Group>

              <Form.Group controlId="passWord">
                <Form.Label>Password</Form.Label>
                <InputGroup>
                  <Form.Control
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Password"
                  />
                  <InputGroup.Append
                    className={styles.reactIcons}
                    onClick={handleShowPassword}
                  >
                    <InputGroup.Text>
                      {showPassword ? <BsEyeSlash /> : <BsEye />}
                    </InputGroup.Text>
                  </InputGroup.Append>
                </InputGroup>

                <a href="/forget">
                  <small>Forgot password ?</small>
                </a>
              </Form.Group>
            </Form>
            <Button size="md" className={styles.button}>
              Login
            </Button>

            <p>OR</p>
            <GoogleLogin buttonText="Login with Google" />
            <p>
              Don't have an Account ? <a href="/signup">Signup</a>
            </p>
          </Card>
      </Row>
    </div>
  );
};

export default Login;