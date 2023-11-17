import React from 'react';
import { useSelector } from 'react-redux';
import {  Link } from 'react-router-dom';

// app imports
import TimeLine from '../../Components/TimeLine/TimeLine';
// import SongSearch from '../../../features/SongSearch/Song_Input';
import './HomePage.css';
import { withRouter } from '../../Components/Song/Song';
import { RootState } from '../../store';

function HomePage(props: any) {
  // eslint-disable-next-line react/prop-types
  const { location } = props;
  const isLoggedIn = useSelector((state: RootState) => state.user.isLoggedIn);

  return (
    <section>
      { !isLoggedIn
        && (
          <section className="default-page">
            <Link to="/Login" className="nav-link">Login</Link>
            <Link to="/SignUpForm" className="nav-link">Sign Up</Link>
          </section>
        )}
      {/* {isLoggedIn && <SongSearch />} */}
      <TimeLine location={location} />
    </section>
  );
}

export default withRouter(HomePage);
