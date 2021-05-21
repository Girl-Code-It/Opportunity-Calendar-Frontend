import React from 'react';
import Navbar from '../Navbar';
import OpportunityForm from '../OpportunityForm/OpportunityForm';
import styles from '../../../../CSS/CodingCompForm.module.css';

function CodingComp() {
  return (
    <div>
      <Navbar />
      <div className={styles.CodingCompComponent}>
        <OpportunityForm path="codingcomp" />
      </div>
    </div>
  );
}

export default CodingComp;
