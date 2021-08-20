import React from 'react';
import { useSelector } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';

// app imports
import TimeLine from '../../Components/TimeLine/TimeLine';
import SongSearch from '../../../features/SongSearch/Song_Input';

function HomePage(props) {
  // eslint-disable-next-line react/prop-types
  const { location } = props;
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  return (
    <section>
      { !isLoggedIn
        && (
          <>
            <Link to="/Login">Login</Link>
            <br />
            <Link to="/SignUpForm">Sign Up</Link>
          </>
        )}
      {isLoggedIn && <SongSearch />}
      <TimeLine location={location} />
    </section>
  );
}

export default withRouter(HomePage);
