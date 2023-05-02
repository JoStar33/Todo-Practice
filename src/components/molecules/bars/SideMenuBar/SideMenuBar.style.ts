import styled from "styled-components";

const SideMenuBarContainer = styled.div`
  position: fixed;
  overflow: hidden;
  top: 0;
  left: 0;
  width: 15vw;
  height: 100%;
  background-color: grey;
  display: flex;
  align-items: center;
  flex-direction: column;
  z-index: 4;
  div {
    margin: 1vw;
  }
`;

export { SideMenuBarContainer };

