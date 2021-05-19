import React from 'react';
import Navbar from '../Navbar';
import FullTimeForm from './FullTimeForm';

import styles from '../../../../CSS/PostForm.module.css';
import AddDiv from '../AddDiv';

function FullTime() {
  return (
    <div>
      <Navbar flink="/viewopportunity/fulltime"/>
      <AddDiv/>
      <div className={styles.FullTimeComponent}>
        <FullTimeForm />
      </div>
    </div>
  );
}

export default FullTime;
