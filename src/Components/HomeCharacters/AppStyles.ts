import styled, { keyframes } from "styled-components";

export type ContainerProps = {
  color?: string;
  id?: any;
  width?: string;
  heigth?: string;
  displayFlex?: boolean;
  backgroundColor?: string;
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

export type ImgProps = {
  characterWidth?: boolean;
  comicsWidth?: boolean;
};

export type ItemNameProps = {
  characterWidth?: boolean;
  comicsWidth?: boolean;
  characterHeight?: boolean
  comicsHeight?: boolean
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

///////////////////////// BODY HOME CHARACTERS ///////////////////////

export const MainContainer = styled.div<ContainerProps>`
  display: flex;
  min-height: 100vh;
  padding-bottom: 20px;
  width: 100%;
  background-color: black;
  justify-content: center;
 
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

export const ImgCard = styled.img<ImgProps>`
  width: ${(props) =>
    (props.characterWidth && "300px") || (props.comicsWidth && "200px")};
  height: 300px;
  transition: 0.3s;
  cursor: pointer;

  :hover {
    transform: translateY(-10px);
  }
`;

export const ItemName = styled.div<ItemNameProps>`
  width: ${(props) =>
    (props.characterWidth && "300px") || (props.comicsWidth && "200px")};
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
  height: ${(props) =>
    (props.characterHeight && "50px") || (props.comicsHeight && "120px")};

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

export const ContainerNameYear = styled.div<ContainerProps>`
  
`;

export const ItemYear = styled.p<ContainerProps>`
  color: white;
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

///////////////////////// ANIMATION ///////////////////////


export const Loader = styled.div<ContainerProps>`
  display: block;
  --height-of-loader: 4px;
  --loader-color: #0071e2;
  width: 130px;
  height: var(--height-of-loader);
  border-radius: 30px;
  background-color: rgba(0, 0, 0, 0.2);
  position: relative;

  :before {
    content: "";
    position: absolute;
    background: var(--loader-color);
    top: 0;
    left: 0;
    width: 0%;
    height: 100%;
    border-radius: 30px;
    animation: moving 1s ease-in-out infinite;
  }
`;

export const moving = keyframes`
 50% {
    width: 100%;
  }

  100% {
    width: 0;
    right: 0;
    left: unset;
  }
`;

///////////////////////// FOOTER ///////////////////////

export const ContainerMainNextBack = styled.div<ContainerProps>`
  display: flex;
  width: 100%;
`;

export const ContainerMainPageAtual = styled.div<ContainerProps>`
  display: flex;
  width: 53%;
  justify-content: flex-end;
`;

export const ContainerPageAtual = styled.div<ContainerProps>`
  border-radius: 50%;
  border: 1px solid #e9190f;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  padding: 10px;
`;

export const TextPaginaAtual = styled.div<ContainerProps>`
  font-size: 25px;
  color: white;
  font-weight: bold;
  text-align: center;
`;

export const ContainerNextBack = styled.div<ContainerProps>`
  display: flex;
  justify-content: flex-end;
  width: 50%;
`;
