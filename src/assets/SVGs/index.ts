// export * as CommentIcon from './CommentIcon.svg';
import { commentSvg } from './CommentSVG';
import { favoriteSvg } from './FavoriteSVG';

interface Icons {
  CommentSVG: string;
  FavoriteSVG: string;
}
export const icons: Icons = {
  CommentSVG: commentSvg,
  FavoriteSVG: favoriteSvg,
};
