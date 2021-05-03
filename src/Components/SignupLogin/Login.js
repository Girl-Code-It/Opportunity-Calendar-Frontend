import React, { useState } from 'react';
import styles from '../../CSS/SignupLogin.module.css';
import { Form, Card, Button, Row, InputGroup } from 'react-bootstrap';
import { GoogleLogin } from 'react-google-login';
import { BsEye, BsEyeSlash } from "react-icons/bs";
import LoginImg from '../../Assets/login.svg';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => setShowPassword(prevShowPassword => !prevShowPassword);

  return (
    <>
    <Row className="justify-content-md-center">
      <Card className={styles.card}>
        <h5>Login</h5>
        <img src={LoginImg} alt="Illustration by Freepik Storyset" height="500px" className="mt-3" />
        <Form>
          <Form.Group controlId="email" className={styles.inputitem}>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>

          <Form.Group controlId="passWord" className={styles.inputitem}>
            <InputGroup>
              <Form.Control type={showPassword ? 'text' : 'password'}  placeholder="Password" />
              <InputGroup.Append className={styles.reactIcons} onClick={handleShowPassword}>
                <InputGroup.Text>
                  {showPassword ? <BsEyeSlash /> : <BsEye />}
                </InputGroup.Text>
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
    <br></br>
    </>
  );
};

export default Login;
