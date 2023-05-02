import styled from "styled-components";
import { DivCenter } from "styles/mixins.style";

const Dialog = styled(DivCenter)`
  position: fixed;
  top: 0vh;
  left: 0vh;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
  transition: all 0.3s;
  z-index: 9999;
`;

const DialogContainer = styled(DivCenter)`
  max-width: 14rem;
  position: relative;
  background-color: white;
  border-radius: 20px;
  padding: 20px;
`;

export { Dialog, DialogContainer };

