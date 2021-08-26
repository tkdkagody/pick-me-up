import styles from './Mycontent.module.css'
import React from 'react';
import FeedContent from '../feedContent/FeedContent';



const Mycontent = (props) => {
    return(
    <>
        <ul className={styles.feedList}>
            <FeedContent/>  
            <FeedContent/> 
        </ul>
    </>
    );
}

export default Mycontent;


//새로고침 했을때 myinfo로 자동이동하는부분 막기 