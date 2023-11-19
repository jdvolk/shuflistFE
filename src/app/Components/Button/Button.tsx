export enum ButtonType {
  SUBMIT = 'submit',
  BUTTON = 'button',
}
interface ButtonProps {
  className: string;
  type?: ButtonType;
  label?: string;
  onClick?: () => void;
  disabled?: boolean;
}

export const Button = ({
  className,
  type = ButtonType.BUTTON,
  onClick,
  label,
  disabled = false,
}: ButtonProps) => {
  return (
    <button
      className={className}
      name="button"
      type={type === ButtonType.SUBMIT ? 'submit' : 'button'}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};
