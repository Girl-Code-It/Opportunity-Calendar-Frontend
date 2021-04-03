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
                     <span className={styles.Value}><i className="fa fa-calendar"/>23-3-2021</span>
                  </h5>
                </Col>

                <Col className="col-lg-4 col-6">
                  <h5 className={styles.Heading}>
                    <span className={styles.Value}><i className="fas fa-calendar"/>28-3-2021</span>
                  </h5>
                </Col>

                <Col className="col-lg-4 col-6">
                  <h5 className={styles.Heading}>
                    <span className={styles.Value}><i className="fas fa-map-marker-alt"/>Pure,Maharashtra</span>
                  </h5>
                </Col>

                <Col className="col-lg-6 col-6">
                  <h5 className={styles.Heading}>
                    <span className={styles.Value}><i className="fas fa-briefcase"/>CSE graduate</span>
                  </h5>
                </Col>
                
                
              </Row>
            </Container>
            <p className={styles.Description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultricies integer quis auctor elit sed. Pretium vulputate sapien nec sagittis.</p>
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
                  className={styles.KnowImage}
                  
                />
                <div  className={styles.Know}>
                <Card.Title className={styles.KnowTitle}>Abysess Solution</Card.Title>
                <Card.Text className={styles.KnowHeadingp}>Software Development Enginner - l</Card.Text> 
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
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultricies integer quis auctor elit sed. Pretium vulputate sapien nec sagittis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultricies integer quis auctor elit sed. Pretium vulputate sapien nec sagittis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <h5 className={styles.KnowHeading}>
                    Responsiblities:
                    </h5>
                     
                    <p>- Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <p> - Ultricies integer quis auctor elit sed. Pretium vulputate sapien nec sagittis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <p>- Ultricies integer quis auctor elit sed. Pretium vulputate sapien nec sagittis.
                    </p>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <h5 className={styles.KnowHeading}>
                    Qualification:
                    </h5>
                    <p>- Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <p> - Ultricies integer quis auctor elit sed. Pretium vulputate sapien nec sagittis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <p>- Ultricies integer quis auctor elit sed. Pretium vulputate sapien nec sagittis.
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
