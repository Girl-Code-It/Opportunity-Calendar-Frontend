import React from 'react';
import styles from '../../CSS/Navbar.module.css';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Button } from 'react-bootstrap';
// import { AiOutlineSearch } from 'react-icons/ai';

function navbar(props) {
  return (
    <Navbar fixed="top" bg="light" expand="lg" className={styles.NavBar}>
      <Navbar.Brand className={styles.Logo}>
        <a href="/" className={styles.Brand} style={{ fontSize: '35px' }}>
          Girl
          <span style={{ color: '#008dc8' }}> Code </span>
          It
        </a>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <div className={styles.searchContainer}>
            <input
              type="text"
              className={styles.searchBar}
              placeholder="Search"
            />
          </div>
          <Link to={props.flink} className={styles.link}>
        <Button className={styles.Button} >
              Find Opportunity
            </Button>
            </Link>
          <Link className={styles.link} to="/signup">
            <Button
              className={`${styles.Button} ${styles.outline}`}
              variant="outline-info"
            >
              Login/Signup
            </Button>{' '}
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default navbar;