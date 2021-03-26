import React from 'react';
import styles from '../../CSS/Navbar.module.css';
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,

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

      <Form inline >
        <div className={styles.container}>
          <input className={styles.inp} type="text" placeholder="Search..."/>
          <div className={styles.search}></div>
          </div>
      </Form>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className={styles.ShiftRight}>


        <Nav className="mr-auto">

        </Nav>

        <Button href="/signup" variant="outline-info">Login/Signup</Button>{' '}
      </Navbar.Collapse>
    </Navbar>
  );
}

export default navbar;
