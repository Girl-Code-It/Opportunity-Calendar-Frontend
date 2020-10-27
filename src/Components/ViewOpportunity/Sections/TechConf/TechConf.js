import React, { Component } from "react";
import Navbar from "../Navbar";
import TechConfData from "./TechConfData";
import { Col, Container, Jumbotron, Row, Image, Button } from "react-bootstrap";
import TechConfCard from "./TechConfCard";

import HackathonImage from "../../../../Assets/conference-large.png";
import styles from "../../../../CSS/HackathonCard.module.css";

class TechConf extends Component {
  constructor() {
    super();
    this.state = {
      TechConfData
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
                  {this.state.TechConfData.map(knowAbout => {
                    return (
                      <TechConfCard key={knowAbout.id} knowAbout={knowAbout} />
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
                    POST OPPORTUNITY
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

export default TechConf;
