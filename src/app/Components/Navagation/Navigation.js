import React from 'react';
import { Link } from 'react-router-dom';

function Navigation () {
  return (
    <>
      <Link to="/home">Home</Link>
      <Link to="/home">Back</Link>
      <Link to="/login">Login</Link>
      <Link to="/search">Search</Link>
      <Link to="/options">Options</Link>
    </>
  )
}

export default Navigation;