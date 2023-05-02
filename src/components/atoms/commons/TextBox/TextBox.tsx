import { Text } from './TextBox.style';

interface Props {
  text: string;
  textColor?: string;
}

const TextBox = ({text, textColor = 'black'}: Props) => {
  return (
    <Text style={{color: textColor}}>
      {
        text
      }
    </Text>
  );
};

export default TextBox;