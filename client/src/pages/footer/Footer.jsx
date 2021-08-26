import React from 'react';
import styles from './Footer.module.css'

const Footer = (props) => {
  return (
  <footer>
    <div className={styles.container}>
      <div className={styles.contentbox}>
        <ul className={styles.info}>
          <li className={styles.name}>
              <span className={styles.title}>Team Info</span>
              <span>문순려 [back end] -  저는 문순려입니다~~~~</span>
              <span>이동욱 [back end] -  저는 문순려입니다~~~~</span>
              <span>유다희 [frontend]] -  저는 문순려입니다~~~~</span>
              <span>박지영 [frontend]] -  저는 문순려입니다~~~~</span>
          </li>
        </ul>
      </div>
    </div>
    
  </footer>
  )
};

export default Footer;