import React from 'react';
import axios from 'axios';
import { OpportunityCard } from './OpportunityCard';
import {
  Card,
  Col,
  Container,
  Jumbotron,
  Row,
  Image,
  Button,
  NavDropdown,
} from 'react-bootstrap';
import styles from './Opportunity.module.css';
import Navbar from './Navbar';

const mapPathToResource = {
  CONFERENCE: { image: import('../../Assets/conference-large.png') },
  CODINGCOMPETITION: { image: import('../../Assets/coding-large.png') },
  SCHOLARSHIP: { image: import('../../Assets/scholarship-large.png') },
  HACKATHON: { image: import('../../Assets/hackathon-large.png') },
  INTERNSHIP: { image: import('../../Assets/internships-large.png') },
  JOB: { image: import('../../Assets/fte.svg') },
};

/**
 * @param {Object} props
 * @param {string} props.path - API path. something like `internships`
 */

const URL = window.location.href;
const splitUrl = URL.split('/viewopportunity/')[1];
const mapUrlToName = {
  techconf: 'Tech Conferences',
  codingcomp: 'Coding Competitions',
  scholarship: 'Scholarships',
  hackathon: 'Hackathons',
  internships: 'Internship Opportunities',
  fulltime: 'Full Time Jobs',
};

export function ViewOpportunity(props) {
  const [data, setData] = React.useState(null);
  const [imgSrc, setImgSrc] = React.useState();

  // whenever props.path changes, get latest data from backend
  React.useEffect(() => {
    axios
      .get(generateAPIEndpoint(props.path))
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => console.log(err.stack));
  }, [props.path]);

  // lazy load image
  React.useEffect(() => {
    mapPathToResource[props.path].image.then((mod) => setImgSrc(mod.default));
  }, [props.path]);

  if (!data) {
    return (
      <div>
        <Navbar />
        <h3
          className={styles.fallbackText}
        >
          Loading Opportunities if any...
        </h3>
      </div>
    );
  }

  const data_length = data.length; // used to check whether opportunity count is 0

  return (
    <>
      <Navbar />
      <Card className="text-center">
        <Card.Body className={styles.BannerText}>
          <Card.Text className={styles.cardText}>
            {mapUrlToName[splitUrl]}
          </Card.Text>
        </Card.Body>
      </Card>
      <Jumbotron className={styles.opportunityBody}>
        <Container>
          <Row>
            <NavDropdown
              title="Select Opportunity"
              id="dropdown-basic-button"
              className={styles.Dropdown}
            >
              <NavDropdown.Item href="/viewopportunity/fulltime">
                {' '}
                      Full Time Jobs{' '}
              </NavDropdown.Item>
              <NavDropdown.Item href="/viewopportunity/hackathon">
                {' '}
                      Hackathons{' '}
              </NavDropdown.Item>
              <NavDropdown.Item href="/viewopportunity/scholarship">
                {' '}
                      Scholarships{' '}
              </NavDropdown.Item>
              <NavDropdown.Item href="/viewopportunity/codingcomp">
                {' '}
                      Coding Competitions{' '}
              </NavDropdown.Item>
              <NavDropdown.Item href="/viewopportunity/techconf">
                {' '}
                      Tech Conferences{' '}
              </NavDropdown.Item>
              <NavDropdown.Item href="/viewopportunity/internships">
                {' '}
                      Internship Opportunities{' '}
              </NavDropdown.Item>
            </NavDropdown>
          </Row>
          {data_length === 0 ? 
          (
            <div>
              <Navbar />
              <h3
                className={styles.fallbackText}
              >
                No opportunities found!!
            </h3>
            </div>
          ) : 
          (
            <>
              <Row>
                <Col md={1} sm={1} lg={1} xl={1} xs={0}></Col>
                <Col style={{ marginTop: '20px' }} md={10} sm={10} lg={10} xl={10} xs={12}>
                  {data.results.map((item) => {
                    return <OpportunityCard key={item.id} item={item} />;
                  })}
                </Col>
                <Col md={1} sm={1} lg={1} xl={1} xs={0}></Col>
              </Row>
              </>
          )}
            </Container>
          </Jumbotron>
        
      )
    </>
  );
}

/**
 * @param {string} pathChunk API endpoint path for this specific job listing
 */
function generateAPIEndpoint(TYPE) {
  return `https://opportunity-calendar.herokuapp.com/opportunity/?type=${TYPE}`;
}
