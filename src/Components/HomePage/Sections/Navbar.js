import React from 'react';
import styles from '../../../CSS/Navbar.module.css';
import { Navbar, Nav, Image } from 'react-bootstrap';
import { Link } from 'react-scroll';
import Logo from '../../../Assets/GCI.png';

function navbar() {
  return (
    <Navbar fixed="top" bg="light" expand="lg" className={styles.NavBar}>
      <Navbar.Brand className={styles.Logo}>
        <a href="/" className={styles.Brand} style={{ fontSize: '35px' }}>
        <Image  className={styles.Logo}  src={Logo} alt="Logo" width="110"
          height="80" /> 
          Girl
          <span style={{ color: '#008dc8' }}> Code </span>
          It
        </a>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Link smooth={true} duration={1000} to="home">
            Home
          </Link>
          <Link smooth={true} offset={-90} duration={1000} to="about">
            About Us
          </Link>
          <Link smooth={true} offset={-90} duration={1000} to="knowAbout">
            Opportunities
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
