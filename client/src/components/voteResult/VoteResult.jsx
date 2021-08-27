import React from 'react';
import RealVote from '../realVote/RealVote';
import Vote from '../vote/Vote';
import styles from './VoteResult.module.css';

const VoteResult = (props) => {

  const per1 = 30;
  const per2 = 70; 

  return  (
    <>
    
    {/* 이미지만 가진 작은 컴포넌트를 만드는거 고려 */}
    <section className={styles.container}>

      <div className={styles.goback}>
        <img src="../../../images/back.svg" className={styles.home}></img>
      </div>


      <div className={styles.images}>
        <img className={styles.image} src="../../../images/face.svg" alt="option1" />
      
        <img className={styles.image} src="../../../images/face.svg" alt="option1" />
      </div>

{/* 그래프 */}
      <div className={styles.graph}>
        <span className={styles.imgbox}>
          <label className={styles.percent} >{per1}%</label>
          <label className={styles.img1} style={{width: `${per1}%`}}></label>
        </span>
        <span className={styles.title}>살구</span>
        <span className={styles.imgbox}>
          <label className={styles.percent}>{per2}%</label>
          <label className={styles.img2}   style={{width: `${per2}%`}}></label>
        </span>
        <span className={styles.title}>네이비</span>
      </div>
     
     
    </section>
    </>
  );
}
export default VoteResult;