import React from 'react';
import Navbar from '../Navbar';
import OpportunityForm from '../OpportunityForm/OpportunityForm';
import styles from '../../../../CSS/FullTimeForm.module.css';

function FullTime() {
  return (
    <div>
      <Navbar />
      <div className={styles.FullTimeComponent}>
        <OpportunityForm path="fulltime" />
      </div>
    </div>
  );
}

export default FullTime;
