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
              <i>"Knowledge is the only thing that grows when shared." </i>
              <br />
              <br />
              Girl Code It aka GCI, is a group of people who firmly believe in
              this statement and are eager to build a healthy coding culture
              among young coders.
              <br />
              <br />
              The best thing about the internet is that there is no shortage of
              information; but sometimes, there is just too much information,
              which can be overwhelming. To streamline the amount of information
              in the right way can be a taxing process, but here is where we can
              be of assistance! Our codemaps are specially structured according
              to common needs and are easy to follow! All you need to bring with
              you is the will to learn!
              <br />
              <br />
              So what are you waiting for? Come join us!
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
