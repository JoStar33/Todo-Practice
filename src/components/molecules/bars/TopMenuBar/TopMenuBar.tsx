import MenuButton from "components/atoms/button/MenuButton/MenuButton";
import { Menu } from "types/menu";
import { TopMenuBarContainer } from "./TopMenuBar.style";

interface Props {
  menu: Menu[];
}

const TopMenuBar = ({ menu }: Props) => {
  return (
    <TopMenuBarContainer>
      {menu.map((menuElement) => (
        <MenuButton
          key={menuElement.id}
          icon={menuElement.icon}
          label={menuElement.label}
        />
      ))}
    </TopMenuBarContainer>
  );
};

export default TopMenuBar;
