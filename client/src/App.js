import styles from "./App.module.css";
import React, { useState, useEffect } from "react";
import Navbar from "./pages/navbar/Navbar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
import Footer from "./pages/footer/Footer";
import MainFeeds from "./pages/mainFeeds/MainFeeds";
import Mypage from "./pages/mypage/Mypage";
import Writing from "./pages/writing/Writing";
import Login from "./components/signin/Signin";
import Signup from "./components/signup/Signup";
import Feed from "./pages/feed/Feed";
import Signin from "./components/signin/Signin";
import VoteResult from "./components/voteResult/VoteResult";
import ScrollButton from "./components/scrollButton/ScrollButton";
import axios from "axios";
import Update from "./pages/update/Update";
import MyinfoModify from "./pages/myinfoModify/MyinfoModify";

function App() {
  const dummyData = [
    {
      userName: "구름이",
      title: "회사에 입고 다닐 데일리 니트 색깔 골라주세요🙏",
      option_1: "살구",
      option_2: "네이비",
      image_1:
        "https://image.thehyundai.com/static/4/8/3/37/A1/hnm40A1373847_01_0989040_003_003_1600.jpg",
      image_2:
        "https://image.thehyundai.com/static/4/8/3/37/A1/hnm40A1373849_01_0989040_012_001_1600.jpg",
      content:
        "봄이 다가오고 있어서 화사한 살구색으로 사고 싶은데... 제가 요즘에 급격히 살이 쪄서(ㅠㅠ😭)ㅋㅋㅋㅋ 뚱뚱해 보일까바 선뜻 지르기가 고민되네요... 안전하게 네이비 고를까요??? 참고로 저는 옷이 몇 개 없어용🥲 자주 입을만한 니트로 고르고 있습니다!",
      tags: ["#의류", "#뷰티", "#리빙"],
      votes: "N",
      createdAt: "2021-08-27",
    },
    {
      userName: "구름이",
      title: "춘식이 무드등 어떤 게 더 귀엽나요!?👀",
      option_1: "냥냥펀치",
      option_2: "뚱춘식",
      image_1:
        "https://t1.kakaocdn.net/friends/prod/product/20210818173346267_8809814920335_BW_08.jpg",
      image_2:
        "https://imgc.1300k.com/aaaaaib/goods/215026/27/215026279751.jpg?10",
      content: "발바닥도 귀엽고 뚱춘식도 귀엽다 ㅠㅠ! ❤️",
      tags: ["#잡화", "#리빙"],
      votes: "N",
      createdAt: "2021-08-27",
    },
  ];
  const history = useHistory();
  //로그인상태
  const [isLogin, setIsLogin] = useState(false);
  const [info, setInfo] = useState(null);
  const [accessToken, setAccessToken] = useState(null);

  //로그인인증 & 유저데이터 Get으로 불러오기(mypage)
  const isAuthenticated = () => {
    axios.get(
      "http://ec2-3-34-191-91.ap-northeast-2.compute.amazonaws.com/userdata",
      {
        headers: {
          authorization: `Bearer ${accessToken}`,
        },
        "Content-Type": "application/json",
      }
    );
    //성공할 경우 (토큰은 쿠키에 있음)
    // .then(result => {}
    setIsLogin(true); //로그인상태  => 아마 로그인 창 닫힐듯!
    setInfo({
      //인포상태 변화 //받아온 데이터로 넣어주기
      userid: "abc1234",
      nickname: "춘식",
      mobile: "010-0000-0000",
      password: "",
      password2: "",
    });
    loginHandler();
    // //로그인창 닫기
  };
  //로그인 정상적으로 완료하면 핸들리스폰스 호출 (signin 페이지)
  const handleResponseSuccess = (data) => {
    //result.data.message="ok"!!
    if (data.message === "ok") {
      isAuthenticated();
      setAccessToken(data.accessToken);
    }
  };

  /**********************페이지 컨트롤 부분***************************/

  const [feeds, setFeeds] = useState(dummyData); //전체 피드리스트
  const [selectedFeed, setSelectedFeed] = useState(null); //선택된 피드
  const [revised, setRevised] = useState(null); //writing 할 피드
  const select = (el) => {
    setSelectedFeed(el);
  };
  const listFilter = (tag) => {
    if (tag === "전체") {
      setFeeds(dummyData);
    } else {
      setFeeds(dummyData.filter((el) => el.tags.includes(tag)));
    }
  };

  const revise = (el) => {
    setRevised(el);
  };

  const createFeeds = (el) => {
    setFeeds(feeds.concat(el));
  };

  useEffect(() => {
    //feeds 불러오기 axios GET 요청(지영)
  }, []);

  /**********************sign in 컨트롤 부분***************************/

  //로그인상태 변경 메소드
  const loginHandler = () => {
    setIsLogin(true);
  };
  //사인아웃클릭시
  const onSignout = () => {
    axios
      .post(
        "http://ec2-3-34-191-91.ap-northeast-2.compute.amazonaws.com/sign-out"
      )
      .then((result) => {
        setIsLogin(false);
        setInfo(null);
        // history.push("/");
      });
  };

  return (
    <>
      {/* {
      isLoading ? <LoadingIndicator /> 
      : */}
      <div className={styles.body}>
        <Router>
          <Navbar
            filterHandle={listFilter}
            handleResponseSuccess={handleResponseSuccess}
            onSignout={onSignout}
            isLogin={isLogin}
            info={info}
          />

          <div id="page">
            <Switch>
              <Route exact={true} path="/">
                <MainFeeds
                  feeds={feeds}
                  filterHandle={listFilter}
                  handleClick={select}
                />
              </Route>
              <Route path="/mypage">
                <Mypage handleContent={revise} info={info} setInfo={setInfo} />
              </Route>
              <Route path="/modifyinfo">
                <MyinfoModify info={info} setInfo={setInfo} />
                {/* <Mypage handleContent={revise} info={info} setInfo={setInfo} /> */}
              </Route>
              <Route path="/writing">
                <Writing
                  isLogin={isLogin}
                  feedList={feeds}
                  feedsHandle={createFeeds}
                />
              </Route>
              <Route path="/update">
                <Update feed={revised} />
              </Route>
              {selectedFeed ? (
                <Route path="/feed">
                  <Feed feed={selectedFeed} />
                </Route>
              ) : null}
              {/* 이부분 투표창에서 새로고침시 페이지 사라지는거 막아야함 */}
            </Switch>
          </div>
          <Footer></Footer>
          <ScrollButton />
        </Router>
      </div>
      {/* } */}
    </>
  );
}

export default App;
