import React, { Component } from 'react';
import Nnavbar from './sections/Navbar';
import styles from '../ViewOpportunity/Opportunity.module.css';

import { NavDropdown, Row, Container, Jumbotron } from 'react-bootstrap';

function PostOpportunity() {

  const URL = window.location.href;
  const splitUrl = URL.split('/postopportunity/')[1];
  const mapUrlToName = {
  techconf: 'Tech Conferences',
  codingcomp: 'Coding Competitions',
  scholarship: 'Scholarships',
  hackathon: 'Hackathons',
  internships: 'Internship Opportunities',
  fulltime: 'Full Time Jobs',
};

  return (
    <div>
      <Nnavbar />
      <div 
      className="d-none d-lg-block"
      style={{ backgroundColor: '#17a2b8', width: '100%', padding: '20px', borderRadius: '0 10rem 10rem 0 ', marginTop: '8rem', marginBottom: '-5rem', color: 'white', fontFamily: 'monospace'}}>
        <h1 style={{textAlign: 'center'}}> Opportunities don't Knock ,</h1>
        <h1 style={{ textAlign: 'center', marginLeft: '20rem'}}> So build a door for the seeker!</h1>
      </div>
      <Jumbotron  className={styles.drop}
      >
        <Container>
          <Row>
            <NavDropdown
              title={
                <span
                  className={styles.Title}
                  style={{
                    fontSize: '30px',
                    fontFamily: 'Arial, Helvetica, sans-serif',
                    marginRight: '10px',
                    marginTop: '0',
                  }}
                >
                  {mapUrlToName[splitUrl]}
                </span>
              }
              id="dropdown-basic-button"
              className={styles.Dropdown}
            >
              <NavDropdown.Item href="/postopportunity/fulltime">
                {' '}
                Full Time Jobs{' '}
              </NavDropdown.Item>
              <NavDropdown.Item href="/postopportunity/hackathon">
                {' '}
                Hackathons{' '}
              </NavDropdown.Item>
              <NavDropdown.Item href="/postopportunity/scholarship">
                {' '}
                Scholarships{' '}
              </NavDropdown.Item>
              <NavDropdown.Item href="/postopportunity/codingcomp">
                {' '}
                Coding Competitions{' '}
              </NavDropdown.Item>
              <NavDropdown.Item href="/postopportunity/techconf">
                {' '}
                Tech Conferences{' '}
              </NavDropdown.Item>
              <NavDropdown.Item href="/postopportunity/internships">
                {' '}
                Internship Opportunities{' '}
              </NavDropdown.Item>
            </NavDropdown>
          </Row>
        </Container>
      </Jumbotron>
    </div>
  );
}

export default PostOpportunity;
