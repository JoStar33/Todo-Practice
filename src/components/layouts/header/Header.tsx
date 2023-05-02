import styled from "styled-components";
import { DarkmodeSwitchContainer } from "./DarkmodeSwitchContainer";

export const Header = (): React.ReactElement => {
  return (
    <Container>
      <DarkmodeSwitchContainer />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  padding: 10px 5%;
  background-color: ${(props) => props.theme.bgColor_primary};
`;
