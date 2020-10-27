import React, { Component } from "react";
import Navbar from "../Navbar";
import ScholarshipData from "./ScholarshipData";
import { Col, Container, Jumbotron, Row, Image, Button } from "react-bootstrap";
import ScholarshipsCard from "./ScholarshipsCard";

import HackathonImage from "../../../../Assets/scholarship-large.png";
import styles from "../../../../CSS/HackathonCard.module.css";

class Scholarships extends Component {
  constructor() {
    super();
    this.state = {
      ScholarshipData
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
                  {this.state.ScholarshipData.map(knowAbout => {
                    return (
                      <ScholarshipsCard
                        key={knowAbout.id}
                        knowAbout={knowAbout}
                      />
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

export default Scholarships;
