import React, { useState } from 'react';
import styles from '../../CSS/SignupLogin.module.css';
import { Form, Card, Button, Row, InputGroup } from 'react-bootstrap';
import { GoogleLogin } from 'react-google-login';
import { BsEye, BsEyeSlash } from "react-icons/bs";
import SignupImg from '../../Assets/signup.svg';


const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => setShowPassword(prevShowPassword => !prevShowPassword);

  return (
    <>
    <Row className="justify-content-md-center">
      <Card className={styles.card}>
        <h5>Sign Up</h5>
        <img src={SignupImg} alt="Illustration by Freepik Storyset" height="500px" className="mt-3" />
        <small className="text-muted">
          Please fill this form to create your account.
        </small>
        <Form>
          <Form.Group controlId="fname" className={styles.inputitem}>
            <Form.Control type="text" placeholder="First Name" />
          </Form.Group>

          <Form.Group controlId="lname" className={styles.inputitem}>
            <Form.Control type="text" placeholder="Last Name" />
          </Form.Group>

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
          </Form.Group>

          <Form.Group controlId="c_passWord" className={styles.inputitem}>
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
    <br></br>
    </>
  );
};

export default SignUp;
