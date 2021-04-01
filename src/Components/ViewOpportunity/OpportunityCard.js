import React from 'react';

import { NavDropdown, Card, Row, Col, Container,Button } from 'react-bootstrap';
import logo from '../../Assets/amdocs.png';
import styles from './Opportunity.module.css';

export function OpportunityCard(props) {
  const [click,setClick] = React.useState(false)
  const { item } = props;

  const toggleclick= () => setClick(!click);
  
   
  return (
    <>
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
              <div  className={styles.cardInfo}>
                <Card.Title className={styles.CardTitle}>Software Development Enginner - l</Card.Title>
                <Card.Text className={styles.CardInfo}>Abysess Solution</Card.Text> 
            </div>
            </Col>
            
          </Row>

        </Container>

        <Card.Body>
          <Card.Text>

            <Container>
              <Row>
                <Col className="col-lg-4 col-6">
                  <h5 className={styles.Heading}>
                     <span className={styles.Value}><i className="fa fa-calendar"/>{item.date}</span>
                  </h5>
                </Col>

                <Col className="col-lg-4 col-6">
                  <h5 className={styles.Heading}>
                    <span className={styles.Value}><i className="fas fa-calendar"/>{item.deadline}</span>
                  </h5>
                </Col>

                <Col className="col-lg-4 col-6">
                  <h5 className={styles.Heading}>
                    <span className={styles.Value}><i className="fas fa-map-marker-alt"/>{item.location}</span>
                  </h5>
                </Col>

                <Col className="col-lg-6 col-6">
                  <h5 className={styles.Heading}>
                    <span className={styles.Value}><i className="fas fa-briefcase"/>{item.eligibility}</span>
                  </h5>
                </Col>
                
                
              </Row>
            </Container>
            <p className={styles.Description}>{item.description}</p>
          </Card.Text>

         <div className={styles.btn}>
          <Button className={styles.Button2} variant="outline-info" onClick={toggleclick} >
            Know more
          </Button>{' '}
            <a href={item.url}>
              <button className={styles.Button1}>Apply</button>
            </a>
         </div>
         
        </Card.Body>
      </Card>
      <div className={click ? styles.active : styles.Knowblock}>
        <Card className={styles.knowCard}>
          <Container>
            <Row>
              <Col>
                <Card.Img
                  src={logo}
                  // src = {item.imgURL}
                  alt={item.title}
                  className={styles.CardImage}
                  
                />
                <div  className={styles.Know}>
                <Card.Title className={styles.KnowTitle}>Abysess Solution</Card.Title>
                <Card.Text className={styles.KnowHeading}>Software Development Enginner - l</Card.Text> 
                </div>
                
                <div className={styles.close} onClick={toggleclick}>
                  <span>&times;</span>
                </div>
                
              </Col>
            </Row>
          </Container>

          <Card.Body>
            <Card.Text>
              <Container>
                <Row>
                  <Col>
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <h5 className={styles.KnowHeading}>
                    Responsiblities:
                    </h5>
                    <p>-Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    <p>-Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    <p>-Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <h5 className={styles.KnowHeading}>
                    Qualification:
                    </h5>
                    <p>-Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    <p>-Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    <p>-Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </Col>
                </Row>

                <Row>
                  <Col className={styles.KnowHeading}>
                    <h5 className={styles.KnowHeading}>
                    Benefits and Perks:
                    </h5>
                  <p><i class="far fa-medkit"></i>Healthcare Benefits</p>
                  <p><i class="fad fa-pencil-paintbrush"></i>Educational Resources</p>
                  <p><i class="fal fa-clock"></i>Time Flexibility</p>
                  </Col>
                </Row>
              </Container>
            </Card.Text>
            <a href={item.url}>
              <button className={styles.KnowButton1}>Apply</button>
            </a>
          </Card.Body>
        </Card>
      </div>
     
  </>
 
  );
  
}
