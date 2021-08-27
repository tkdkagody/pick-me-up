import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Signin from '../../components/signin/Signin';
import Signup from '../../components/signup/Signup';
import styles from './Navbar.module.css';


const Navbar = (props) => {
  //props로 isSignIn받고 true일경우 login/ false일경우 logout버튼


  const [isSigninClicked, setIsSigninClicked] = useState(false); 

  const clickSigninBtn = () => {
    setIsSigninClicked(!isSigninClicked); 
  };


  const clickCloseSignIn = () => {
    setIsSigninClicked(!isSigninClicked); 
  }

  return (
      <header className={styles.header}>
        {/* 가입하기 모달창 */}
        {isSigninClicked  ?<Signin clickCloseSignIn={clickCloseSignIn} /> : null}

        <div className={styles.contentbox}>
        <Link to="/" className={styles.underline} >
          <div className={styles.title} >Pick me up</div>
        </Link>
        <div className={styles.btns}>
        <button className={styles.signbtn} onClick={clickSigninBtn}>
            Sign in
          </button>
        <Link to="/mypage">
        <button className={styles.mypagebtn} >
            My page
          </button>
        </Link>
        </div>
      </div>



    </header>
  );
};

export default Navbar;
