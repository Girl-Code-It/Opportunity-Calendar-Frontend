import React from 'react';
import styles from '../../CSS/Newsletter.module.css';
import SubImg from './../../Assets/subscribe.svg';
import Navbar from './../HomePage/Sections/Navbar';
import { FaUserAlt, FaEnvelope } from 'react-icons/fa';

const newsletter = () => {
    return(
        
        <div className={styles.newsletter}>
            <Navbar />
            
            <div className={styles.subscribe}>
            
                <img src={SubImg} alt="Subscribe"></img>
            
                <div className={styles.sub_text}>
                    <h2>
                        Get weekly updates in your inbox! 
                    </h2>
                    <h6>
                        Yeah, we all have that lame story of losing much wanted 
                        opportunities just because we didn't know about them earlier. 
                        Well,  here is what you need. <br/>
                        An "opportunity" to be aware of all those opportunities out there.
                    </h6>
                    <fieldset>
                        <div className={styles.name}>
                            <p><FaUserAlt className={styles.span_name} /></p><input type="text" name="name" placeholder="Name"></input>
                        </div>
                        <div className={styles.email}>
                            <p><FaEnvelope className={styles.span_email}/></p><input type="email" name="email" placeholder="Email"></input>
                        </div>
                        <br/>
                        <button type="submit">Subscribe</button>
                    </fieldset>
                </div>
            </div>
        </div>
    );
};

export default newsletter;