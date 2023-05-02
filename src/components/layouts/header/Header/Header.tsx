import DarkmodeSwitch from "../DarkmodeSwitch/DarkmodeSwitch";
import { Container } from "./Header.style";

const Header = () => {
  return (
    <Container>
      <DarkmodeSwitch />
    </Container>
  );
};

export default Header;