import './Emoji.css';

interface EmojiProps {
  label: string;
}
// render
export const Emoji = ({ label }: EmojiProps) => {
  return (
    <section className="emoji-background">
      <span
        className={label.length ? `emoji ${label}` : 'emoji Common'}
        role="img"
        aria-label={label.length ? label : ''}
        aria-hidden={label.length ? 'false' : 'true'}
        // onClick={handleClick}
      />
    </section>
  );
};
