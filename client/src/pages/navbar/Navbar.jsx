import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';


const Navbar = ({feed, handleClick}) => {
  //props로 isSignIn받고 true일경우 login/ false일경우 logout버튼

  

  return (
    <header className={styles.header}>
      <div className={styles.contentbox}>
        {/* <Link to="/">
          <span className={styles.homebtn}>
            <img src="../../../images/home.svg" className={styles.homeimg}></img>
          </span>
        </Link> */}
        <Link to="/">
          <div className={styles.title} onClick={handleClick}>
            Pick me Up
          </div>
        </Link>
        <div className={styles.btns}>
          <button className={styles.signin}>
            로그인
          </button>
        <Link to="/mypage">
          <button className={styles.mypage} onClick={handleClick}>
            마이페이지
          </button>
        </Link>
        </div>
      </div>



    </header>
  );
};

export default Navbar;



