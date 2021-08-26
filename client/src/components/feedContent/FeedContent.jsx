import React from 'react';
import styles from './FeedContent.module.css'

const FeedContent = (props) => {
  return (  
    <>
  <li className={styles.container}>
    <div className={styles.feed}>
      <div className={styles.img}>
        <img className={styles.image} src="https://image.thehyundai.com/static/4/8/3/37/A1/hnm40A1373847_01_0989040_003_003_1600.jpg" alt="option1"/>
        <img className={styles.image} src="https://image.thehyundai.com/static/4/8/3/37/A1/hnm40A1373849_01_0989040_012_001_1600.jpg" alt="option2"/>
      </div>
      <div className={styles.title}>회사에 입고 다닐 데일리 니트 색깔 골라주세요🙏</div>

      <div className={styles.categories}>
        <span className={styles.hashtag}>#의류</span>
        <span className={styles.hashtag}>#뷰티</span>
        <span className={styles.hashtag}>#리빙</span>
      </div>
      <span className={styles.voteText}>N명이 투표했어요</span>
    </div> 
  </li>
  <li className={styles.container}>
  <div className={styles.feed}>
    <div className={styles.img}>
      <img className={styles.image} src="https://t1.kakaocdn.net/friends/prod/product/20210818173346267_8809814920335_BW_08.jpg" alt="option1"/>
      <img className={styles.image} src="https://imgc.1300k.com/aaaaaib/goods/215026/27/215026279751.jpg?10" alt="option2"/>
    </div>
    <div className={styles.title}>춘식이 무드등 어떤 게 더 귀엽나요!?👀</div>

    <div className={styles.categories}>
      <span className={styles.hashtag}>#잡화</span>
      <span className={styles.hashtag}>#리빙</span>
    </div>
    <span className={styles.voteText}>N명이 투표했어요</span>
  </div> 
</li>
</>
  )
}

export default FeedContent;