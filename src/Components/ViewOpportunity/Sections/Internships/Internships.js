import React, { Component } from "react";
import Navbar from "../Navbar";
import InternshipData from "./InternshipData";
import { Col, Container, Jumbotron, Row, Image, Button } from "react-bootstrap";
import InternshipsCard from "./InternshipsCard";

import HackathonImage from "../../../../Assets/internships-large.png";
import styles from "../../../../CSS/HackathonCard.module.css";

class Internships extends Component {
  constructor() {
    super();
    this.state = {
      InternshipData
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
                  {this.state.InternshipData.map(knowAbout => {
                    return (
                      <InternshipsCard
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

export default Internships;
