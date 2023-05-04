import styled from "styled-components";

const Container = styled.div`
  width: 90vw;
  height: 70vh;
  overflow-y: scroll;
  border-radius: 13px;
  border: 2px solid black;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: row;
  padding: 1vw;
  color: ${(props) => props.theme.textColor_primary};
  ::-webkit-scrollbar {
    width: 2vw; /* 스크롤바의 너비 */
  }
  ::-webkit-scrollbar-thumb {
    /* border: 2px solid black; */
    height: 30%; /* 스크롤바의 길이 */
    background: ${(props) => props.theme.bgColor_primary};
    border-radius: 20px;
  }
`;

export { Container };

