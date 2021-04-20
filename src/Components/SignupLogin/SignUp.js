import React, { useState } from 'react';
import styles from '../../CSS/SignupLogin.module.css';
import { Form, Card, Button, Row, InputGroup,Navbar } from 'react-bootstrap';
import { GoogleLogin } from 'react-google-login';
import { BsEye, BsEyeSlash } from 'react-icons/bs';

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () =>
    setShowPassword((prevShowPassword) => !prevShowPassword);

  return (
    <div>
      <Navbar bg="light" expand="lg" className={styles.NavBar}>
        <Navbar.Brand className={styles.Logo}>
          <a href="/" className={styles.Brand} style={{ fontSize: '35px',color: '#000000' }}>
            Girl
            <span style={{ color: '#008DC8' }}> Code </span>
            It
          </a>
        </Navbar.Brand>
      </Navbar>

      <Row className="d-flex justify-content-center">
        <Card className={styles.card}>
          <h5>Sign Up</h5>
          <small className="text-muted">
            Please fill this form to create your account.
          </small>
          <Form>
            <Form.Group controlId="fname">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" placeholder="First Name" />
            </Form.Group>

            <Form.Group controlId="lname">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" placeholder="Last Name" />
            </Form.Group>

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
            </Form.Group>

            <Form.Group controlId="c_passWord">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password" placeholder="Confirm Password" />
            </Form.Group>

            <input type="checkbox" />

            <small style={{ paddingLeft: 10 }}>
              I accept the
              <a href="#"> Terms and Conditions </a>&{' '}
              <a href="#">Privacy Policy</a>
            </small>
          </Form>
          <Button size="md" className={styles.button}>
            Sign Up
          </Button>
          <p>OR</p>
          <GoogleLogin buttonText="Sign in with Google" />
          <p>
            Already have an Account? <a href="/login">Login</a>
          </p>
        </Card>
      </Row>
    </div>
  );
};

export default SignUp;
