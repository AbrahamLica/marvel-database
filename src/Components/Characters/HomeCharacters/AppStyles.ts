import styled from "styled-components";

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
  
///////////////////////// HOME CHARACTERS ///////////////////////

export const MainContainer = styled.div<ContainerProps>`
  color: white;
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: white;
`;

export const MainContainerCards = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  background-color: #26547c;
  width: 95%;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
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