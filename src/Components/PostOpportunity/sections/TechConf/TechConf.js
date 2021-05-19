import React from 'react';
import Navbar from '../Navbar';
import TechConfForm from './TechConfForm';
import styles from '../../../../CSS/PostForm.module.css';
import AddDiv from '../AddDiv';

function TechConf() {
  return (
    <div>
      <Navbar flink="/viewopportunity/techconf"/>
      <AddDiv/>
      <div className={styles.FullTimeComponent}>
        <TechConfForm />
      </div>
    </div>
  );
}

export default TechConf;
