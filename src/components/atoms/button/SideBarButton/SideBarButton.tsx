import { GiHamburgerMenu } from "react-icons/gi";
import { Button } from './SideBarButton.style';

interface Props {
  handleClick: () => void;
}

const SideBarButton = ({ handleClick }: Props) => {
  return (
    <Button onClick={handleClick}>
      <GiHamburgerMenu />
    </Button>
  );
};

export default SideBarButton;
