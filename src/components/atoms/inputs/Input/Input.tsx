import { RefObject } from 'react';
import { Input as InputContainer, InputTitle } from 'styles/mixins.style';

interface Props {
  label: string;
  isPassword?: boolean;
  placeholder: string;
  valueRef: RefObject<HTMLInputElement>;
}

const Input = ({isPassword = false, label, placeholder, valueRef }: Props) => {
  return (
    <div>
      <InputTitle
        htmlFor="input"
      >
        {label}
      </InputTitle>
      <div>
        <InputContainer
          id="input"
          ref={valueRef}
          type={isPassword ? "password" : "text"}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

export default Input;
