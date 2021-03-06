import { FC } from 'react';

interface Props {
  className?: string;
  placeholder?: string;
  value?: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleKeyUp: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onFocus?: any;
}

export const Input: FC<Props> = ({ className, placeholder, value, handleChange, handleKeyUp, onFocus }) => {
  return (
    <div className={className} id='inputContainer'>
      <input id='search-input' value={value} placeholder={placeholder} onChange={handleChange} onKeyUp={handleKeyUp} onFocus={onFocus} />
    </div>
  );
};
