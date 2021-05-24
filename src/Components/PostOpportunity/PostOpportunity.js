import React from 'react';
import PostOpportunityForm from './PostOpportunityForm';
import styles from '../../CSS/PostForm.module.css';
import AddDiv from './AddDiv';
import Navbar from './Navbar';

function PostOpportunity(props) {
  let path = props.path;
  return (
    <div>
      <Navbar flink={`/viewopportunity/${path}`}/>
      <AddDiv/>
      <div className={styles.FullTimeComponent}>
        <PostOpportunityForm path={path} />
      </div>
    </div>
  );
}

export default PostOpportunity;
