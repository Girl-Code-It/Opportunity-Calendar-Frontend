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
    opportunityOrganisation,
    organisationLogoURL,
    opportunityURL } = props.item;

  const changeDateFormat = (timestamp) => {
    const date = new Date(timestamp).toLocaleDateString().split('/');
    return date[1] + '-' + date[0] + '-' + date[2];
  }

  return (
    <Card className={styles.Card}>
      <Container>
        <Row>
          <Col>
            <Row className={styles.headingContainer}>
              <Image
                src = {organisationLogoURL}
                alt={opportunityTitle}
                className={styles.CardImage}
                roundedCircle
              />
              <Col>
                <Card.Title className={styles.Title}>{opportunityTitle}</Card.Title>
                {
                  opportunityOrganisation &&
                  <Card.Subtitle className={styles.Subtitle}><p className={styles.Subtitle}> {opportunityOrganisation} </p></Card.Subtitle>
                }
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
                    Date :<span className={styles.Value}>{changeDateFormat(opportunityDate)}</span>
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
                  <span className={styles.Value}>{changeDateFormat(opportunityRegistrationDeadline)}</span>
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
