import { useState, useEffect, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';

// app imports
import {
  addToFavorites,
  removeFromFavorites,
} from '../../Store/User/getUserSlice';
import { switchFavorite, postFavorite } from '../../Store/User/userPostsSlice';

// render methods
import { renderSearchResults } from './render/renderSearchResults';
import { renderPosts } from './render/renderPosts';
import { renderFavorites } from './render/renderFavorites';
import { renderDefault } from './render/Default';
import { renderPostSong } from './render/renderPostSong';

// UI
import './Song.css';

// custom hooks
import { setFavorite } from './useFavorite';
import { searchResultFavorite } from './useSearchFavorite';
import { RootState, Song, useAppDispatch } from '../../Store/storetypes';

interface SongRenderProps {
  handlePostClick?: (input: any) => Promise<void>;
  song: Song;
  post?: any;
  props?: any;
}
export const SongRender = ({
  handlePostClick,
  song,
  post,
  props,
}: SongRenderProps) => {
  const location = useLocation();
  const navigate = useNavigate();

  // component state
  const [passedSong, setSong] = useState<Song>();
  // eslint-disable-next-line @typescript-eslint/no-shadow, react/destructuring-assignment

  useEffect(() => {
    setSong(song);
  }, [song]);

  const dispatch = useAppDispatch();
  const userFavorites = useSelector(
    (state: RootState) => state.user.userInfo.Favorites
  );

  const { pathname } = location;
  const handleSearchClick = useCallback(
    () => navigate('/PostSong', { state: song }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const handleFavClick = () => {
    setFavorite(
      passedSong,
      setSong
      // dispatch
    );
    // if (props.location.pathname === '/SearchResult' && passedSong) {
    //   searchResultFavorite(passedSong, addToFavorites, removeFromFavorites, dispatch);
    //   dispatch(switchFavorite(passedSong));
    //   postFavorite(passedSong);
    if (location.pathname === '/Favorites') {
      searchResultFavorite(
        passedSong,
        addToFavorites,
        removeFromFavorites,
        dispatch
      );
      // } else {
      //   searchResultFavorite(passedSong, addToFavorites, removeFromFavorites, dispatch);
      //   postFavorite(passedSong);
    }
  };

  const checkFavorite = (songID: number) => {
    const isInFavorites = userFavorites.find(
      (songFav) => songFav.Song_ID === songID
    );
    if (isInFavorites) setFavorite(passedSong, setSong);
  };

  if (passedSong) {
    const songDetails = passedSong;
    if (!songDetails.isFavorite) checkFavorite(songDetails.Song_ID);
    return (
      <section className="song-container">
        {renderDefault(songDetails)}
        {pathname === '/SearchResults' &&
          renderSearchResults(songDetails, handleSearchClick)}
        {pathname === '/' &&
          renderPosts(props, post, songDetails, handleFavClick)}
        {pathname === '/Favorites' &&
          renderFavorites(passedSong, handleFavClick)}
        {pathname === '/PostSong' && renderPostSong(handlePostClick)}
      </section>
    );
    // eslint-disable-next-line no-else-return
  } else {
    return <section>Loading...</section>;
  }
};
