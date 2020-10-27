import React, { Component, Text } from "react";
import Navbar from "../Navbar";
import HackathonCardData from "./HackathonCardData";
import { Col, Container, Jumbotron, Row, Image, Button } from "react-bootstrap";
import HackathonCard from "./HackathonsCard";

import HackathonImage from "../../../../Assets/hackathon-large.png";
import styles from "../../../../CSS/HackathonCard.module.css";
class Hackathons extends Component {
  constructor() {
    super();
    this.state = {
      HackathonCardData
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
                  {this.state.HackathonCardData.map(knowAbout => {
                    return (
                      <HackathonCard key={knowAbout.id} knowAbout={knowAbout} />
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

export default Hackathons;
