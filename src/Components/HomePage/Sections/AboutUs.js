import React from 'react';
import { Jumbotron, Container, Image, Row, Col } from 'react-bootstrap';
import styles from '../../../CSS/AboutUs.module.css';
import AboutUsImg from '../../../Assets/AboutUsImg.3bed171e.png';

export default function AboutUs() {
  return (
    <Jumbotron id="about" className={styles.body} fluid>
      <Container>
        <h1 className={styles.AboutUs_heading}>
          <span className={styles.AboutUs_About}>About</span>
          <span className={styles.AboutUs_Us}>Us</span>
        </h1>
        <Row>
          <Col md={'auto'} lg={7}>
            <Image
              src={AboutUsImg}
              className={styles.AboutUs_AboutImage}
              fluid
            />
          </Col>
          <Col md={'auto'} lg={5}>
            <p className={styles.AboutUs_description}>
              <br />
              <br />
              If you feel like you keep missing on good opportunities that others grab
              easily only because you never find out about them in time, we got you covered!!
              <br />
              <br />
              <br />
              Opportunity Calendar provides instant information on newly posted opportunities for techies.
              Now you won't miss another deadline for applying to your dream companies.
              The calendar is your one-stop solution to know all about the latest Job openings,
              Internships, Scholarships, and all tech events including Tech Conferences,
              Hackathons, and other Coding Competitions.
              <br />
              <br />

            </p>
            <br />
            <br />
            <div className={styles.AboutUs_rectangle} />
            <a href="https://girlcodeit.com" className={styles.AboutUs_knowMore}>
              Know More
            </a>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
}
