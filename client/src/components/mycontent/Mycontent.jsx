import styles from './Mycontent.module.css'
import React, { useState } from 'react';
import FeedContent from '../feedContent/FeedContent';




const Mycontent = (props) => {
    const dummyData = [
        {userName: "구름이",
        title: "회사에 입고 다닐 데일리 니트 색깔 골라주세요🙏",
        option_1: "살구",
        option_2: "네이비",
        image_1: "https://image.thehyundai.com/static/4/8/3/37/A1/hnm40A1373847_01_0989040_003_003_1600.jpg",
        image_2: "https://image.thehyundai.com/static/4/8/3/37/A1/hnm40A1373849_01_0989040_012_001_1600.jpg",
        content: "봄이 다가오고 있어서 화사한 살구색으로 사고 싶은데... 제가 요즘에 급격히 살이 쩌서(ㅠㅠ😭)ㅋㅋㅋㅋ 뚱뚱해 보일까바 선뜻 지르기가 고민되네요... 안전하게 네이비 고를까요??? 참고로 저는 옷이 몇 개 없어서🥲 자주 입을만한 니트로 고르고 있습니다!",
        tags: [ "#의류", "#뷰티", "#리빙"],
        votes: "N",
        createdAt: "2021-08-27"},
        {userName: "구름이",
        title: "춘식이 무드등 어떤 게 더 귀엽나요!?👀",
        option_1: "냥냥펀치",
        option_2: "뚱춘식",
        image_1: "https://t1.kakaocdn.net/friends/prod/product/20210818173346267_8809814920335_BW_08.jpg",
        image_2: "https://imgc.1300k.com/aaaaaib/goods/215026/27/215026279751.jpg?10",
        content: "발바닥도 귀엽고 뚱춘식도 귀엽다 ㅠㅠ! ❤️",
        tags: [ "#잡화", "#리빙"],
        votes: "N",
        createdAt: "2021-08-27"}
      ];

    const [moreOptions, setMoreOptions] = useState(false);

    const handleOptions = () =>{  
        setMoreOptions(!moreOptions);
    }


    return(
    <ul className={styles.feedList}>
      <li className={styles.container}>
        <div className={styles.feed}>
          <div className={styles.img}>
            <img className={styles.image} src={dummyData[1].image_1} alt="option1"/>
            <img className={styles.image} src={dummyData[1].image_2} alt="option2"/>
          </div>
          <div className={styles.titleAndBtn}>
            <span className={styles.title}>{dummyData[1].title}</span>
            <i className="fas fa-ellipsis-h" onClick={handleOptions}></i>
          </div>
          
          {moreOptions? 
          <ul className={styles.more}>
              <li className={styles.moreOpt}>수정</li>
              <li className={styles.moreOpt}>삭제</li>
          </ul>
          : null}

          <div className={styles.categories}>
            {dummyData[1].tags.map(el => <span className={styles.hashtag}>{el}</span>)}
          </div>
          <span className={styles.voteText}>{dummyData[1].votes}명이 투표했어요</span>
        </div> 
      </li>
    </ul>
    );
}

export default Mycontent;


//새로고침 했을때 myinfo로 자동이동하는부분 막기 