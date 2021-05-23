import React, { useState } from 'react';
import axios from 'axios';
import { OpportunityCard } from './OpportunityCard';
import {
  Card,
  Col,
  Container,
  Jumbotron,
  Row,
  NavDropdown,
} from 'react-bootstrap';
import styles from '../../CSS/Opportunity.module.css';
import Navbar from './Navbar';
import CommonComponents from './CommonComponents';

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
  const [data, setData] = useState(null);
  const [imgSrc, setImgSrc] = useState();
  const [filteredData, setFilteredData] = useState(data);
  const [searchString, setSearchString] = useState('');

  React.useEffect(() => {
    if (searchString?.length > 0) {
      setFilteredData(
        data.results.filter((opportunity) => {
          if (
            opportunity.opportunityTitle
              ?.toLowerCase()
              .includes(searchString.toLowerCase()) ||
            opportunity.opportunityOrganisation
              ?.toLowerCase()
              .includes(searchString.toLowerCase())
          ) {
            return opportunity;
          }
        })
      );
    } else {
      setFilteredData(data?.results);
    }
  }, [searchString, data]);

  const handleSearchString = (val) => {
    setSearchString(val);
  };

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
        <CommonComponents onSearchFinal={handleSearchString} />
        <h3 className={styles.fallbackText}>Loading Opportunities if any...</h3>
      </div>
    );
  }

  const data_length = filteredData?.length; // used to check whether opportunity count is 0

  return (
    <>
      <CommonComponents onSearchFinal={handleSearchString} />
      <Jumbotron className={styles.opportunityBody}>
        <Container>
          {data_length === 0 ? (
            <div>
              <h3 className={styles.fallbackText}>No opportunities found!!</h3>
            </div>
          ) : (
            <>
              <Row>
                <Col md={1} sm={1} lg={1} xl={1} xs={0}></Col>
                <Col md={10} sm={10} lg={10} xl={10} xs={12}>
                  {filteredData?.map((item) => {
                    return <OpportunityCard key={item.id} item={item} />;
                  })}
                </Col>
                <Col md={1} sm={1} lg={1} xl={1} xs={0}></Col>
              </Row>
            </>
          )}
        </Container>
      </Jumbotron>
    </>
  );
}

/**
 * @param {string} pathChunk API endpoint path for this specific job listing
 */
function generateAPIEndpoint(TYPE) {
  return `https://opportunity-calendar.herokuapp.com/opportunity/?type=${TYPE}`;
}
