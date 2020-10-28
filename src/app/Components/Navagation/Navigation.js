import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { logout } from '../../../features/User/getUserSlice'
import { resetSearch } from '../../../features/SongSearch/songInputSlice'
import './Navigation.css';


function Navigation (props) {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.user.isLoggedIn)
  console.log(isLoggedIn)
  return (
    <section className="nav-bar">
      <Link to="/Home" onClick={() => {
        dispatch(resetSearch())
        }}> Home </Link>
      <Link onClick={() => props.history.goBack()}> Back </Link>
      {!isLoggedIn ? <Link to="/Login"> Login </Link> : <Link to='/' onClick={() => {
        dispatch(logout())
        } 
      }> Logout </Link>}
      {/* <Link to="/login"> Login </Link> */}
      <Link to="/Search"> Search </Link>
      {/* <Link to="/options">Options</Link> */}
    </section>
  )
}

export default Navigation;