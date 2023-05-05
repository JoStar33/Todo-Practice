import { RefObject } from 'react';
import { Container, TextAreaContainer } from './TextArea.style';
import { InputTitle } from 'styles/mixins.style';

interface Props {
  label: string;
  placeholder: string;
  valueRef: RefObject<HTMLTextAreaElement>;
};

const TextArea = ({label, placeholder, valueRef}: Props) => {
  return (
    <Container>
      <InputTitle>
        {label}
      </InputTitle>
      <TextAreaContainer ref={valueRef} placeholder={placeholder} />
    </Container>
  );
};

export default TextArea;