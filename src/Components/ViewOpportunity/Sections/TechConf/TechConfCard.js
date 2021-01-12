import React from "react";
import { Card, Row, Col, Container } from "react-bootstrap";
import styles from "../../../../CSS/TechConf.module.css";

function TechConfCard(props) {
  const { item } = props;

  return (
    <div id = "CodingComp" className = {styles.Box}>
      <Card style = {{borderRadius: "10px"}}>
        <Card.Header style = {{backgroundColor: "#008dc8", borderRadius: "10px 10px 0 0"}}></Card.Header>
        <Card.Body>
          <Row>
            <Card.Img
              variant = "top"
              src = {item.image}
              alt = {item.title}
              className = {styles.CardImage}
            />
            <h1 className = {styles.Title}>
              {item.title}
            </h1>
          </Row>
          <Row>
            <p className = {styles.Description}>
              {item.description}
            </p>
          </Row>
          <Container>
          <Row>
              <Col md = {4} lg = {4}>
                <Row>
                  <h5 className = {styles.Heading} style = {{ marginLeft: "20px" }}>
                    Date :
                  </h5>
                  <h5 className = {styles.Value}>
                    {item.date}
                  </h5>
                </Row>
              </Col>

              <Col md = {4} lg = {4}>
                <Row>
                  <h5 className = {styles.Heading} style = {{ marginLeft: "20px" }}>
                    Location :
                  </h5>
                  <h5 className = {styles.Value}>
                    {item.location}
                  </h5>
                </Row>
              </Col>

              <Col md = {4} lg = {4}>
                <Row>
                  <h5 className = {styles.Heading}>
                    Deadline :
                  </h5>
                  <h5 className = {styles.Value}>
                    {item.deadline}
                  </h5>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col md = {12} lg = {12}>
                <Row>
                  <Container>
                    <h5 className = {styles.Heading} style = {{ marginLeft: "5px" }}>
                      Eligibility : 
                      <span className = {styles.Value}>
                        {item.eligibility} 
                      </span>
                    </h5>
                  </Container>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col md = {0} lg = {12}>
                <a href = {item.url}>
                  <button className = {styles.Button}>
                    Apply
                  </button>
                </a>
              </Col>
            </Row>
          </Container>
        </Card.Body>
      </Card>
    </div>
  );
}

export default TechConfCard;
