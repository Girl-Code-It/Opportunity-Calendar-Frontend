import React from "react";
import { Card, Row, Col, Container } from "react-bootstrap";
import styles from "../../../../CSS/FullTime.module.css";

function FullTimeCard(props) {
  const { item } = props;
  
  return (
    <div id = "fulltime" className = {styles.Box}>
      <Card style = {{borderRadius: "10px"}}>
        <Card.Header style = {{backgroundColor: "#008dc8", borderRadius: "10px 10px 0 0"}}></Card.Header>
        <Card.Body>
          <Row>
            <Card.Img
              variant = "top"
              src = {item.image}
              alt = {item.company}
              className = {styles.CardImage}
            />
            <Col>
              <h1 className = {styles.Title}>
                {item.company}
              </h1>
              <h3 className = {styles.Title2}> 
                {item.title} (Job ID : {item.jobId})
              </h3>
            </Col>
          </Row>
          <Row>
            <p className = {styles.Description}>
              {item.jobDescription}
            </p>
          </Row>
          <Container>
            <Row>
            <Col md = {6} lg = {6}>
                <Row>
                  <h5 className = {styles.Heading} style = {{ marginLeft: "20px" }}>
                    Location :
                  </h5>
                  <h5 className = {styles.Value}>
                    {item.location}
                  </h5>
                </Row>
              </Col>

              <Col md = {6} lg = {6}>
                <Row>
                  <h5 className = {styles.Heading} style = {{ marginLeft: "20px" }}>
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
                    <h5 className = {styles.Heading} style = {{ marginLeft: "4px" }}>
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
                <a href = {item.jobURL}>
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

export default FullTimeCard;
