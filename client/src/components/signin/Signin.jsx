import React, { useState } from "react";
import Signup from "../signup/Signup";
import styles from "./Signin.module.css";
import axios from "axios";
import { useHistory } from "react-router";

const Signin = ({
  clickCloseBtn,
  handleResponseSuccess,
  setInfo,
  handleGoogleResponse,
}) => {
  const history = useHistory();
  const [loginInfo, setLoginInfo] = useState({
    userId: "",
    password: "",
  });
  const { userId, password } = loginInfo;

  const [errorMessage, setErrorMessage] = useState("");

  const [isSignUpClicked, setIsSignUpClicked] = useState(false);
  const clickSignUpBtn = () => {
    setIsSignUpClicked(!isSignUpClicked);
  };

  const handleInputValue = (key) => (e) => {
    setLoginInfo({ ...loginInfo, [key]: e.target.value });
  };

  //로그인버튼 클릭시 호출 메소드
  const handleLogin = () => {
    if (!userId || !password) {
      setErrorMessage("아이디와 비밀번호를 모두 입력해주세요");
    } else {
      setErrorMessage("");
      axios
        .post(
          "http://ec2-3-34-191-91.ap-northeast-2.compute.amazonaws.com/sign-in",
          loginInfo
        )
        .then((result) => {
          if (result.data.message === "ok") {
            window.localStorage.setItem(
              "accessToken",
              JSON.stringify(result.data.accessToken)
            );
            handleResponseSuccess(result.data);
            clickCloseBtn();
            history.push("/");
          }
        })
        .catch((err) => {
          setErrorMessage("가입하지 않은 사용자입니다");
        });
    }
  };

  return (
    <section className={styles.backdrop}>
      {isSignUpClicked ? (
        <Signup
          setInfo={setInfo}
          isSignUpClicked={isSignUpClicked}
          setIsSignUpClicked={setIsSignUpClicked}
          clickCloseBtn={clickCloseBtn}
        />
      ) : null}

      <div className={styles.signin}>
        <div className={styles.titlebox}>
          <span className={styles.title}>sign in</span>
          <span className={styles.close} onClick={clickCloseBtn}>
            <img src="../../../images/close.svg" className={styles.img}></img>
          </span>
        </div>

        <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
          <ul className={styles.list}>
            <li className={styles.item}>
              <input
                type="text"
                className={styles.text}
                onChange={handleInputValue("userId")}
                placeholder="아이디를 입력하세요"
              />
            </li>
            <li className={styles.item}>
              <input
                type="password"
                className={styles.text}
                onChange={handleInputValue("password")}
                placeholder="비밀번호를 입력하세요"
              />
            </li>

            {errorMessage ? (
              <li className={styles.alert}>{errorMessage}</li>
            ) : null}

            <li className={styles.item}>
              <button className={styles.button} onClick={handleLogin}>
                Sign in
              </button>
            </li>

            <li className={styles.item}>
              <button className={styles.button}>Google</button>
            </li>
            <li className={styles.item}>
              <button className={styles.signup} onClick={clickSignUpBtn}>
                Sign up
              </button>
            </li>
          </ul>
        </form>
      </div>
    </section>
  );
};

export default Signin;
