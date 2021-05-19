import React from 'react';
import Navbar from '../Navbar';
import InternshipForm from './InternshipForm';
import styles from '../../../../CSS/PostForm.module.css';
import AddDiv from '../AddDiv';

function Internship() {
  return (
    <div>
      <Navbar flink="/viewopportunity/internships"/>
      <AddDiv/>
      <div className={styles.FullTimeComponent}>
        <InternshipForm />
      </div>
    </div>
  );
}

export default Internship;
