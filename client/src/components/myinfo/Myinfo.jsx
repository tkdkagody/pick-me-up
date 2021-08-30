import styles from "./Myinfo.module.css";
import React, { useState } from "react";
import MyinfoModify from "../../pages/myinfoModify/MyinfoModify";
import NullPage from "../NullPage/Nullpage";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

const Myinfo = ({ info, setInfo }) => {
  const history = useHistory();
  if (info) {
    const { userid, nickname, mobile } = info;
  }

  //   /* 내정보수정이동*/
  //   const [isModifyClicked, setIsModifyClicked] = useState(false);
  //   //수정하기 버튼 클릭시 이동

  const handleClickModify = () => {
    //setIsModifyClicked(true);
    history.push("/modifyinfo");
  };

  return (
    <>
      {info.userid ? (
        <>
          <div className={styles.infobox}>
            <div className={styles.imgbox}>
              <span className={styles.imgborder}>
                <img
                  src="../../../images/face.svg"
                  className={styles.faceimg}
                ></img>
              </span>
            </div>
            <div className={styles.textbox}>
              <div className={styles.ulbox}>
                <span className={styles.list}>
                  아이디:
                  <input
                    className={styles.input}
                    value={info.userid}
                    readOnly
                  ></input>
                </span>
                <span className={styles.list}>
                  닉네임:
                  <input
                    className={styles.input}
                    value={info.nickname}
                    readOnly
                  ></input>
                </span>
                <span className={styles.list}>
                  모바일:
                  <input
                    className={styles.input}
                    value={info.mobile}
                    readOnly
                  ></input>
                </span>
              </div>
            </div>
          </div>

          <div className={styles.btns}>
            <button className={styles.btn}>회원탈퇴(optional)</button>
            {/* <Link to="/myinfoModify" info={info} setInfo={setInfo}> */}
            <button
              className={styles.btn}
              onClick={handleClickModify}
              //   isModifyClicked={isModifyClicked}
              //   setIsModifyClicked={setIsModifyClicked}
            >
              수정하기
            </button>
            {/* </Link> */}
          </div>
        </>
      ) : (
        <NullPage />
      )}
    </>
  );
};

export default Myinfo;
