import React, { Component } from 'react';
import Navbar from '../Navbar';
import CodingCompForm from './CodingCompForm';
import styles from '../../../../CSS/CodingCompForm.module.css';
import PostOpportunity from '../../PostOpportunity';

function CodingComp() {
  return (
    <div>
      <Navbar />
      <PostOpportunity />
      <div className={styles.CodingCompComponent}>
        <CodingCompForm />
      </div>
    </div>
  );
}

export default CodingComp;
