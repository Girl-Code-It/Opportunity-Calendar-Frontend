import React from 'react';
<<<<<<< HEAD
import Navbar from './Navbar';
import PostOpportunityForm from './PostOpportunityForm';
import styles from '../../CSS/CodingCompForm.module.css';
=======
import AddDiv from './sections/AddDiv';
import Navbar from './sections/Navbar';
>>>>>>> feat_post_opp

function PostOpportunity(props) {
  let path = props.path;
  return (
    <div>
      <Navbar />
<<<<<<< HEAD
      <div className={styles.CodingCompComponent}>
        <PostOpportunityForm path={path} />
      </div>
=======
      <AddDiv/>
>>>>>>> feat_post_opp
    </div>
  );
}

export default PostOpportunity;
