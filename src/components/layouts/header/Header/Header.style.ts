import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100vw;
  background-color: ${(props) => props.theme.bgColor_primary};
  color: ${(props) => props.theme.textColor_primary};
`;