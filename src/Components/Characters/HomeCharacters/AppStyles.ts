import styled, { keyframes } from "styled-components";

export type ContainerProps = {
  color?: string;
  id?: any;
  width?: string;
  heigth?: string;
  backgroundColor?: string;
  displayFlex?: boolean;
  flex?: string;
  flexWrap?: boolean;
  alignItems?: string;
  margin?: string;
  padding?: string;
  column?: boolean;
  border?: string;
  borderRadius?: string;
  cursorPointer?: boolean;
  backgroundImage?: string;
  backgroundPosition?: string;
  backgroundSize?: string;
  justifyContent?: string;
};

export type InputProps = {
  color?: string;
  bold?: boolean;
  fontSize?: string;
  width?: string;
  backgroundColor?: string;
  margin?: string;
};

export type TextProps = {
  color?: string;
  bold?: boolean;
  fontSize?: string;
  textAlign?: string;
  margin?: string;
  backgroundColor?: string;
  padding?: string;
  borderRadius?: string;
  cursorPointer?: boolean;
  zIndex?: boolean;
};

///////////////////////// GENERIC ///////////////////////


export const Container = styled.div<ContainerProps>`
  color: ${(props) => props.color};
  width: ${(props) => props.width};
  height: ${(props) => props.heigth};
  background-color: ${(props) => props.backgroundColor};
  display: ${(props) => (props.displayFlex ? "flex" : "block")};
  flex: ${(props) => props.flex};
  flex-direction: ${(props) => (props.column ? "column" : "row")};
  flex-wrap: ${(props) => props.flexWrap && "wrap"};
  align-items: ${(props) => props.alignItems};
  justify-content: ${(props) => props.justifyContent};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  border: ${(props) => props.border};
  border-radius: ${(props) => props.borderRadius};
  background-image: url(${(props) => props.backgroundImage});
  background-position: ${(props) => props.backgroundPosition};
  background-repeat: no-repeat;
  background-size: ${(props) => props.backgroundSize};
  cursor: ${(props) => (props.cursorPointer ? "pointer" : null)};
  overflow: hidden;
`;


///////////////////////// HOME CHARACTERS ///////////////////////

export const MainContainer = styled.div<ContainerProps>`
  display: flex;
  min-height: 100vh;
  width: 100%;
  background-color: black;
  justify-content: center;
`;

export const Header = styled.div<ContainerProps>`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 10vh;
  background-color: #202020;
  position: fixed;
  z-index: 1;
  padding: 10px;
`;

export const Logo = styled.img<ContainerProps>`
  height: 100%;
  width: 10%;
  cursor: pointer;
`;

export const MainContainerCards = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  background-color: black;
  width: 95%;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 140px;
`;

export const ContainerCards = styled.div<ContainerProps>`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export const ImgCard = styled.img`
  width: 300px;
  height: 300px;
  transition: 0.3s;
  cursor: pointer;

  :hover {
    transform: translateY(-10px);
  }
`;

export const CharacterName = styled.button`
  max-width: 300px;
  font-size: 17px;
  margin-top: 15px;
  margin-bottom: 30px;
  color: #e1e1e1;
  font-family: inherit;
  font-weight: 800;
  cursor: pointer;
  position: relative;
  border: none;
  background: none;
  text-transform: uppercase;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-duration: 400ms;
  transition-property: color;

  :focus,
  :hover {
    color: #fff;
  }

  :focus:after,
  :hover:after {
    width: 100%;
    left: 0%;
  }

  :after {
    content: "";
    pointer-events: none;
    bottom: -2px;
    left: 50%;
    position: absolute;
    width: 0%;
    height: 2px;
    background-color: #fff;
    transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
    transition-duration: 400ms;
    transition-property: width, left;
  }
`;

export const ButtonDetails = styled.button`
  width: 150px;
  font-size: 1.3rem;
  padding: 0.6em 1.6em;
  background-color: #e9190f;
  border: 3px solid black;
  border-radius: 1em;
  color: #fff;
  font-weight: bolder;
  transition: cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.2s;
  box-shadow: -5px 5px 0px 0px black;
  cursor: pointer;

  :hover {
    transform: translate(10px, -6px);
  }
`;

export const ContainerCard = styled.div<ContainerProps>`
  margin: 30px 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ContainerButtons = styled.div<ContainerProps>`
  display: flex;
`;

// #26547C
// #E9190F
// #FCFCFC

///////////////////////// ANIMATION ///////////////////////

export const swing = keyframes`
0% {
    transform: rotate(0deg);
    animation-timing-function: ease-out;
  }

  25% {
    transform: rotate(70deg);
    animation-timing-function: ease-in;
  }

  50% {
    transform: rotate(0deg);
    animation-timing-function: linear;
  }
`;

export const swing2 = keyframes`
  0% {
    transform: rotate(0deg);
    animation-timing-function: linear;
  }

  50% {
    transform: rotate(0deg);
    animation-timing-function: ease-out;
  }

  75% {
    transform: rotate(-70deg);
    animation-timing-function: ease-in;
  }
`;

export const newtonsCradle = styled.div<ContainerProps>`
  --uib-size: 250px;
  --uib-speed: 1.2s;
  --uib-color: #E9190F;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: var(--uib-size);
  height: var(--uib-size);
`;

export const newtonsCradleDot = styled.div<ContainerProps>`
  position: relative;
  display: flex;
  align-items: center;
  height: 100%;
  width: 25%;
  transform-origin: center top;

  :after {
    content: "";
    display: block;
    width: 100%;
    height: 25%;
    border-radius: 50%;
    background-color: var(--uib-color);
  }

  :first-child {
    animation: ${swing} var(--uib-speed) linear infinite;
  }

  :last-child {
    animation: ${swing2} var(--uib-speed) linear infinite;
  }
`;




