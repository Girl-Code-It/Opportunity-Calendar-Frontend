import React, { useState } from 'react';
import styles from '../../CSS/Forget.module.css';
import { Form, Card, Button, Row, InputGroup } from 'react-bootstrap';
import { BsEye, BsEyeSlash } from "react-icons/bs";
import forget from '../Forget/for.png' ;
import Navbar from '../HomePage/Sections/Navbar';

const Forget = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => setShowPassword(prevShowPassword => !prevShowPassword);

  return (
      <>
      <Navbar/>
    <Row className="justify-content-md-center">
      <Card className={styles.card}><br></br>
        <h1>Forget Password</h1>
        <img src={forget} alt="forget " height="430px" width="500px" className="mt-3 img" />
        <h4 className="text-muted">
          ** Regenerate Password **
        </h4>
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
