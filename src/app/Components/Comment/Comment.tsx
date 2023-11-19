import { UserHeader } from '../UserHeader/UserHeader';

interface CommentProps {
  author: string;
  body: string;
}

export const Comment = ({ author, body }: CommentProps) => {
  return author && body ? (
    <section className="comment">
      <UserHeader />
      <section className="comment-body">
        <p>{author} </p>
        <p> - {body}</p>
      </section>
    </section>
  ) : null;
};
