import React from 'react';
import Navbar from './Navbar';
import PostOpportunityForm from './PostOpportunityForm';
import styles from '../../CSS/CodingCompForm.module.css';

function PostOpportunity(props) {
  let path = props.path;
  return (
    <div>
      <Navbar />
      <div className={styles.CodingCompComponent}>
        <PostOpportunityForm path={path} />
      </div>
    </div>
  );
}

export default PostOpportunity;
