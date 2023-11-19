/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-max-props-per-line */
/* eslint-disable arrow-body-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/self-closing-comp */
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';

// app imports
// import SongSearch from '../../features/SongSearch/Song_Input';
import { PostSong } from '../Components/PostSong/PostSong';
import { SearchResults } from './SongResults/SongResultsContainer';
import { Login } from './Login/Login';
import { HomePage } from './HomePage/HomePage';
import { Favorites } from './Favorites/Favorites';
import { SignUpForm } from './SignUpForm/SignUpForm';
import { RootState } from '../Store/storetypes';

export const RoutesInternal = () => {
  const routeComponents = [
    { path: 'SignUpForm', component: <SignUpForm /> },
    { path: 'PostSong', component: <PostSong /> },
    { path: 'Favorites', component: <Favorites /> },
    { path: 'HomePage', component: <HomePage /> },
    { path: 'Login', component: <Login /> },
    // { path: 'Search', component: <SongSearch /> },
    { path: 'SearchResults', component: <SearchResults /> },
  ];

  const routeGenerator = () =>
    routeComponents.map((route) => {
      return (
        <Route
          key={route.path}
          path={`/${route.path}`}
          element={route.component}
        />
      );
    });
  const isLoggedIn = useSelector((state: RootState) => state.user.isLoggedIn);
  return (
    <Routes>
      {routeGenerator()}
      {/* <Route
        exact path="/SignUpForm"
        render={() => {
          return (
            <SignUpForm />
          );
        }}
      >
      </Route>
      <Route
        exact path="/PostSong"
        render={() => {
          return (
            <PostSong />
          );
        }}
      >
      </Route>
      <Route
        exact path="/Favorites"
        render={() => {
          return (
            <Favorites
              location="favorites"
            />
          );
        }}
      >
      </Route>
      <Route
        exact path="/Home"
        render={() => {
          return (
            <HomePage
              isLoggedIn={isLoggedIn}
              location="home-page"
            />
          );
        }}
      >
      </Route>
      <Route
        exact path="/Login"
        render={() => {
          return (<Login />);
        }}
      >
      </Route>
      <Route
        exact path="/Search"
        render={() => {
          return (<SongSearch />);
        }}
      >
      </Route>
      <Route
        exact path="/SearchResults"
        render={() => {
          return (
            <SearchResults
              location="search-result"
            />
          );
        }}
      >
      </Route>
        */}
      <Route
        path="/"
        element={<HomePage isLoggedIn={isLoggedIn} location="home-page" />}
      />
    </Routes>
  );
};
