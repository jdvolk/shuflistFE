/* eslint-disable no-sequences */
/* eslint-disable @typescript-eslint/no-unused-expressions */
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

// app imports
import { logout, selectIsLoggedIn } from '../../Store/User/getUserSlice';
import { resetSearch } from '../../Store/SongSearch/songInputSlice';

// UI
// import './Navigation.css';

interface MenuItem {
  label: string;
  route: string;
  Click: () => void;
}
interface NavLinksProps {
  onClick?: () => void;
}

export const NavLinks = ({ onClick }: NavLinksProps) => {
  const navagate = useNavigate();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const defaultNav: MenuItem[] = [
    {
      label: 'Home',
      route: '/',
      Click: () => {
        dispatch(resetSearch()), onClick && onClick();
      },
    },
    {
      label: 'Back',
      route: '#/',
      Click: () => {
        navagate(-1), onClick && onClick();
      },
    },
    // { label: 'Search', route: '/Search', Click: () => null },
  ];

  const loggedIn: MenuItem[] = [
    ...defaultNav,
    {
      label: 'Favorites',
      route: '/Favorites',
      Click: () => {
        dispatch(resetSearch()), onClick && onClick();
      },
    },
    {
      label: 'Logout',
      route: '/',
      Click: () => {
        dispatch(logout()) && dispatch(resetSearch()), onClick && onClick();
      },
    },
  ];

  const loggedOut: MenuItem[] = [
    {
      label: 'Login',
      route: '/Login',
      Click: () => {
        onClick && onClick();
      },
    },
    ...defaultNav,
  ];

  const renderNav = (locations: MenuItem[]) =>
    locations.map((link) => {
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

  return renderNav(isLoggedIn ? loggedIn : loggedOut);
};
