import React, { Component } from "react";
import KnowAboutCard from "./KnowAboutCard";
import KnowAboutData from "./KnowAboutData";
import { Container, Jumbotron, Row } from "react-bootstrap";
import styles from "../../../CSS/KnowAbout.module.css";

class KnowAbout extends Component {
  constructor() {
    super();
    this.state = {
      KnowAboutData,
    };
  }

  render() {
    let KnowAboutData = this.state.KnowAboutData.map((knowAbout) => {
      return (
        <KnowAboutCard
          key={knowAbout.id}
          knowAbout={knowAbout}
          link={KnowAbout.link}
        />
      );
    });

    return (
      <Jumbotron className={styles.Jumbotron}>
        <Container fluid="sm">
          <h2 className={styles.Heading}>
            Know
            <span className={styles.About}> About </span>
          </h2>
          <Row
            className="justify-content-md-center"
            style={{ marginTop: "50px" }}
          >
            {KnowAboutData}
          </Row>
        </Container>
      </Jumbotron>
    );
  }
}

export default KnowAbout;
