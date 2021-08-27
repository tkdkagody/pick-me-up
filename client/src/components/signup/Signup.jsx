import styles from './Signup.module.css';

import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
axios.defaults.withCredentials = true; 
const Signup = ({setIsSignUpClicked, clickCloseSignIn}) => {
      const history = useHistory();

//가입정보 상태 
  const [userinfo, setUserinfo] = useState({
      userId: '',
      nickName: '',
      mobile :'',
      password:'',
      password2 : '',
  })
//에러메세지 상태 
const [errorMessage, setErrorMessage] = useState('');

const { userId,nickName,mobile,password,password2} = userinfo;
const handleSignup = ()=> {
      if(!userId || !nickName || !mobile || !password || !password2){
            setErrorMessage('모든 항목을 입력해주세요')
      }else{
            setErrorMessage('')
            //여기서 axios요청하기 
            clickCloseAll();
      }
}

//인풋창 연결 메소드 
  const handleInputValue = (key) => (e) => {
        setUserinfo({
              ...userinfo, [key]: e.target.value
        });
  }
// 가입하기에서 x눌렀을때 전체다는 버튼
  const clickCloseAll = () => {
      setIsSignUpClicked(false);
      clickCloseSignIn();
}

  return(
      <section className={styles.backdrop}>
            <div className={styles.signup}>
            <div className={styles.titlebox}>
            <span className={styles.title}>sign up</span>
            <span className={styles.close} onClick={clickCloseAll}>
                  <img src="../../../images/close.svg" className={styles.img}></img>
            </span>
            </div>
            <form onSubmit={(e) => e.preventDefault()}>
            <ul className={styles.list}>
                  <li className={styles.item}>
                        <input type="text"  onChange={handleInputValue('userId')} className={styles.text} placeholder="아이디를 입력하세요"/>
                        
                  </li>
                  <li className={styles.item}>
                        <input type="text" onChange={handleInputValue('nickName')} className={styles.text} placeholder="닉네임을 입력하세요"/>
                  </li>
                  <li className={styles.item}>
                        <input type="text" onChange={handleInputValue('mobile')} className={styles.text} placeholder="휴대폰번호를 입력하세요"/>
                  </li>
                  <li className={styles.item}>
                        <input type="text" onChange={handleInputValue('password')}  className={styles.text} placeholder="비밀번호를 입력하세요"/>
                  </li>
                  <li className={styles.item}>
                        <input type="text" onChange={handleInputValue('password2')} className={styles.text} placeholder="비밀번호를 확인해주세요"/>
                  </li>
                  {
                              errorMessage ? 
                              (<li className={styles.alert}>{errorMessage}</li>) 
                              : null
                        }
                  <li className={styles.item}>
                        <button type="submit" className={styles.signupBtn} onClick={handleSignup}>
                        Sign up
                        </button>
                  </li>
            </ul>
            </form>
            </div>
      </section>
  );
}

export default Signup;