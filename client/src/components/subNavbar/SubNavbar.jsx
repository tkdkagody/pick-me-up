import React from 'react';
import styles from './SubNavbar.module.css'
import { Link } from 'react-router-dom';

const SubNavbar = ({filterHandle}) => {

  const tags=['전체', '#의류', '#리빙', '#뷰티', '#식품', '#잡화', '#디지털']
  return (
    <>
      <div className={styles.categories}>
        {tags.map(el => <span className={styles.hashtag} onClick={()=>filterHandle(el)}>{el}</span>)}
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