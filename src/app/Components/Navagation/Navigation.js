/* eslint-disable arrow-body-style */
/* eslint-disable no-unused-expressions */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

// app imports
import { logout } from '../../../features/User/getUserSlice';
import { resetSearch } from '../../../features/SongSearch/songInputSlice';

// UI
import './Navigation.css';

function Navigation(props) {
  const { history } = props;
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  const defaultNav = [
    { label: 'Home', route: '/', Click: () => dispatch(resetSearch()) },
    { label: 'Back', route: '#/', Click: () => history.goBack() },
    { label: 'Search', route: '/Search', Click: () => null },
  ];

  const loggedIn = [
    ...defaultNav,
    { label: 'Favorites', route: '/Favorites', Click: () => dispatch(resetSearch()) },
    { label: 'Logout', route: '/', Click: () => dispatch(logout()) && dispatch(resetSearch()) },
  ];

  const loggedOut = [
    { label: 'Login', route: '/Login', Click: () => null },
    ...defaultNav,
  ];

  const renderNav = (location) => location.map((link) => {
    return (
      <Link
        key={link.label}
        to={`${link.route}`}
        onClick={link.Click}
        className="nav-link"
        // style={{ textDecoration: 'none' }}
      >
        {link.label}
      </Link>
    );
  });

  return (
    <section className="nav-bar">
      {isLoggedIn && renderNav(loggedIn)}
      {!isLoggedIn && renderNav(loggedOut)}
      {/* <Link to="/" onClick={() => dispatch(resetSearch())}>Home</Link>
      <Link to="#/" onClick={() => history.goBack()}>Back</Link>
      {!isLoggedIn && <Link to="/Login"> Login </Link>}
      { isLoggedIn && (
        <>
          <Link
            to="/"
            onClick={() => dispatch(logout()) && dispatch(resetSearch())}
          >
            Logout
          </Link>
          <Link to="/Favorites" onClick={() => dispatch(resetSearch())}>Favorites</Link>
        </>
      )}
      <Link to="/Search">Search</Link> */}
    </section>
  );
}

export default Navigation;
