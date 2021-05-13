import React from "react";
import styles from '../../CSS/SocialIcons.module.css';
import {
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
  FaPhoneAlt,
  FaGithub,
} from 'react-icons/fa';

export default function SocialIcons() {
  return (
    <div className={styles.socialIcons}>
      <a data-testid="linkedin" href='https://www.linkedin.com/company/14568052/admin/'><FaLinkedinIn className={styles.icons} /></a>
      <a data-testid="instagram" href="https://www.instagram.com/girlcodeit/"><FaInstagram className={styles.icons} /></a>
      <a data-testid="twitter" href="https://twitter.com/GirlCodeIt1"><FaTwitter className={styles.icons}/></a>
      <a  data-testid="github" href="https://github.com/Girl-Code-It" ><FaGithub className={styles.icons} /></a>
    </div>
  );
}