import styled, { keyframes } from "styled-components";

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

const PageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Input = styled.input`
  font-size: 1.4rem;
  border-radius: 5px;
  border: 2px solid black;
  outline: none;
  width: 80vw;
  &:focus {
    border: #6597f1 solid 3px;
  }
`;

const InputTitle = styled.label`
  font-size: 1.3rem;
  font-weight: 800;
  color: ${(props) => props.theme.textColor_primary};
`;

const PageHeader = styled.div`
  width: 90vw;
  height: 10vh;
  display: flex;
  align-items: center;
  h1 {
    color: ${(props) => props.theme.textColor_primary};
  }
`;

const skeletonGradient = keyframes`
    0% {
        background-color: rgba(165, 165, 165, 0.1);
    }

    50% {
        background-color: rgba(165, 165, 165, 0.3);
    }

    100% {
        background-color: rgba(165, 165, 165, 0.1);
    }
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

export {
  Input,
  InputTitle,
  Button,
  CounterControlButton,
  Card,
  ButtonCenter,
  DivCenter,
  PageContainer,
  PageHeader,
  skeletonGradient
};
