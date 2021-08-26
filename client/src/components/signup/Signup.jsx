import styles from './Signup.module.css';

import React from 'react';

const Signup = (props) => {
    return(
        <section className={styles.signin}>
        <h1 className={styles.title}>Sign up</h1>

        <ul className={styles.list}>
           <li className={styles.item}>
                <input type="text"  className={styles.text} placeholder="아이디를 입력하세요"/>
                <label className={styles.label}>이미 존재하는 아이디입니다.</label>
          </li>

          <li className={styles.item}>
                <input type="text"  className={styles.text} placeholder="닉네임을 입력하세요"/>
          </li>

          <li className={styles.item}>
                <input type="text"  className={styles.text} placeholder="휴대폰번호를 입력하세요"/>
          </li>

          <li className={styles.item}>
                <input type="text"  className={styles.text} placeholder="비밀번호를 입력하세요"/>
          </li>
          <li className={styles.item}>
                <input type="text"  className={styles.text} placeholder="비밀번호를 확인해주세요"/>
                <label className={styles.label}>비밀번호가 틀렸습니다. </label>
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

export default Signup;