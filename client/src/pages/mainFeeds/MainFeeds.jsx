import React from 'react';
import styles from './MainFeeds.module.css';
import SubNavbar from '../../components/subNavbar/SubNavbar';
import FeedContent from '../../components/feedContent/FeedContent';


const MainFeeds = (props) => {
  return (
  <section className={styles.main}>
    <SubNavbar />
    <ul className={styles.feedList}>
        <FeedContent/>  
        <FeedContent/> 
        <FeedContent/> 
        <FeedContent/>  
        <FeedContent/> 
        <FeedContent/> 
    </ul>
  </section>
  )
};

export default MainFeeds;