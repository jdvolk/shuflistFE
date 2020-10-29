import React from 'react';
import { useSelector } from 'react-redux';
import TimeLine from '../TimeLine/TimeLine';
import SongSearch from '../../../features/SongSearch/Song_Input';

function HomePage() {
  // const { isLoggedIn } = props
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  return (
    <section>
      { !isLoggedIn && <h1>Please Log In </h1>}
      {isLoggedIn && <SongSearch />}
      <TimeLine />
    </section>
  );
}

export default HomePage;
