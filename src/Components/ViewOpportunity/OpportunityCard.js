import React from 'react';

import { Card, Row, Col, Container, Image, Button } from 'react-bootstrap';
import logo from '../../Assets/amdocs.png';
import styles from './Opportunity.module.css';

export function OpportunityCard(props) {
  const { opportunityId,
    opportunityType,
    opportunityLocation,
    opportunityDescription,
    opportunityEligibility,
    opportunityRegistrationDeadline,
    opportunityDate,
    opportunityTitle,
    opportunityURL } = props.item;
    
  return (
    <Card className={styles.Card}>
      <Container>
        <Row>
          <Col>
            <Row className={styles.headingContainer}>
              <Image
                src={logo}
                // src = {item.imgURL}
                alt={opportunityTitle}
                className={styles.CardImage}
                roundedCircle
              />
              <Col>
                <Card.Title className={styles.Title}>{opportunityTitle}</Card.Title>
                <Card.Subtitle className={styles.Subtitle}><p className={styles.Subtitle}>  </p></Card.Subtitle>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>

      <Card.Body>
        <Col>
          <Card.Text>
            {opportunityDescription && (
              <ul className={styles.BulletList}>
                <li>
                  <p className={styles.Description}>{opportunityDescription}</p>
                </li>
              </ul>
            )}
            <Container>
              <Row>
                <Col>
                  <h5 className={styles.Heading}>
                    Date :<span className={styles.Value}>{opportunityDate} </span>
                  </h5>
                </Col>
                <Col>
                  <h5 className={styles.Heading}>
                    Location:
                  <span className={styles.Value}>{opportunityLocation}</span>
                  </h5>
                </Col>
              </Row>

              <Row>
                <Col>
                  <h5 className={styles.Heading}>
                    Deadline :
                  <span className={styles.Value}>{opportunityRegistrationDeadline}</span>
                  </h5>
                </Col>
                <Col>
                  <h5 className={styles.Heading}>
                    Eligibility :
                  <span className={styles.Value}>{opportunityEligibility}</span>
                  </h5>
                </Col>
              </Row>
            </Container>
          </Card.Text>
          <a href={opportunityURL}>
            <Button variant="outline-info" className={styles.Button1}>Apply</Button>
          </a>
        </Col>
      </Card.Body>
    </Card>
  );
}
