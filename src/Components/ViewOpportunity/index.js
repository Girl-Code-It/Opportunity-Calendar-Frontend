import React from 'react';
import axios from 'axios';
import { OpportunityCard } from './OpportunityCard';
import {Card, Col, Container, Jumbotron, Row, Image, Button } from 'react-bootstrap';
import styles from './Opportunity.module.css';
import Navbar from './Navbar';

const mapPathToResource = {
  conference: { image: import('../../Assets/conference-large.png') },
  competition: { image: import('../../Assets/coding-large.png') },
  scholarship: { image: import('../../Assets/scholarship-large.png') },
  hackathon: { image: import('../../Assets/hackathon-large.png') },
  intern: { image: import('../../Assets/internships-large.png') },
  job: { image: import('../../Assets/fte.svg') },
};

/**
 * @param {Object} props
 * @param {string} props.path - API path. something like `internships`
 */

export function ViewOpportunity(props) {
  const [data, setData] = React.useState([]);
  const [imgSrc, setImgSrc] = React.useState();
  const [postOpportunityPath, setPostOpportunityPath] = React.useState();

  // whenever props.path changes, get latest data from backend
  React.useEffect(() => {
    axios
      .get(generateAPIEndpoint(props.path))
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err.stack));
  }, [props.path]);

  // lazy load image
  React.useEffect(() => {
    mapPathToResource[props.path].image.then((mod) => setImgSrc(mod.default));
  }, [props.path]);

  // as the last chunk of ViewOpportunity and PostOpportunity is same, we can
  // simply extract it from the URL. passing a prop is not necessary
  React.useEffect(() => {
    const pathname = window.location.pathname;
    const lastChunk = pathname.split('/').pop();
    lastChunk && setPostOpportunityPath(`/postopportunity/${lastChunk}`);
  }, []);

  if (data.length === 0 || !data) {
    return (
      <div>
        <Navbar />
        <h3
          style={{
            textAlign: 'center',
            marginTop: '220px',
            marginBottom: '200px',
          }}
        >
          No opportunities, sorry!
        </h3>
      </div>
    );
  }

  return (
    <>
      <div>
        <Navbar />
        <div>
          <Jumbotron style={{ backgroundColor: 'white' , marginTop:'5rem'}}>
          <Card className="text-center">
  <Card.Header style={{backgroundColor:'#008dc8'}}></Card.Header>
  <Card.Body>
    <Card.Title>  <Image
                   style={{height: '5rem'}}
                    src={imgSrc}
                    alt="TechConfImage"
                  ></Image></Card.Title>
    <Card.Text>
                
                  


    </Card.Text>
    <Button variant="primary"  href={postOpportunityPath}>Post Opportunity</Button>
  </Card.Body>
  <Card.Footer className="text-muted"  style={{backgroundColor:'#008dc8'}}></Card.Footer>
</Card>
            <Container>
              <Row>
                <Col style={{ marginTop: '20px' }} sm={12}>
                  {data.map((item) => {
                    return <OpportunityCard key={item.id} item={item} />;
                  })}
                </Col>
                
              </Row>
            </Container>
          </Jumbotron>
        </div>
      </div>
      );
    </>
  );
}

/**
 * @param {string} pathChunk API endpoint path for this specific job listing
 */
function generateAPIEndpoint(pathChunk) {
  return `https://opportunitycalendar.herokuapp.com/opportunities/${pathChunk}/list/`;
}
