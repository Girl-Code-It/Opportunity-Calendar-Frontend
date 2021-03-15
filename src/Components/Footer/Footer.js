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
import { BiCopyright } from 'react-icons/bi';
import { GrMail } from 'react-icons/gr';

function Footer() {
  return (
    <Jumbotron className={styles.Jumbotron}>
      <Container className={styles.ContainerFooter}>
        <Row className={styles.Top1}>
          <Col className={styles.Column2} style={{ textAlign: 'center' }}>
            <h5 style={{ fontSize: '22px'}}> PRODUCTS </h5>
            <p style={{ fontSize: '18px'}}> CodeMaps </p>
            <p style={{ fontSize: '18px'}}> Opportuntiy Calendar </p>
            <div
              className={`${styles.Rectangle} ${styles.Rectangle3}`}
              style={{ width: '200px' }}
            ></div>
          </Col>
          <Col className={styles.ImgColumn}>
            <Image className={styles.Logo} src={Logo} alt="Logo" />
          </Col>
          <Col className={styles.Column1} style={{ textAlign: 'center' }}>
            <h5 style={{ fontSize: '22px'}}> LINKS </h5>
            <p style={{ fontSize: '18px'}}> Terms and Condition </p>
            <p style={{ fontSize: '18px'}}> Privacy Policy </p>
            <div className={styles.Rectangle} style={{ width: '200px' }}></div>
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
          <h5> CONTACT US </h5>
        </Col>
        </Row>
        <Row className={styles.Top1} style={{ marginLeft: '35%' }}>
            <p style={{ paddingRight: 20 }}>
              {' '}
              <FaPhoneAlt /> (+91) - 83848-13292{' '}
            </p>
            <p style={{ paddingRight: 20 }}>
              {' '}
              <GrMail /> girlcodeit@gmail.com{' '}
            </p>
        </Row>
        <Row className={styles.Bottom1} style={{ marginLeft: '38%' }}>
          <Col>
            <p>
              {' '}
              <BiCopyright /> 2020 Girl Code It | All rights reserved.
            </p>
          </Col>
        </Row>


         {/* <Row className = {styles.Top2}>
                <Col>
                    <Image 
                        className = {styles.Logo}
                        src = {Logo}
                        alt = "Logo"
                    />
                </Col>
            </Row>  */}
        <Row className={styles.Top2}>
          <Col>
            <h5> Links </h5>
            <div className={styles.Rectangle} style={{ width: '45px' }}></div>
            <p> Terms and Condition </p>
            <p> Privacy Policy </p>
          </Col>
          {/* <hr className = {styles.line2}/> */}
          <Col style={{ textAlign: 'end' }}>
            <h5> Products </h5>
            <div className={styles.Rectangle2} style={{ width: '80px' }}></div>
            <p> CodeMaps </p>
            <p> Opportuntiy Calendar </p>
          </Col>
        </Row>
        {/* <hr className = {styles.line1}/> */}
        <Row className={styles.Top2}>
          <Col className={styles.Top3}>
            <h5> Contact Us </h5>
            <div className={styles.RectangleContainer}>
              <div
                className={styles.Rectangle3}
                style={{ width: '100px' }}
              ></div>
            </div>
            <Row className={styles.ContactRow}>
              <Col>
                <p>
                  {' '}
                  <FaPhoneAlt /> (+91) - 83848-13292{' '}
                </p>
              </Col>
              <Col>
                <p>
                  {' '}
                  <GrMail /> girlcodeit@gmail.com{' '}
                </p>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row className={styles.Bottom2}>
          <Col>
            <p data-testid="copyright" className={styles.Para}>
              {' '}
              <BiCopyright /> 2020 Girl Code It | All rights reserved.
            </p>
          </Col>
        </Row>
        <Row className={styles.Bottom2}>
          <Col className={styles.SocialLinks}>
            <a
              href="https://www.linkedin.com/company/14568052/admin/"
              className={styles.Shift}
            >
              {' '}
              <FaLinkedinIn />{' '}
            </a>
            <a
              href="https://www.instagram.com/girlcodeit/"
              className={styles.Shift}
            >
              {' '}
              <FaInstagram />{' '}
            </a>
            <a href="https://twitter.com/GirlCodeIt1" className={styles.Shift}>
              {' '}
              <FaTwitter />{' '}
            </a>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
}

export default Footer;
