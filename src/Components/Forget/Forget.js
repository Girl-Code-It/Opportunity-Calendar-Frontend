import React, { useState } from 'react';
import styles from '../../CSS/Forget.module.css';
import {Navbar, Form, Card, Button, Row, InputGroup } from 'react-bootstrap';
import { BsEye, BsEyeSlash } from "react-icons/bs";
import forget from '../Forget/forget.png' ;


const Forget = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => setShowPassword(prevShowPassword => !prevShowPassword);

  return (
      <>
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
    <Row className="justify-content-md-center">
      <Card className={styles.card}><br></br>
        <h5>Forgot Password</h5>
        <img src={forget} alt="Illustration by Freepik Storyset " height="430px" width="500px" className="mt-3 img" />
        <Form >
          <Form.Group controlId="fname">
            <Form.Control type="text" placeholder="Enter Your Name" className={styles.inputitem}/>
          </Form.Group>

          <Form.Group controlId="email">
            <Form.Control type="email" placeholder="name@example.com" className={styles.inputitem} />
          </Form.Group>

          <Form.Group controlId="passWord">
            <InputGroup>
              <Form.Control type={showPassword ? 'text' : 'password'}  placeholder="Password" className={styles.inputitem}/>
              <InputGroup.Append className={styles.reactIcons} onClick={handleShowPassword}>
                <InputGroup.Text>
                  {showPassword ? <BsEyeSlash /> : <BsEye />}
                </InputGroup.Text>
              </InputGroup.Append>
            </InputGroup>
          </Form.Group>

          <Form.Group controlId="c_passWord">
            <Form.Control type="password" placeholder="Confirm Password" className={styles.inputitem} />
          </Form.Group>
        </Form>
        <Button size="md" className={styles.button}>
        <a href="/login" style={{color:"white"}}>Submit</a>
        </Button>
        <br></br>
      </Card>
    </Row>
    <br></br> <br></br>
    </>
  );
};

export default Forget;
