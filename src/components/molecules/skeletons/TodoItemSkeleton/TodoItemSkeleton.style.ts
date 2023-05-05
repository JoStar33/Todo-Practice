import styled from "styled-components";
import { skeletonGradient } from "styles/mixins.style";

const SkeletonTitleText = styled.div`
  width: 18vw;
  height: 2rem;
  border-radius: 20px;
  animation: ${skeletonGradient} 1.8s infinite ease-in-out;
`;

const SkeletonDescriptionText = styled.div`
  border-radius: 20px;
  margin-top: 2rem;
  width: 38vw;
  height: 10vw;
  animation: ${skeletonGradient} 1.8s infinite ease-in-out;
`;


export { SkeletonTitleText, SkeletonDescriptionText }