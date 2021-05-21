import React from 'react';
import Navbar from '../Navbar';
import OpportunityForm from '../OpportunityForm/OpportunityForm';
import styles from '../../../../CSS/CodingCompForm.module.css';

function TechConf() {
  return (
    <div>
      <Navbar />
      <div className={styles.CodingCompComponent}>
        <OpportunityForm path="techconf" />
      </div>
    </div>
  );
}

export default TechConf;
