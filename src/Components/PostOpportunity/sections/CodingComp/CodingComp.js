import React from 'react';
import Navbar from '../Navbar';
import CodingCompForm from './CodingCompForm';
import styles from '../../../../CSS/PostForm.module.css';
import AddDiv from '../AddDiv';

function CodingComp() {
  return (
    <div>
      <Navbar flink="/viewopportunity/codingcomp"/>
      <AddDiv/>
      <div className={styles.FullTimeComponent}>
        <CodingCompForm />
      </div>
    </div>
  );
}

export default CodingComp;
