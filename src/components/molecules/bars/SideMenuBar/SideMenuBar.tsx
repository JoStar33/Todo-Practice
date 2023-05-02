import MenuButton from "components/atoms/button/MenuButton/MenuButton";
import { Menu } from "types/menu";
import { SideMenuBarContainer } from "./SideMenuBar.style";

interface Props {
  menu: Menu[];
}

const SideMenuBar = ({menu}: Props) => {
  return (
    <SideMenuBarContainer>
      {menu.map((menuElement) => (
        <MenuButton
          key={menuElement.id}
          icon={menuElement.icon}
          label={menuElement.label}
        />
      ))}
    </SideMenuBarContainer>
  );
};

export default SideMenuBar;