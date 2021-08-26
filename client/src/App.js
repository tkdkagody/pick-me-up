import styles from './App.module.css';
import React, { useState } from 'react';
import Navbar from './pages/navbar/Navbar';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Footer from './pages/footer/Footer';
import MainFeeds from './pages/mainFeeds/MainFeeds';
import Mypage from './pages/mypage/Mypage';
import Login from './components/signin/Signin';
import Signup from './components/signup/Signup';




function App() {


  return (
    
    <div className={styles.body}>
      <Router>
         <Navbar/>
        <div id="page">
          <Switch>
            <Route exact={true} path="/">
              <MainFeeds/>  
            </Route>
            <Route path="/mypage">
              <Mypage/>
            </Route>
          </Switch>
        </div>
      {/* 
        <Login /> */}

        <Signup />
        <Footer></Footer>


      </Router>
      {/* Navbar */}
      {/* 4개의 메인 컴포넌트 상태에 따라서 랜더링 */}
      {/* Footer */}
      
    </div>
  );
}

export default App;
