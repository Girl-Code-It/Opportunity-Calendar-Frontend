import React from "react";
import { Card, Row, Col, Container } from "react-bootstrap";
import styles from "../../../../CSS/TechConf.module.css";

function TechConfCard(props) {
  return (
    <div id="CodingComp" className={styles.Box}>
      <Card className={styles.Card}>
        <Row>
          <Card.Img
            variant="top"
            src={require("../../../../Assets/" + props.knowAbout.imgUrl)}
            alt="Image"
            className={styles.CardImage}
          />
          <h1 className={styles.Title} style={{ color: "blue" }}>
            TITLE
          </h1>
        </Row>
        <Row>
          <h6 className={styles.Description}>{props.knowAbout.description}</h6>
        </Row>
        <Container>
          <Row>
            <Col md={8} lg={4}>
              <Row>
                <h5 className={styles.Heading} style={{ marginLeft: "20px" }}>
                  Location :{" "}
                </h5>
                <h5 className={styles.Value}>{props.knowAbout.location}</h5>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col md={8} lg={4}>
              <Row>
                <h5 className={styles.Heading} style={{ marginLeft: "20px" }}>
                  {" "}
                  Deadline:{" "}
                </h5>
                <h5 className={styles.Value}>{props.knowAbout.deadline}</h5>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col md={8} lg={4}>
              <Row>
                <h5 className={styles.Heading} style={{ marginLeft: "20px" }}>
                  {" "}
                  Deadline:{" "}
                </h5>
                <h5 className={styles.Value}>{props.knowAbout.deadline}</h5>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col md={0} lg={12}>
              <a href={props.knowAbout.url}>
                <button className={styles.Button}>Apply</button>
              </a>
            </Col>
          </Row>
        </Container>
      </Card>
    </div>
  );
}

export default TechConfCard;
