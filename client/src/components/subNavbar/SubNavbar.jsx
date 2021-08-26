import React from 'react';
import styles from './SubNavbar.module.css'
import { Link } from 'react-router-dom';

const SubNavbar = (props) => {
  return (
    <>
      <div className={styles.categories}>
        <span className={styles.hashtag}>전체</span>
        <span className={styles.hashtag}>#의류</span>
        <span className={styles.hashtag}>#리빙</span>
        <span className={styles.hashtag}>#디지털</span>
        <span className={styles.hashtag}>#식품</span>
        <span className={styles.hashtag}>#잡화</span>
      </div>
      <Link to="/writing">
        <div className={styles.writingBtn}>
          <button className={styles.button}>글쓰기</button>
        </div>
      </Link>
    
    </>
  )
}
export default SubNavbar;