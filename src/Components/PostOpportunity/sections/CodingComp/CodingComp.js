import React, { Component } from 'react';
import Navbar from '../Navbar';
import CodingCompForm from './CodingCompForm';
import styles from '../../../../CSS/CodingCompForm.module.css';

function CodingComp() {
  return (
    <div>
      <Navbar />
      <div className={styles.CodingCompComponent}>
        <CodingCompForm />
      </div>
    </div>
  );
}

export default CodingComp;
