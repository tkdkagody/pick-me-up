import React from 'react';
import RealVote from '../realVote/RealVote';
import Vote from '../vote/Vote';
import styles from './VoteResult.module.css';

const VoteResult = (props) => {
  return  (

    // 이미지만 가진 작은 컴포넌트를 만드는거 고려
    <section className={styles.container}>
      <div className={styles.images}>
        <img className={styles.image} src="../../../images/face.svg" alt="option1" />
      
        <img className={styles.image} src="../../../images/face.svg" alt="option1" />
      </div>


      <div className={styles.graph}>
        <span className={styles.imgbox}>
          <label className={styles.percent}>30%</label>
          <label className={styles.img1}></label>
        </span>
        <span className={styles.title}>살구</span>
        <span className={styles.imgbox}>
          <label className={styles.percent}>70%</label>
          <label className={styles.img2}></label>
        </span>
        <span className={styles.title}>네이비</span>
      </div>
     
      {/* <RealVote /> */}
    </section>
  );
}
export default VoteResult;