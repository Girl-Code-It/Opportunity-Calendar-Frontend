import React from 'react';
import AddDiv from '../AddDiv';
import Navbar from '../Navbar';
import ScholarshipForm from './ScholarshipForm';
import styles from '../../../../CSS/PostForm.module.css';

function Scholarship() {
  return (
    <div>
      <Navbar flink="/viewopportunity/scholarship"/>
      <AddDiv/>
      <div className={styles.FullTimeComponent}
      >
        <ScholarshipForm />
      </div>
    </div>
  );
}

export default Scholarship;
