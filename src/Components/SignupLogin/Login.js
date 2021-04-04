import React, { useState } from 'react';
import styles from '../../CSS/SignupLogin.module.css';
import { Form, Card, Button, Row, InputGroup } from 'react-bootstrap';
import { GoogleLogin } from 'react-google-login';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => setShowPassword(prevShowPassword => !prevShowPassword);

  return (
    <Row className="justify-content-md-center">
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
              <Form.Control type={showPassword ? 'text' : 'password'}  placeholder="Password" />
              <InputGroup.Append>
                <Button variant="secondary" onClick={handleShowPassword}>{showPassword ? 'Hide' : 'Show'}  </Button>
              </InputGroup.Append>
            </InputGroup>

            <a href="#">
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
  );
};

export default Login;
