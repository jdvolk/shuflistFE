import React from 'react';
import { useSelector } from 'react-redux'
import TimeLine from "../TimeLine/TimeLine";

function HomePage (props) { 
  // const { isLoggedIn } = props
  const isLoggedIn = useSelector(state => state.user.isLoggedIn);
  return (
    <section>
      { !isLoggedIn && 
        <h1>Please Log In </h1>
      } 
      { <TimeLine />}
    </section>
  )
}

export default HomePage;