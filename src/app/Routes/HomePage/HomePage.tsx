import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

// app imports
import { TimeLine } from '../../Components/TimeLine/TimeLine';
// import SongSearch from '../../../features/SongSearch/Song_Input';
import './HomePage.css';
import { RootState } from '../../Store/storetypes';

export const HomePage = (props: any) => {
  // eslint-disable-next-line react/prop-types
  const location = useLocation();
  const isLoggedIn = useSelector((state: RootState) => state.user.isLoggedIn);

  return (
    <section>
      {!isLoggedIn && (
        <section className="default-page">
          <Link to="/Login" className="nav-link">
            Login
          </Link>
          <Link to="/SignUpForm" className="nav-link">
            Sign Up
          </Link>
        </section>
      )}
      {/* {isLoggedIn && <SongSearch />} */}
      <TimeLine location={location} />
    </section>
  );
};
