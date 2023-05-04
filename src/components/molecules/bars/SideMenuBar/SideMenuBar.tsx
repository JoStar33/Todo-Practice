import MenuButton from "components/atoms/button/MenuButton/MenuButton";
import { useNavigate } from "react-router-dom";
import { Menu } from "types/menu";
import { SideMenuBarContainer } from "./SideMenuBar.style";

interface Props {
  menu: Menu[];
}

const SideMenuBar = ({menu}: Props) => {
  const navigate = useNavigate();
  return (
    <SideMenuBarContainer>
      {menu.map((menuElement) => (
        <MenuButton
          key={menuElement.id}
          icon={menuElement.icon}
          label={menuElement.label}
          handleClick={() => {
            navigate(menuElement.router);
          }}
        />
      ))}
    </SideMenuBarContainer>
  );
};

export default SideMenuBar;