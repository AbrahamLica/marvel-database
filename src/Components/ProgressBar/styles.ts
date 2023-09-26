import styled from "styled-components";
import { ContainerProps } from "../../Types/GlobalStylesTypes";

export const ProgressBar = styled.div<ContainerProps>`
  position: fixed;
  top: ${(props) => props.top};
  left: 0;
  height: 5px;
  background-color: rgb(233, 25, 15);
  z-index: 9999;
  width: ${(props) => props.width};
`;
