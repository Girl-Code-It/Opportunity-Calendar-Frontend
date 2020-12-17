import React from "react";
import { Card, Row, Col, Container } from "react-bootstrap";
import logo  from "../../../../Assets/amdocs.png";
import styles from "../../../../CSS/FullTime.module.css";

function FullTimeCard(props) {
  const { item } = props;
  
  return (
    <div id = "fulltime" className = {styles.Box}>
      <Card className = {styles.Card}>
        <Row>
          <Card.Img
            variant = "top"
            src = {logo}
            // src = {item.imgURL}
            alt = {item.company}
            className = {styles.CardImage}
          />
          <Col>
            <h1 className = {styles.Title} style = {{ color: "#008cd8" }}>
              {item.title}
            </h1>
            <h3 className = {styles.Title2}> 
              Job ID : {item.jobId} 
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
            <Col md = {8} lg = {4}>
              <Row>
                <h5 className = {styles.Heading} style = {{ marginLeft: "20px" }}>
                  Apply Before : 
                </h5>
                <h5 className = {styles.Value}> 
                  {item.deadline}
                </h5>
              </Row>
            </Col>

            <Col md = {8} lg = {4}>
              <Row>
                <h5 className = {styles.Heading} style = {{ marginLeft: "20px" }}>
                  Location :
                </h5>
                <h5 className = {styles.Value}> 
                  {item.location}
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
              <a href = {item.jobURL}>
                <button className = {styles.Button}>
                  Apply
                </button>
              </a>
            </Col>
          </Row>
        </Container>
      </Card>
    </div>
  );
}

export default FullTimeCard;
