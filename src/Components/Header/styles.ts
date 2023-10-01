import styled from "styled-components";
import { ContainerProps } from "../../Types/GlobalStylesTypes";

export const Header = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  min-height: 15vh;
  background-color: #202020;
  position: fixed;
  z-index: 99;
  padding: 5px;
`;

export const TopHeader = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const Logo = styled.img<ContainerProps>`
  width: 130px;
  cursor: pointer;
`;

export const BottomHeader = styled.div<ContainerProps>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px solid #393939;
  background-color: #202020;
  padding: 10px;
`;

export const CategoryText = styled.p<ContainerProps>`
  font-size: 1.2rem;
  color: white;
  margin: 0px 15px;
  font-family: "Roboto Condensed";
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
  transition: 0.2s;
  :hover {
    background-color: #e9190f;
  }

  @media (max-width: 375px) {
      font-size: 1rem;
    }
`;

export const FakeDiv = styled.div<ContainerProps>`
  min-width: 15%;
  background-color: red;
  margin-right: auto;
  visibility: hidden;
  margin-left: 15px;
  @media (max-width: 425px) {
    display: none;
  }
`;

export const ContainerSocialMedia = styled.div<ContainerProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: auto;
  margin-right: 10px;
  min-width: 15%;

  @media (max-width: 425px) {
    display: none;
  }
`;

export const ContainerCreator = styled.div<ContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: 10px;
  min-width: 15%;

  @media (max-width: 680px) {
    width: 100%;
  }
`;

export const ContainerTest = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  @media (max-width: 680px) {
    flex-direction: column;
  }
`;

export const IconSocialMedia = styled.img<ContainerProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.heigth};
  background-color: ${(props) => props.backgroundColor};
  display: ${(props) => (props.displayFlex ? "flex" : "block")};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  border: ${(props) => props.border};
  border-radius: ${(props) => props.borderRadius};
  cursor: ${(props) => (props.cursorPointer ? "pointer" : null)};
  transition: 0.3s;

  :hover {
    transform: scale(1.1);
  }
`;
