import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
  return <>
  <Link to="/">Home</Link>
  <Link to="/mypage">Mypage</Link>
  </>
};

export default Navbar;