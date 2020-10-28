import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';


function Navigation (props) {
  return (
    <section className="nav-bar">
      <Link to="/"> Home </Link>
      <Link onClick={() => props.history.goBack()}> Back </Link>
      <Link to="/login"> Login </Link>
      <Link to="/search"> Search </Link>
      {/* <Link to="/options">Options</Link> */}
    </section>
  )
}

export default Navigation;