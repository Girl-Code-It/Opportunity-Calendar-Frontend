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
import styles from '../../CSS/Opportunity.module.css';
import Navbar from './Navbar';

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

export default function CommonComponents({ onSearchFinal }) {
  const handleSearchString = (value) => {
    onSearchFinal(value)
  }
  return (
    <>
      <Navbar onSearch={handleSearchString}/>
      <Card className="text-center">
        <Card.Body className={styles.BannerText}>
          <Card.Text className={styles.cardText}>
            {mapUrlToName[splitUrl]}
          </Card.Text>
        </Card.Body>
      </Card>
      <Jumbotron className={styles.opportunityBody} >
        <Container>
          <Row>
            <NavDropdown
              title="Select Opportunity"
              id="dropdown-basic-button"
              className={styles.Dropdown}
            >
              <NavDropdown.Item href="/viewopportunity/fulltime">
                {' '} Full Time Jobs{' '}
              </NavDropdown.Item>
              <NavDropdown.Item href="/viewopportunity/hackathon">
                {' '} Hackathons{' '}
              </NavDropdown.Item>
              <NavDropdown.Item href="/viewopportunity/scholarship">
                {' '} Scholarships{' '}
              </NavDropdown.Item>
              <NavDropdown.Item href="/viewopportunity/codingcomp">
                {' '} Coding Competitions{' '}
              </NavDropdown.Item>
              <NavDropdown.Item href="/viewopportunity/techconf">
                {' '} Tech Conferences{' '}
              </NavDropdown.Item>
              <NavDropdown.Item href="/viewopportunity/internships">
                {' '} Internship Opportunities{' '}
              </NavDropdown.Item>
            </NavDropdown>
            
          </Row>
          
        </Container>
      </Jumbotron>    
    </>
  );
}
