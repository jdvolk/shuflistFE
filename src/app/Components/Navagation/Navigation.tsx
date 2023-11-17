import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

// app imports
import SongSearch from '../../Store/SongSearch/SongInput';
import { logout, selectIsLoggedIn } from '../../Store/User/getUserSlice';
import { resetSearch } from '../../Store/SongSearch/songInputSlice';

// UI
import './Navigation.css';

interface MenuItem {
  label: string;
  route: string;
  Click: () => void;
}

function Navigation() {
  const navagate = useNavigate();
  // const { history } = props;
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const defaultNav : MenuItem []  = [
    { label: 'Home', route: '/', Click: () => dispatch(resetSearch()) },
    { label: 'Back', route: '#/', Click: () => navagate(-1) },
    // { label: 'Search', route: '/Search', Click: () => null },
  ];

  const loggedIn : MenuItem []  = [
    ...defaultNav,
    { label: 'Favorites', route: '/Favorites', Click: () => dispatch(resetSearch()) },
    { label: 'Logout', route: '/', Click: () => dispatch(logout()) && dispatch(resetSearch()) },
  ];

  const loggedOut: MenuItem [] = [
    { label: 'Login', route: '/Login', Click: () => null },
    ...defaultNav,
  ];

  const renderNav = (locations: MenuItem[] ) => locations.map((link) => {
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
      <SongSearch />
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
