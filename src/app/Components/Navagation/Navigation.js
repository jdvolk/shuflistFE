/* eslint-disable no-unused-expressions */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../../../features/User/getUserSlice';
import { resetSearch } from '../../../features/SongSearch/songInputSlice';
import './Navigation.css';

function Navigation(props) {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  return (
    <section className="nav-bar">
      <Link
        to="/"
        onClick={() => {
          dispatch(resetSearch());
        }}
      >
        Home
      </Link>
      <Link
        onClick={() => props.history.goBack()}
      >
        Back
      </Link>
      {!isLoggedIn ?
        <Link to="/Login"> Login </Link> : (
          <Link
            to="/"
            onClick={() => {
              dispatch(logout()) && dispatch(resetSearch());
            }}
          >
            Logout
          </Link>
        )}
      <Link to="/Favorites"> Favorites </Link>
      <Link
        to="/Search"
      >
        Search
      </Link>
      {/* <Link to="/options">Options</Link> */}
    </section>
  );
}

export default Navigation;
