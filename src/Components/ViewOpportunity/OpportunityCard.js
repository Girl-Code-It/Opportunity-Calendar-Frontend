import React from 'react';

import { Card, Row, Col, Container, Image, Button } from 'react-bootstrap';
import logo from '../../Assets/amdocs.png';
import styles from './Opportunity.module.css';

export function OpportunityCard(props) {
  const { item } = props;
  return (
    <Card className={styles.Card}>
      <Container>
        <Row>
          <Col>
            <Row className={styles.headingContainer}>
              <Image
                src={logo}
                // src = {item.imgURL}
                alt={item.title}
                className={styles.CardImage}
                roundedCircle
              />
              <Col>
                <Card.Title className={styles.Title}>{item.title}</Card.Title>
                <Card.Subtitle className={styles.Subtitle}><p className={styles.Subtitle}>{item.company}</p></Card.Subtitle>
              </Col>

            </Row>

          </Col>

        </Row>
      </Container>


      <Card.Body>
        <Col>
          <Card.Text>
            {item.description && (
              <ul className={styles.BulletList}>
                <li>
                  <p className={styles.Description}>{item.description}</p>
                </li>
              </ul>
            )}


            <Container>
              <Row>
                <Col>
                  <h5 className={styles.Heading}>
                    Date :<span className={styles.Value}>{item.date} </span>
                  </h5>
                </Col>
                <Col>
                  <h5 className={styles.Heading}>
                    Location:
                  <span className={styles.Value}>{item.location}</span>
                  </h5>
                </Col>
              </Row>

              <Row>
                <Col>
                  <h5 className={styles.Heading}>
                    Deadline :
                  <span className={styles.Value}>{item.deadline}</span>
                  </h5>
                </Col>
                <Col>
                  <h5 className={styles.Heading}>
                    Eligibility :
                  <span className={styles.Value}>{item.eligibility}</span>
                  </h5>
                </Col>
              </Row>
            </Container>
          </Card.Text>
          <a href={item.url}>
            <Button variant="outline-info" className={styles.Button1}>Apply</Button>
          </a>
        </Col>

      </Card.Body>
    </Card>
  );
}
