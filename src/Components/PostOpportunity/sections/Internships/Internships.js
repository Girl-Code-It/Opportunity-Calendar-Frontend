import React, { Component } from 'react';
import Navbar from '../Navbar';
import InternshipForm from './InternshipForm';
import styles from '../../../../CSS/FullTimeForm.module.css';
import PostOpportunity from '../../PostOpportunity'

function FullTime() {
  return (
    <div>
      <Navbar />
      <PostOpportunity />
      <div className={styles.FullTimeComponent}>
        <InternshipForm />
      </div>
    </div>
  );
}

export default FullTime;
