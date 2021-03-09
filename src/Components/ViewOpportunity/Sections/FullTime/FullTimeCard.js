import React from "react";
import { Card, Row, Col, Container } from "react-bootstrap";
import Button from '@material-ui/core/Button';

import styles from "../../../../CSS/FullTime.module.css";

function FullTimeCard(props) {
  const { item } = props;
  
  return (
  
      <Card  style={{marginTop:'1rem'}}>
        <Row >
          <Card.Img
            variant = "top"
            src = {item.image}
            alt = {item.company}
            className = {styles.CardImage} 
          />
          <Col >
            <h1 className = {styles.Title} style = {{ color: "#008cd8" }}>
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
            <Col  md = {12} lg = {12} >
              <Row>
                <h5 className = {styles.Heading} style = {{ marginLeft: "20px" }}>
                  Apply Before : 
                </h5>
                <h5 className = {styles.Value}> 
                  {item.deadline}
                </h5>
              </Row>
            </Col>

            <Col md = {12} lg = {12} >
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
            <Col>
              <a href = {item.jobURL}>
              <Button variant="contained" color="primary"  style={{marginTop:"1rem" , marginBottom:"1rem"}}>
  Apply
</Button>
              </a>
            </Col>
          </Row>
        </Container>
      </Card>
    
  );
}

export default FullTimeCard;
