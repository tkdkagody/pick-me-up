import React from 'react';
import Navbar from '../../pages/navbar/Navbar';
import styles from './Signin.module.css';

const Signin = (props) => {
    return(
 
      <section className={styles.signin}>
        <h1 className={styles.title}>Sign in</h1>

        <ul className={styles.list}>
           <li className={styles.item}>
                <input type="text"  className={styles.text} placeholder="아이디를 입력하세요"/>
          </li>

          <li className={styles.item}>
                <input type="text"  className={styles.text} placeholder="비밀번호를 입력하세요"/>
          </li>

          <li className={styles.item}>
            <button className={styles.button} >
              Sign in 
            </button>
          </li>
          <li className={styles.item}>
            <button className={styles.button} >
                Google
            </button>
          </li>
          <li className={styles.item}>
            <button className={styles.signup} >
                Sign up
            </button>
          </li>
        </ul>
      </section>
  
    );
}

export default Signin;