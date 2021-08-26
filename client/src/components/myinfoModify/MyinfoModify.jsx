import styles from './MyinfoModify.module.css';
import {  useHistory } from 'react-router-dom';

import React from 'react';

const MyinfoModify = ({isModifyClicked,setIsModifyClicked}) => {


    //1.수정완료 또는 취소 클릭시 myinfo로 이동하기 : 수정해야함 

    console.log(isModifyClicked);
    const handleClickModify = ()=> {
        if(isModifyClicked){
            setIsModifyClicked(true);
        }
    }

    //2.input사용가능하도록 바꾸기 

    return(
        <>
        <div className={styles.infobox}>
            <div className={styles.imgbox}>
                <span className={styles.imgborder}>
                    <img src="../../../images/face.svg" className={styles.faceimg}></img>
                </span>
            </div>
            <div className={styles.textbox}>
                <div className={styles.ulbox}>
                    <span className={styles.list}>
                        아이디:
                        <input className={styles.input} value="tkdkagody" ></input>
                    </span>
                    <span className={styles.list}>
                        닉네임:
                        <input className={styles.input} value="pickme" ></input>
                    </span>
                    <span className={styles.list}>
                        모바일:
                        <input className={styles.input} value="010-0000-0000" ></input>
                    </span>
                    <span className={styles.list}>
                        비밀번호:
                        <input className={styles.input} value="" ></input>
                    </span>
                    <span className={styles.passconfirm}>
                        비밀번호확인:
                        <input className={styles.input} value="" ></input>
                    </span>
                </div>
            </div>
        </div>

        <div className={styles.btns}>
        <button className={styles.btn}>취소(없어도될거같음)</button>
        <button className={styles.btn} onClick={handleClickModify} 
            isModifyClicked={isModifyClicked}
            setIsModifyClicked={setIsModifyClicked}
        >수정완료</button>
        </div>

        </>
    );
}

export default MyinfoModify;