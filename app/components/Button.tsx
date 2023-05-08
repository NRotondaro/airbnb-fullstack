import { IconType } from 'react-icons';

interface ButtonProps {
  label: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  outline?: boolean;
  small?: boolean;
  icon?: IconType;
}

export const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled,
  outline,
  small,
  icon,
}) => {
  return (
    <button
      className={`relative w-full rounded-lg transition hover:opacity-80 disabled:cursor-not-allowed disabled:opacity-70 
      ${outline ? 'bg-white' : 'bg-rose-500'}
      ${outline ? 'border-black' : 'bg-rose-500'}
      ${outline ? 'text-black' : 'text-white'} 
      ${small ? 'py-1' : 'py-3'}
      `}>
      {label}
    </button>
  );
};
