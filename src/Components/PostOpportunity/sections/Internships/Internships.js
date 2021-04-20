import React from 'react';
import Navbar from '../Navbar';
import InternshipForm from './InternshipForm';
import styles from '../../../../CSS/FullTimeForm.module.css';

function FullTime() {
  return (
    <div>
      <Navbar />
      <div className={styles.FullTimeComponent}>
        <InternshipForm />
      </div>
    </div>
  );
}

export default FullTime;
