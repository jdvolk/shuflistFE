import React from 'react';
import { useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import TimeLine from '../../Components/TimeLine/TimeLine';
import SongSearch from '../../../features/SongSearch/Song_Input';

function HomePage(props) {
  // eslint-disable-next-line react/prop-types
  const { location } = props;
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  return (
    <section>
      { !isLoggedIn && <h1>Please Log In </h1>}
      {isLoggedIn && <SongSearch />}
      <TimeLine location={location} />
    </section>
  );
}

export default withRouter(HomePage);
