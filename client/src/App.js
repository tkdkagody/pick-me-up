import styles from "./App.module.css";
import React, { useState, useEffect } from "react";
import Navbar from "./pages/navbar/Navbar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
import { createBrowserHistory } from "history";
import Footer from "./pages/footer/Footer";
import MainFeeds from "./pages/mainFeeds/MainFeeds";
import Mypage from "./pages/mypage/Mypage";
import Writing from "./pages/writing/Writing";
import Feed from "./pages/feed/Feed";
import ScrollButton from "./components/scrollButton/ScrollButton";
import axios from "axios";
import Update from "./pages/update/Update";
import MyinfoModify from "./pages/myinfoModify/MyinfoModify";
import NullPage from "./components/NullPage/Nullpage";
import ScrollTop from "./components/scrollTop/ScrollTop";


function App() {
  const history = useHistory();
  const [isLogin, setIsLogin] = useState(false);
  const [info, setInfo] = useState(null);
  const [accessToken, setAccessToken] = useState(null);

  const [isGoogle, setIsGoogle] = useState(false);

  const isAuthenticated = (accessToken) => {
    setAccessToken(accessToken);
    axios
      .get(
        "http://ec2-3-34-191-91.ap-northeast-2.compute.amazonaws.com/user/auth",
        {
          headers: {
            authorization: accessToken,
          },
          "Content-Type": "application/json",
        }
      )
      .then((result) => {
        const { id, user_id, nickname, password, phone_number } =
          result.data.data.userInfo;
        setInfo({
          id: id,
          userid: user_id,
          nickname: nickname,
          mobile: phone_number,
          password: password,
          password2: "",
        });
      });
  };
  const storageToken = localStorage.getItem("accessToken");
  useEffect(() => {
    if (storageToken) {
      loginHandler();
      isAuthenticated(JSON.parse(storageToken));
    }
  }, [accessToken]);

  const handleResponseSuccess = (data) => {
    const { accessToken, message } = data;
    setAccessToken(accessToken);
    loginHandler();
    isAuthenticated(accessToken);
  };

  useEffect(() => {
    console.log("useEffect...");
    const url = new URL(window.location.href);
    const authorizationCode = url.searchParams.get("code");

    if (authorizationCode) {
      getAccessToken(authorizationCode);
    }

    return () => {};
  }, []);

  /*********************?????? ????????? ????????? ??????***************************/
  const [feeds, setFeeds] = useState([]); //?????? ???????????????
  const [selectedFeed, setSelectedFeed] = useState(null); //????????? ???????????????(??????)??? ????????? ???
  const [revised, setRevised] = useState(null); //writing ??? ?????? ????????? ???.
  const [listRender, setListRender] = useState(true);
  const [sortValue, setSortValue] = useState('?????????');

  useEffect(() => {
    setTimeout(() => {
      axios
      .get(
        "http://ec2-3-34-191-91.ap-northeast-2.compute.amazonaws.com/get-all-post"
      )
      .then((res) => {
        if(sortValue === '?????????'){
          let result = res.data.data.sort((a, b) => {
            return new Date(b.created_at) - new Date(a.created_at);
          });
          setFeeds(
            result.map((el) => {
              return {...el, tags: JSON.parse(el.tags),
            }}))
        } else if(sortValue==='?????????'){
          let result = res.data.data.sort((a, b) => {
            return (b.option1_count+b.option2_count) - (a.option1_count+a.option2_count);
          });
          setFeeds(
            result.map((el) => {
              return {...el, tags: JSON.parse(el.tags),
            }}))
        }
      });
    }, 300);
  }, [listRender]); //????????? ????????? ????????? ??? ?????? axiosGET?????? ?????????.

  const select = (el) => {
    //????????? ?????? ???
    setSelectedFeed(el);
  };

  const listFilter = (tag) => {
    if (tag === "??????") {
      axios
        .get(
          "http://ec2-3-34-191-91.ap-northeast-2.compute.amazonaws.com/get-all-post"
        )
        .then((res) => {
          if(sortValue === '?????????'){
          let result = res.data.data.sort((a, b) => {
            return new Date(b.created_at) - new Date(a.created_at);
          });
          setFeeds(
            result.map((el) => {
              return {...el, tags: JSON.parse(el.tags),
            }}))
          } else if(sortValue==='?????????'){
            let result = res.data.data.sort((a, b) => {
              return (b.option1_count+b.option2_count) - (a.option1_count+a.option2_count);
            });
            setFeeds(
              result.map((el) => {
                return {...el, tags: JSON.parse(el.tags),
              }}))
          }
        });
    } else {
      axios
        .get(
          "http://ec2-3-34-191-91.ap-northeast-2.compute.amazonaws.com/get-all-post"
        )
        .then((res) => {
          let result = res.data.data.sort((a, b) => {
            return new Date(b.created_at) - new Date(a.created_at);
          }); //??????????????? ??????
          if(sortValue==='?????????'){
            result = res.data.data.sort((a, b) => {
              return (b.option1_count+b.option2_count) - (a.option1_count+a.option2_count);
            })
          }
          result = result.map((el) => {
            return {...el, tags: JSON.parse(el.tags),
            };
          }); //?????? ????????????...
          result = result.filter((el) => el.tags.includes(tag));
          setFeeds(result);
        });
    }
  };

  const revise = (el) => {
    //update??? ????????? ?????? ????????? ???????????? /update???????????? ????????????.
    setRevised(el);
  };
  
  const feedSort = (event) => { //select?????? ?????? ??? axios?????? ??? ????????? ?????? feeds???????????? ?????? ??????.
    setSortValue(event.target.value)
    // console.log(event.target.value)
    if(event.target.value==='?????????'){
      let result = feeds.sort((a, b) => {
        return new Date(b.created_at) - new Date(a.created_at);
      });
      result = result.map((el) => {
        return {...el, tags: JSON.parse(el.tags),
        };
      })
      setFeeds([...result]);
    } else if(event.target.value==='?????????'){
      let result = feeds.sort((a, b) => {
        return (b.option1_count+b.option2_count) - (a.option1_count+a.option2_count);
      });
      result = result.map((el) => {
        return {...el, tags: JSON.parse(el.tags),
        };
      })
      setFeeds([...result]);
    }
  }

  /**********************sign in ????????? ??????***************************/


  //??????????????? ?????? ?????????
  const loginHandler = () => {
    setIsLogin(true);
  };
  //?????????????????????
  const onSignout = () => {
    axios
      .post(
        "http://ec2-3-34-191-91.ap-northeast-2.compute.amazonaws.com/sign-out"
      )
      .then((result) => {
        //????????? ????????? ????????? ?????????
        setIsLogin(false);
        setInfo(null);
        setAccessToken(result.data.accessToken);
        browserHistory.push("/");
      });
    setIsLogin(false);
    setIsGoogle(false);
    localStorage.removeItem("accessToken");
    setAccessToken(null);
  };

  useEffect(() => {
    const storageToken = localStorage.getItem("accessToken");
    //console.log(isGoogle);
    const a = Math.random();
    if (storageToken) {
      loginHandler();
      if (isGoogle) {
      } else {
        isAuthenticated(JSON.parse(storageToken));
      }
    }
  }, [accessToken]);

  const getUserInfo = async (accessToken) => {
    const res = await axios.get(
      `http://ec2-3-34-191-91.ap-northeast-2.compute.amazonaws.com/receive/userinfo?accessToken=${accessToken}`
    );
    return res.data;
  };

  const getAccessToken = async (authorizationCode) => {
    try {
      const res = await axios.post(
        `http://ec2-3-34-191-91.ap-northeast-2.compute.amazonaws.com/receive/token`,
        {
          authorizationCode,
        }
      );

      localStorage.setItem(
        "accessToken",
        JSON.stringify(res.data.access_token)
      );
      console.log(res.data.access_token);
      setIsGoogle(true);
      setAccessToken(res.data.access_token);
      const refreshToken = localStorage.getItem("refreshToken");
      console.log(res.data.access_token);
      const userInfo = await getUserInfo(res.data.access_token);
      console.log(userInfo);

      if (refreshToken === null) {
        //?????? 1???
        //isrefreshToken(false); //???????????? ????????? ??????
        //useEffect - getAccessToken??? ???????????? ????????????.
        const tmpInfo = {
          userId: userInfo.email,
          password: "123456",
          userName: `google1234`,
          mobile: "010-1234-1234",
          signUpType: "google",
        };
        setInfo(tmpInfo);
        axios.post(
          "http://ec2-3-34-191-91.ap-northeast-2.compute.amazonaws.com/sign-up",
          tmpInfo,
          {
            "Content-Type": "application/json",
            // withCredentials: true,
          }
        );
        setIsLogin(true);
        localStorage.setItem("refreshToken", res.data.refresh_token);
      } else {
        setIsGoogle(true);
        setIsLogin(true);
        const loginInfo = {
          userId: userInfo.email,
          password: "123456",
        };
        axios
          .post(
            "http://ec2-3-34-191-91.ap-northeast-2.compute.amazonaws.com/sign-in",
            loginInfo
          )
          .then((result) => {
            if (result.data.message === "ok") {
              window.localStorage.removeItem("accessToken");
              console.log(result.data.accessToken);
              window.localStorage.setItem(
                "accessToken",
                JSON.stringify(result.data.accessToken)
                // result.data.accessToken
              );
              handleResponseSuccess(result.data); //result.data.message="ok"!!
              //::????????? ?????????????????? ???????????? ?????????
            }
          });
        history.push("/");
        //?????? ????????? user
        //????????? ?????????.
      }
    } catch (error) {
      console.log(error);
    }

    // .then((res) => {
    //   localStorage.setItem("accessToken", res.data.access_token);
    //   setAccessToken(res.data.access_token);
    //   const refreshToken = localStorage.getItem("refreshToken");
    //   console.log(res.data);
    //   if (!refreshToken) {
    //     //?????? 1???
    //     //????????????, ????????? ?????????.
    //     localStorage.setItem("refreshToken", res.data.refresh_token);

    //     setIsGoogle(true);
    //   } else {
    //     setIsGoogle(true);
    //     //?????? ????????? user
    //     //????????? ?????????.
    //   }
    // });
  };

  return (
    <>
      {/* {
      isLoading ? <LoadingIndicator /> 
      : */}
      <body className={styles.body}>
        <Router>
          <Navbar
            setListRender={() => setListRender(!listRender)}
            handleResponseSuccess={handleResponseSuccess}
            onSignout={onSignout}
            isLogin={isLogin}
            info={info}
            isAuthenticated={isAuthenticated}
            setInfo={setInfo}
            accessToken={accessToken}
          />
          <main id="page">
            <ScrollTop>
              <Switch>
                <Route exact={true} path="/">
                  <MainFeeds
                    feeds={feeds}
                    filterHandle={listFilter}
                    handleClick={select}
                    listRender={listRender}
                    sortValue={sortValue}
                    feedSort={feedSort}
                  />
                </Route>
                <Route path="/mypage">
                  <Mypage
                    handleContent={revise}
                    info={info}
                    setInfo={setInfo}
                    accessToken={accessToken}
                    isLogin={isLogin}
                    handleFeeds={select}
                    isAuthenticated={isAuthenticated}
                    setListRender={() => setListRender(!listRender)}
                  />
                </Route>
                <Route path="/modifyinfo">
                  <MyinfoModify
                    info={info}
                    setInfo={setInfo}
                  setAccessToken={setAccessToken}
                  accessToken={accessToken}
                  isLogin={isLogin}
                  isAuthenticated={isAuthenticated}
                /> 
                {/* <Mypage handleContent={revise} info={info} setInfo={setInfo} /> */}
                </Route>
                <Route path="/writing">
                  <Writing
                    accessToken={accessToken}
                    isLogin={isLogin}
                    setListRender={() => setListRender(!listRender)}
                  />
                </Route>
                <Route path="/update">
                  <Update feed={revised} 
                  accessToken={accessToken}
                  setListRender={() => setListRender(!listRender)} />
                </Route>
                {selectedFeed ? ( //?????? ??????????????? ????????? feed???????????? ???!
                  <Route path="/feed">
                    <Feed
                      feed={selectedFeed}
                      accessToken={accessToken}
                      isLogin={isLogin}
                      setListRender={() => setListRender(!listRender)}
                    />
                  </Route>
                ) : null}
                {/* <Route path="/feedresult">
                  <FeedResult feed={selectedResult}/>
                </Route> */}
                {/* ????????? ??????????????? ??????????????? ????????? ??????????????? ???????????? */}
              </Switch>
            </ScrollTop>
          </main>
          <Footer></Footer>
          <ScrollButton />
        </Router>
      </body>
      {/* } */}
    </>
  );
}

export default App;
export const browserHistory = createBrowserHistory();

