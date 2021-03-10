import React from 'react';
import styles from '../../CSS/Navbar.module.css';
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  NavDropdown,
} from 'react-bootstrap';
import { AiOutlineSearch } from 'react-icons/ai';

function navbar() {
  return (
    <Navbar fixed="top" bg="light" expand="lg" className={styles.NavBar}>
      <Navbar.Brand className={styles.Logo}>
        <a href="/" className={styles.Brand} style={{ fontSize: '35px' }}>
          Girl
          <span style={{ color: '#008dc8' }}> Code </span>
          It
        </a>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className={styles.ShiftRight}>
        <Form inline>
         
            <FormControl
              type="text"
              placeholder="Search"
              className={styles.Search}
            />
            <Button className={styles.SearchButton}>
              <AiOutlineSearch />
            </Button>
       
        </Form>
        <Nav className="mr-auto">
          <NavDropdown
            title={<span className={styles.Title}>Opportunities</span>}
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
        </Nav>
        <Button variant="outline-info">Login/Signup</Button>{' '}
      </Navbar.Collapse>
    </Navbar>
  );
}

export default navbar;
