import React from 'react';
import styles from './SignupLogin.css'
import { Form,Card,Button, Row} from 'react-bootstrap';
import { GoogleLogin } from 'react-google-login';

const SignUp = ()=>{
    return(
        <Row className="justify-content-md-center">
            <Card className={styles.card}>
            <h5>Sign Up</h5>
            <small className="text-muted">Please fill this form to create your account.</small>
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
                    <Form.Control type="password" placeholder="Password"/>
                </Form.Group>

                <Form.Group controlId="c_passWord">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" placeholder="Confirm Password"/>
                </Form.Group>

                <input type="checkbox"/>

                <small  style={{paddingLeft:10}}>I accept the 
                    <a href="/tandc"> Terms and Conditions </a>
                    & <a href="/tandc">Privacy Policy</a>
                </small>
            </Form>
            <Button size="md" className="button">Sign Up</Button>
                <p>OR</p>
                <GoogleLogin
                    buttonText="Sign in with Google"
                />
                <p >Already have an Account? <a href="/login">Login</a></p>
        </Card>
    </Row> 
    )
}

export default SignUp;