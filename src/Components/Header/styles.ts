import styled from "styled-components";
import { ContainerProps } from "../../Types/GlobalStylesTypes";

export const Header = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 20vh;
  background-color: #202020;
  position: fixed;
  z-index: 99;
`;

export const TopHeader = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const Logo = styled.img<ContainerProps>`
  height: 10vh;
  cursor: pointer;
`;

export const BottomHeader = styled.div<ContainerProps>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px solid #393939;
  background-color: #202020;
`;

export const CategoryText = styled.p<ContainerProps>`
  font-size: 1.2rem;
  color: white;
  margin: 10px 15px;
  font-family: "Roboto Condensed";
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
  transition: 0.2s;
  padding: 0px 5px;
  border-radius: 5px;

  :hover {
    background-color: #e9190f;
  }
`;
