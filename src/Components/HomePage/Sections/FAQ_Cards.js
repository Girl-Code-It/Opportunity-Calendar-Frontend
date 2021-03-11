import React from 'react';
import styles from '../../../CSS/FAQ.module.css';
import { Container, Row, Col } from 'react-bootstrap';
import arrow from '../../../Assets/arrow.png';
import arrowup from '../../../Assets/arrowup.png';

function FAQCard(props) {
  const { open } = props.item;
  return (
    <div key={props.item.id} onClick={() => props.handleChange(props.item.id)}>
      <Container>
        <Row className={`${styles.faqs}`}>
          <Col md={10} sm={10} xs={10}>
            <div className={`${styles.question}`}>{props.item.question}</div>
          </Col>
          <Col lg={2} md={2} sm={2} xs={2}>
            <img
              src={open ? arrowup : arrow}
              className={`${styles.image}`}
              alt="arrow"
              height="10px"
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <div className={`${open ? styles.answeropen : styles.answer}`}>
              {props.item.answer}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default FAQCard;
