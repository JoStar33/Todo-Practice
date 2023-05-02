import styled from "styled-components";

const ToggleInput = styled.input`
  &:checked ~ .label {
    background: #f03d3d;
  }
  &:checked ~ label span {
    left: calc(100% - 44px);
  }
`;

const Switch = styled.label`
  width: 100px;
  height: 50px;
  display: block;
  position: relative;
  border-radius: 30px;
  background-color: #fff;
  box-shadow: 0 0 16px 3px rgba(0 0 0 / 15%);
  cursor: pointer;
  margin: 30px;
  transition: all 0.2s ease-in;
`;

const Button = styled.span`
  width: 40px;
  height: 40px;
  position: absolute;
  top: 50%;
  left: 4px;
  transform: translateY(-50%);
  border-radius: 50%;
  background: #f03d3d;
  transition: all 0.2s ease-in;
`;

export { ToggleInput, Switch, Button };

