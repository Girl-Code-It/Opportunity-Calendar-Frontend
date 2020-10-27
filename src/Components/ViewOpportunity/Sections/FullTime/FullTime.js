import React, { Component } from "react";
import Navbar from "../Navbar";
import { Col, Container, Jumbotron, Row, Image, Button } from "react-bootstrap";
import FullTimeData from "./FullTimeData";
import FullTimeCard from "./FullTimeCard";
import HackathonImage from "../../../../Assets/fte.svg";
import styles from "../../../../CSS/FullTime.module.css";

class FullTime extends Component {
  constructor() {
    super();
    this.state = {
      FullTimeData
    };
  }
  render() {
    return (
      <div>
        <Navbar />
        <div>
          <Jumbotron
            style={{
              backgroundColor: "white"
            }}
          >
            <Container>
              <Row>
                <Col style={{ marginTop: "20px" }}>
                  {this.state.FullTimeData.map(knowAbout => {
                    return (
                      <FullTimeCard key={knowAbout.id} knowAbout={knowAbout} />
                    );
                  })}
                </Col>
                <Col style={{ marginLeft: "700px", marginTop: "20px" }}>
                  <Image
                    className={styles.BannerImage}
                    src={HackathonImage}
                    alt="HackathonImage"
                  ></Image>
                  <Button
                    className={styles.Button}
                    style={{
                      marginTop: "50px",
                      fontSize: "12px",
                      marginLeft: "10px"
                    }}
                  >
                    POST OPPRTUNITY
                  </Button>
                </Col>
              </Row>
            </Container>
          </Jumbotron>
        </div>
      </div>
    );
  }
}

export default FullTime;
