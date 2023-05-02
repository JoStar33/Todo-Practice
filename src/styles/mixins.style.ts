import styled from "styled-components";

const ButtonCenter = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DivCenter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;


const Button = styled(ButtonCenter)`
  max-height: 4rem;
  line-height: 2rem;
  font-size: 1.4rem;
  border-radius: 10px;
  cursor: pointer;
  font-weight: 800;
`;

const CounterControlButton = styled(ButtonCenter)`
  cursor: pointer;
  width: 5vw;
  height: 5vw;
  background-color: transparent;
  border: 0.3vw solid black;
  transition: all 0.2s;
  border-radius: 1.5vw;
  box-shadow: 0px 7px 0px 0px #707381;
  svg {
    width: 6vw;
    height: 100%;
  }
  &:active {
    margin-top: 16px;
    margin-bottom: 0px;
    box-shadow: none;
  }
`;

const Card = styled(DivCenter)`
  flex-direction: column;
  padding: 1vw;
  width: 10vw;
  border-radius: 13px;
  box-shadow: 0 6px 6px 0 gray;
  cursor: pointer;
  figure {
    position: relative;
    width: 10vw;
    height: 10vw;
  }
`;

export { Button, CounterControlButton, Card, ButtonCenter };