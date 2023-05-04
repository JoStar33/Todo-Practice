import { MenuButtonContainer } from "./MenuButton.style";

interface Props {
  icon: React.ReactNode;
  label: string;
  handleClick: () => void;
}

const MenuButton = ({ icon, label, handleClick }: Props) => {
  return (
    <MenuButtonContainer onClick={handleClick}>
      {icon}
      {label}
    </MenuButtonContainer>
  );
};

export default MenuButton;
