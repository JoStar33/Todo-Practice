import TopMenuBar from "components/molecules/bars/TopMenuBar/TopMenuBar";
import { menus } from "data/menus";
import DarkmodeSwitch from "../DarkmodeSwitch/DarkmodeSwitch";
import { Container } from "./Header.style";

const Header = () => {
  return (
    <Container>
      <TopMenuBar menu={menus}/>
      <DarkmodeSwitch />
    </Container>
  );
};

export default Header;