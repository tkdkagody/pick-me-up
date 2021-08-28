import styles from './App.module.css';
import React, { useState, useEffect } from 'react';
import Navbar from './pages/navbar/Navbar';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Footer from './pages/footer/Footer';
import MainFeeds from './pages/mainFeeds/MainFeeds';
import Mypage from './pages/mypage/Mypage';
import Writing from './pages/writing/Writing';
import Login from './components/signin/Signin';
import Signup from './components/signup/Signup';
import Feed from './pages/feed/Feed';
import Signin from './components/signin/Signin';
import VoteResult from './components/voteResult/VoteResult';
import ScrollButton from './components/scrollButton/ScrollButton';




function App() {

  const dummyData = [
    {userName: "구름이",
    title: "회사에 입고 다닐 데일리 니트 색깔 골라주세요🙏",
    option_1: "살구",
    option_2: "네이비",
    image_1: "https://image.thehyundai.com/static/4/8/3/37/A1/hnm40A1373847_01_0989040_003_003_1600.jpg",
    image_2: "https://image.thehyundai.com/static/4/8/3/37/A1/hnm40A1373849_01_0989040_012_001_1600.jpg",
    content: "봄이 다가오고 있어서 화사한 살구색으로 사고 싶은데... 제가 요즘에 급격히 살이 쪄서(ㅠㅠ😭)ㅋㅋㅋㅋ 뚱뚱해 보일까바 선뜻 지르기가 고민되네요... 안전하게 네이비 고를까요??? 참고로 저는 옷이 몇 개 없어용🥲 자주 입을만한 니트로 고르고 있습니다!",
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
  ]

  const [feeds, setFeeds] = useState(dummyData); //전체 피드리스트
  const [selectedFeed, setSelectedFeed] = useState(null); //선택된 피드
  const [revised, setRevised] = useState(null); //writing 할 피드

  const select = (el) => {
    setSelectedFeed(el);
  }

  const listFilter =(tag) =>{
    if(tag === '전체'){
      setFeeds(dummyData);
    }else{
      setFeeds(dummyData.filter(el => el.tags.includes(tag)));
    }
  } 

  const revise = (el) => {
    setRevised(el);
  }

  const resetWriting = () => {
    setRevised(null);
  }

  useEffect(() => {
    //feeds 불러오기 axios GET 요청(지영)
  }, [])

  return (
    
    <div className={styles.body}>
      <Router>
         <Navbar resetRevised={resetWriting} filterHandle={listFilter}/>
        <div id="page">
          <Switch>
            <Route exact={true} path="/">
              <MainFeeds feeds={feeds} filterHandle={listFilter} handleClick={select}/>
            </Route>
            <Route path="/mypage">
              <Mypage handleContent={revise}/>
            </Route>
            <Route path="/writing">
              <Writing feed={revised} resetRevised={resetWriting}/>
            </Route>
            {selectedFeed ? 
            <Route path="/feed">
              <Feed feed={selectedFeed}/>
            </Route>
            : null}

          </Switch>
        </div>
        <Footer></Footer>
        <ScrollButton/>
      </Router> 

    </div>
  );
}

export default App;

