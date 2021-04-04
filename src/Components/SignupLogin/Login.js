import React from 'react';
import styles from '../../CSS/SignupLogin.module.css';
import { Form, Card, Button, Row } from 'react-bootstrap';
import { GoogleLogin } from 'react-google-login';

const Login = () => {
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
            <Form.Control type="password" placeholder="Password" />

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
