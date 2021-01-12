import React from "react";
import { Container, Jumbotron, Row, Col, Image } from "react-bootstrap";
import Logo from "../../Assets/GCI.png"
import styles from "../../CSS/Footer.module.css";
import { FaLinkedinIn, FaInstagram, FaTwitter, FaPhoneAlt } from "react-icons/fa";
import { BiCopyright } from "react-icons/bi"
import { GrMail } from "react-icons/gr";

function Footer() {
  return (
    <Jumbotron className = {styles.Jumbotron}>
        <Container className = {styles.Container}>
            <Row className = {styles.Top1}>
                <Col>
                    <Image 
                        className = {styles.Logo}
                        src = {Logo}
                        alt = "Logo"
                    />
                </Col>
                <Col className = {styles.Column}>
                    <h5 className = {styles.Border}> Links </h5>
                    <p> Terms and Condition </p>
                    <p> Privacy Policy </p>
                </Col>
                <hr className = {styles.line2}/>
                <Col className = {styles.Column}>
                    <h5 className = {styles.Border}> Products </h5>
                    <p> CodeMaps </p>
                    <p> Opportuntiy Calendar </p>
                </Col>
                <hr className = {styles.line2}/>
                <Col className = {styles.Column}>
                    <h5 className = {styles.Border}> Contact Us </h5>
                    <Row>
                        <Col md = {10}>
                            <p> <FaPhoneAlt />  (+91) - 83848-13292 </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col md = {10}>
                            <p> <GrMail />  girlcodeit@gmail.com </p>
                        </Col>
                    </Row>               
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
            </Row> */}
            <Row className = {styles.Top2}>
                <Col>
                    <h5 style ={{textDecoration: "underline"}}> Links </h5>
                    <p> Terms and Condition </p>
                    <p> Privacy Policy </p>
                </Col>
                <Col>
                    <h5 style = {{textAlign: "end", textDecoration: "underline"}}> Products </h5>
                    <p style = {{textAlign: "end"}}> CodeMaps </p>
                    <p style = {{textAlign: "end"}}> Opportuntiy Calendar </p>
                </Col>
            </Row>
            <Row className = {styles.Top2}>
                <Col className = {styles.Top3}>
                    <h5 style ={{textDecoration: "underline"}}> Contact Us </h5>
                    <Row>
                        <Col>
                            <p> <FaPhoneAlt />  (+91) - 83848-13292 </p>
                        </Col>
                        <Col>
                            <p> <GrMail />  girlcodeit@gmail.com </p>
                        </Col>
                    </Row>               
                </Col>
            </Row>
            <hr className = {styles.line1}/>
            <Row className = {styles.Bottom1}>
                <Col>
                    <p> <BiCopyright /> 2020 Girl Code It | All rights reserved.</p>
                </Col>
                <Col className = {styles.SocialLinks}>
                    <a href = "https://www.linkedin.com/company/14568052/admin/" className = {styles.Shift}> <FaLinkedinIn /> </a>
                    <a href = "https://www.instagram.com/girlcodeit/" className = {styles.Shift}> <FaInstagram /> </a>
                    <a href = "https://twitter.com/GirlCodeIt1" className = {styles.Shift}> <FaTwitter /> </a>
                </Col>
            </Row>
            <Row className = {styles.Bottom2}>
                <Col>
                    <p className = {styles.Para}> <BiCopyright /> 2020 Girl Code It | All rights reserved.</p>
                </Col>
            </Row>
            <Row className = {styles.Bottom2}>
                <Col className = {styles.SocialLinks}>
                    <a href = "https://www.linkedin.com/company/14568052/admin/" className = {styles.Shift}> <FaLinkedinIn /> </a>
                    <a href = "https://www.instagram.com/girlcodeit/" className = {styles.Shift}> <FaInstagram /> </a>
                    <a href = "https://twitter.com/GirlCodeIt1" className = {styles.Shift}> <FaTwitter /> </a>
                </Col>
            </Row>
        </Container>
    </Jumbotron>
  );
}

export default Footer;