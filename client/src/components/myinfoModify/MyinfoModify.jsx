import styles from './MyinfoModify.module.css';
import {  useHistory } from 'react-router-dom';

import React from 'react';

const MyinfoModify = ({isModifyClicked,setIsModifyClicked}) => {

    const history = useHistory();

    const handleClickModify = ()=> {
        if(isModifyClicked){
            setIsModifyClicked(true);
        }
    }

    return(
        <>
        <h1>내정보 수정하기 페이지입니다.</h1>
        <button onClick={handleClickModify}>취소</button>
        <button onClick={handleClickModify}>수정완료</button>
        </>
    );
}

export default MyinfoModify;