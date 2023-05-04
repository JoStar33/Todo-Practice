import MenuButton from "components/atoms/button/MenuButton/MenuButton";
import { useNavigate } from "react-router-dom";
import { Menu } from "types/menu";
import { TopMenuBarContainer } from "./TopMenuBar.style";

interface Props {
  menu: Menu[];
}

const TopMenuBar = ({ menu }: Props) => {
  const navigate = useNavigate();
  return (
    <TopMenuBarContainer>
      {menu.map((menuElement) => (
        <MenuButton
          key={menuElement.id}
          icon={menuElement.icon}
          label={menuElement.label} 
          handleClick={() => {
            navigate(menuElement.router);
          }}/>
      ))}
    </TopMenuBarContainer>
  );
};

export default TopMenuBar;
