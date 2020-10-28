import React from 'react';
import { useSelector } from 'react-redux';

import './TimeLine.css';
import Song from '../Song/Song'


function TimeLine (props) {
  const userTimeLine = useSelector(state => state.user.userInfo.posts);
  const isLoggedIn = useSelector(state => state.user.isLoggedIn);
  let posts;
  if(isLoggedIn) {
    console.log(userTimeLine)
    
    posts = userTimeLine.map(song => {
      console.log(song.song.Artist);
      return (
        <section>
          <Song 
            albumCover={song.song.Album_Cover}
            artist={song.song.Artist}
            title={song.song.Song_Name}
            isSearchResult="false"
          />
        </section>
      )
    })
  }
  

  return (
    <section>
      {posts ? posts : null }
    </section>
  )
}

export default TimeLine