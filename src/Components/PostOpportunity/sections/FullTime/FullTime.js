import React, { Component } from 'react';
import Navbar from '../Navbar';
import FullTimeForm from './FullTimeForm';

import styles from '../../../../CSS/FullTimeForm.module.css';
import PostOpportunity from '../../PostOpportunity'
function FullTime() {
  return (
    <div>
      <Navbar />
      <PostOpportunity />
      <div className={styles.FullTimeComponent}>
        <FullTimeForm />
      </div>
    </div>
  );
}

export default FullTime;
