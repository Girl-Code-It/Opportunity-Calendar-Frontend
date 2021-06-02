import React from 'react';
import styles from '../../../CSS/Newsletter.module.css';


const newsletter = () => {
    return(

            <div className={styles.subscribe}>
                <h1>
                        Newsletter
                </h1>
                <div className={styles.sub_text}>
                    
                    <h4>Get weekly updates in your inbox! </h4>
                    <fieldset className={styles.field}>
                        <div className={styles.email}><input type="email" name="email" placeholder="Enter your email id"></input>
                        </div>
                        
                        <button type="submit">Subscribe</button>
                    </fieldset>
                </div>
            </div>
        
    );
};

export default newsletter;