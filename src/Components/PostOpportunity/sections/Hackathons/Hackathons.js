import Navbar from '../Navbar';
import React from 'react';
import OpportunityForm from '../OpportunityForm/OpportunityForm';
import styles from '../../../../CSS/CodingCompForm.module.css';
function FullTime() {
  return (
    <div>
      <Navbar />
      <div className={styles.CodingCompComponent}>
        <OpportunityForm path="hackathon" />
      </div>
    </div>
  );
}

export default FullTime;
