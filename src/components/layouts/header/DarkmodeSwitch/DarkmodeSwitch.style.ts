import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 30px;
`;

export const Label = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.themeColor};
  cursor: pointer;
`;

export const IconName = styled.span`
  font-size: 14px;
  font-weight: 600;
`;