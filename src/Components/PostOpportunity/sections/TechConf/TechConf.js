import React, { Component } from 'react';
import Navbar from '../Navbar';
import TechConfForm from './TechConfForm';
import styles from '../../../../CSS/FullTimeForm.module.css';
import PostOpportunity from '../../PostOpportunity'

function TechConf() {
  return (
    <div>
      <Navbar />
      <PostOpportunity />
      <div className={styles.FullTimeComponent}>
        <TechConfForm />
      </div>
    </div>
  );
}

export default TechConf;
