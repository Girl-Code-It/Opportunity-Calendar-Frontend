import React from 'react';
import Navbar from '../Navbar';
import styles from '../../../../CSS/FullTimeForm.module.css';
import OpportunityForm from '../OpportunityForm/OpportunityForm';

function FullTime() {
  return (
    <div>
      <Navbar />
      <div className={styles.FullTimeComponent}>
        <OpportunityForm path="scholarship" />
      </div>
    </div>
  );
}

export default FullTime;
