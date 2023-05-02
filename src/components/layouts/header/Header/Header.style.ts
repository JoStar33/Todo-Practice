import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  padding: 10px 5%;
  background-color: ${(props) => props.theme.bgColor_primary};
`;