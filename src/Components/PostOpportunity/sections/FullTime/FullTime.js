import React, { Component } from 'react';
import Navbar from '../Navbar';
import FullTimeForm from './FullTimeForm';

import styles from '../../../../CSS/FullTimeForm.module.css';

function FullTime() {
  return (
    <div>
      <Navbar />
      <div className={styles.FullTimeComponent}>
        <FullTimeForm />
      </div>
    </div>
  );
}

export default FullTime;
