import styled from "styled-components";
import background from "./wallpaper.jpg";
import back from "./back.png"

/////////////////// PROPS ///////////////////////

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

/////////////////// GERAL ///////////////////////

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

export const Text = styled.p<TextProps>`
  color: ${(props) => props.color};
  font-weight: ${(props) => (props.bold ? "bold" : "light")};
  font-size: ${(props) => props.fontSize};
  text-align: ${(props) => props.textAlign};
  margin: ${(props) => props.margin};
  background-color: ${(props) => props.backgroundColor};
  border-radius: ${(props) => props.borderRadius};
  padding: ${(props) => props.padding};
  cursor: ${(props) => (props.cursorPointer ? "pointer" : null)};
  z-index: ${(props) => (props.zIndex ? "1" : "")};
`;

export const Link = styled.a<TextProps>`
  color: ${(props) => props.color};
  font-weight: ${(props) => (props.bold ? "bold" : "light")};
  font-size: ${(props) => props.fontSize};
  text-align: ${(props) => props.textAlign};
  cursor: pointer;
  text-decoration: none;
`;

////////////////////////// HOME ///////////////////////

export const MainContainer = styled.div<ContainerProps>`
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  background-color: white;
  `;

export const ContainerCards = styled.div<ContainerProps>`
  display: flex;
  width: 90%;
  justify-content: center;
  flex-wrap: wrap;
  background-color: #26547c;
`;

export const ContainerCard = styled.div<ContainerProps>`
  margin: 30px 30px;
`;

export const ImgCard = styled.img`
  width: 300px;
  height: 300px;
`;

export const ButtonDetails = styled.button`
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

// #26547C
// #E9190F
// #FCFCFC

////////////////////////// DETAILS ///////////////////////

export const MainContainerDetails = styled.div`
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    url(${background});
  background-repeat: no-repeat;
  background-size: cover;
`;

export const HeaderFixed = styled.div`
  width: 100%;
  background-color: black;
  color: white;
  position: fixed;
  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8))
`;

export const ButtonBack = styled.div`
  font-size: 1.1rem;
  padding: 0.2em 1.2em;
  background-color: #e9190f;
  border: 3px solid black;
  border-radius: 1em;
  color: #fff;
  font-weight: bolder;
  transition: cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.2s;
  cursor: pointer;
  width: 50px;

  :hover {
    transform: translate(2px, 3px);
  }
`;

export const IconBack = styled.img`
  width: 30px;
`;


export const ContainerDescriptions = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 30px;
`;

export const ImgDetails = styled.img`
  width: 400px;
  height: 400px;
`;

export const Description = styled.p`
  font-size: 30px;
  width: 50%;
  margin-left: 30px;
  color: white;
  display: flex;
  flex-direction: column;
`;
