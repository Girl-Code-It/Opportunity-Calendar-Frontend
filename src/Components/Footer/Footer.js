import React from 'react';
import { Container, Jumbotron, Row, Col, Image } from 'react-bootstrap';
import Logo from '../../Assets/GCI.png';
import styles from '../../CSS/Footer.module.css';
import {
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
  FaPhoneAlt,
} from 'react-icons/fa';
// import { BiCopyright } from 'react-icons/bi';
import { GrMail } from 'react-icons/gr';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <Jumbotron className={styles.Jumbotron}>
      <Container className={styles.ContainerFooter}>
        <Row className={styles.Top1}>
          <Col className={styles.Column1} style={{ textAlign: 'center' }}>
            <h5 style={{ fontSize: '22px' }}> Products </h5>
            <div className={styles.Rectangle} style={{ width: '120px' }}></div>
            <a href="https://girlcodeit.com/codemaps">
              <p style={{ fontSize: '18px', color: 'black', cursor: "pointer" }}>CodeMaps</p>
            </a>
            <Link to="/">
              <p style={{ fontSize: '18px', color: "black", cursor: "pointer" }}> Opportuntiy Calendar </p>
            </Link>
          </Col>

          <Col className={styles.ImgColumn}>
            <a href="https://girlcodeit.com/">
              <Image className={styles.Logo} src={Logo} alt="Logo" />
            </a>
          </Col>

          <Col className={styles.Column2} style={{ textAlign: 'center' }}>
            <h5 style={{ fontSize: '22px' }}> Links </h5>
            <div className={styles.Rectangle2} style={{ width: '70px' }}></div>
            <p style={{ fontSize: '18px', color: 'black' }}> Terms and Condition </p>
            <p style={{ fontSize: '18px', color: 'black' }}> Privacy Policy </p>
          </Col>
        </Row>

        <Row className={styles.SocialLinks}>
          <a
            data-testid="linkedin"
            href="https://www.linkedin.com/company/14568052/admin/"
            className={styles.Shift}
          >
            {' '}
            <FaLinkedinIn />{' '}
          </a>
          <a
            data-testid="instagram"
            href="https://www.instagram.com/girlcodeit/"
            className={styles.Shift}
          >
            {' '}
            <FaInstagram />{' '}
          </a>
          <a
            data-testid="twitter"
            href="https://twitter.com/GirlCodeIt1"
            className={styles.Shift}
          >
            {' '}
            <FaTwitter />{' '}
          </a>
        </Row>

        <Row className={styles.Top1}>
          <Col className={styles.ContactCol} style={{ textAlign: 'center' }}>
            <h5> Contact Us </h5>
            <div className={styles.Rectangle3}></div>
          </Col>
        </Row>

        <Row className={(styles.Top1, styles.ContactRow)}>
          <p>
            {' '}
            <FaPhoneAlt /> (+91) - 83848-13292{' '}
          </p>
          <p>
            {' '}
            <GrMail /> girlcodeit@gmail.com{' '}
          </p>
        </Row>

        <Row className={styles.Bottom1}>
          <Col>
            <p>
              &copy; {new Date().getFullYear()} Girl Code It | All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
}

export default Footer;
