import React, { Component } from "react";
import {
  Jumbotron,
  Container,
  Row,
  Col,
  Form,
  Button,
} from "react-bootstrap";
import styles from "../../../CSS/ContactUs.module.css";

export default function ContactUs() {
    return (
      <Jumbotron
        id="contact"
        style={{ paddingTop: "0px", backgroundColor: "#ffffff" }}
      >
        <Container fluid="sm">
          <h1 className={styles.Heading}>
            Get In <span style={{ color: "#008dc8" }}>Touch</span>
          </h1>
          <Row
            className="justify-content-md-center"
            style={{ marginTop: "50px" }}
          >
            <Col lg={5}>
              <Form >
                <Form.Group>
                  <Form.Control
                    type="text"
                    name="name"
                    defaultValue=""
                    placeholder="John Doe"
                  />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                  <Form.Control
                    type="email"
                    name="email"
                    defaultValue=""
                    placeholder="john@example.com"
                    required
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Control
                    as="textarea"
                    rows="3"
                    name="message"
                    defaultValue=""
                    placeholder="Message"
                    required
                  />
                </Form.Group>
                <Form.Group>
                  <Button
                
                    className={styles.Button}
                    type="submit"
                  >
                    Send Message
                  </Button>
                </Form.Group>
              </Form>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    );
  }
