import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

// app imports
import { TimeLine } from '../../Components/TimeLine/TimeLine';
// import SongSearch from '../../../features/SongSearch/Song_Input';
import './HomePage.css';
import { RootState, useAppDispatch } from '../../Store/storetypes';
import { getUserInfo } from '../../Store/User/getUserSlice';

export const HomePage = () => {
  // eslint-disable-next-line react/prop-types
  const isLoggedIn = useSelector((state: RootState) => state.user.isLoggedIn);
  const storedUser = localStorage.getItem('AUTHENTICATED_USER');
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (storedUser?.length) {
      dispatch(getUserInfo(JSON.parse(storedUser)));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [storedUser]);

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
      <TimeLine />
    </section>
  );
};
