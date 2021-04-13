import React, { Component } from 'react';
import Navbar from '../Navbar';
import InternshipForm from './InternshipForm';
import styles from '../../../../CSS/FullTimeForm.module.css';

function Internships() {
  return (
    <div>
      <Navbar />
      <div className={styles.FullTimeComponent}>
        <InternshipForm />
      </div>
    </div>
  );
}

export default Internships;
