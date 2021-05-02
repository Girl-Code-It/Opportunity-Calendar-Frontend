import React from 'react';
import styles from '../../../CSS/Navbar.module.css';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-scroll';

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
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Link smooth={true} duration={1000} to="home">
            <a className={styles.NavLinks} >Home</a>
          </Link>
          <Link smooth={true} offset={-90} duration={1000} to="about">
            <a className={styles.NavLinks}>About Us</a>
          </Link>
          <Link smooth={true} offset={-90} duration={1000} to="knowAbout">
            <a className={styles.NavLinks}>Opportunities</a>
          </Link>
          <Link smooth={true} offset={-90} duration={1000} to="faqs">
            <a className={styles.NavLinks}>FAQs</a>
          </Link>
          <Link smooth={true} offset={-90} duration={1000} to="contact">
            <a className={styles.NavLinks}>Contact Us</a>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default navbar;
