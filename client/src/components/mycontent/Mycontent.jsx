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