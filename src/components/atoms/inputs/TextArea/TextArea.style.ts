import styled from "styled-components";

const Container = styled.div`
display: flex;
flex-direction: column;
`;

const TextAreaContainer = styled.textarea`
  height: 50vh;
  font-size: 1.4rem;
  border-radius: 5px;
  border: 2px solid black;
  outline: none;
  resize: none;
  &:focus {
    border: #6597f1 solid 3px;
  }
`;

export { TextAreaContainer, Container }