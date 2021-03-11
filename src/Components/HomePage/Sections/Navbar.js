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
          <Link active smooth={true} duration={1000} to="home">
            Home
          </Link>
          <Link smooth={true} offset={-90} duration={1000} to="about">
            About Us
          </Link>
          <Link smooth={true} offset={-190} duration={1000} to="impact">
            What we Do?
          </Link>
          <Link smooth={true} offset={-90} duration={1000} to="faqs">
            FAQs
          </Link>
          <Link smooth={true} offset={-90} duration={1000} to="contact">
            Contact Us
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default navbar;
