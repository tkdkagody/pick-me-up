import './App.css';
import React from 'react';
import Navbar from './pages/navbar/Navbar';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Footer from './pages/footer/Footer';
import MainFeeds from './pages/mainFeeds/MainFeeds';
import Mypage from './pages/mypage/Mypage';



function App() {

  
  
  return (
    <>
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
        <Footer></Footer>
      </Router>
      {/* Navbar */}
      
      {/* 4개의 메인 컴포넌트 상태에 따라서 랜더링 */}
      {/* Footer */}
      
    </>
  );
}

export default App;
