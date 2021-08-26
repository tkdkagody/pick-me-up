import styles from './Mycontent.module.css';


import React from 'react';

const Mycontent = (props) => {
    return(
        <div className={styles.container}>
            mycontent
        </div>
    );
}

export default Mycontent;


//새로고침 했을때 myinfo로 자동이동하는부분 막기 