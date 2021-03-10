import React from 'react';
import { Card, Row, Col, Container } from 'react-bootstrap';
import logo from '../../Assets/amdocs.png';
import styles from './Opportunity.module.css';

export function OpportunityCard(props) {
  const { item } = props;

  return (
    <div id="CodingComp" className={styles.Box}>
      <Card className={styles.Card}>
      
          <Card.Img
            variant="top"
            src={logo}
            // src = {item.imgURL}
            alt={item.title}
            className={styles.CardImage}
          />
          <Card.Body>
          <Card.Title><h1 className={styles.Title}>{item.title}</h1></Card.Title>
            <Card.Text>
          <p className={styles.Description}>{item.description}</p>
       
            <Container>
              <Row>
                <Col>
                <h5 className={styles.Heading} >
                  Date :
               
                <span className={styles.Value}>{item.date} </span></h5>
                </Col>
                <Col>
                    <h5 className={styles.Heading} >
                  Location :
                  <span className={styles.Value}>{item.location}</span>
                </h5>
               
            </Col>
                
             
                
              </Row>
            
               <Row>
                 <Col>
                 <h5 className={styles.Heading}>Deadline :
                <span className={styles.Value}>{item.deadline}</span>
                </h5>
                 </Col>
                 <Col>
                 <h5 className={styles.Heading}>
                    Eligibility :
                    <span className={styles.Value}>{item.eligibility}</span>
                  </h5>

                 </Col>
               
            
                 
               </Row>
            
              

            </Container>
            
                  </Card.Text>
              <a href={item.url}>
                <button className={styles.Button}>Apply</button>
              </a>
            
              </Card.Body>
     </Card>
     </div>
   
  );
}
