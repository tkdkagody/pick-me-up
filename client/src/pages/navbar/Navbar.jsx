import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';


const Navbar = (props) => {
  //props로 isSignIn받고 true일경우 login/ false일경우 logout버튼
  return (
      <header className={styles.header}>
        <Link to="/">
          <span className={styles.homebtn}>
            <img src="../../../images/home.svg" className={styles.homeimg}></img>
          </span>
        </Link>
        <h1 className={styles.title}>PickMeUp</h1>
        <div className={styles.btns}>
          <button className={styles.signin} >
            Sign in
          </button>
        <Link to="/mypage">
          <button className={styles.mypage} >
            My page
          </button>
        </Link>
        </div>

    </header>
  );
};

export default Navbar;



