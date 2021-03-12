import React from 'react';

import { NavDropdown, Card, Row, Col, Container } from 'react-bootstrap';
import logo from '../../Assets/amdocs.png';
import styles from './Opportunity.module.css';

export function OpportunityCard(props) {
  const { item } = props;

  return (

       
      <Card className={styles.Card}>
        <Container>
          <Row>
            <Col>
            <Card.Img
           
           src={logo}
           // src = {item.imgURL}
           alt={item.title}
           className={styles.CardImage}
         />
            </Col>
            <Col>
            <Card.Title className={styles.Title}>{item.title}</Card.Title>
            </Col>
          </Row>
        </Container>
     
         
          
          <Card.Body>
         
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
      
     
       
   

  );
}
