import styled from "styled-components";

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
  zIndex?: boolean
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
  width: 80vw;
  background-color: #100f0f;
`;

export const ContainerCards = styled.div<ContainerProps>`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const ContainerCard = styled.div<ContainerProps>`
  margin: 30px 30px;
`;

export const ImgCard = styled.img`
    width: 300px;
    height: 300px;
`;

export const ButtonDetails = styled.button`
    padding: 5px 10px;
    background-color: green;
    cursor: pointer;
    font-size: 25px;
    border: none;
`;



////////////////////////// DETAILS ///////////////////////

export const MainContainerDetails = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: blue;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ContainerDetails = styled.div`
    width: 90%;
    height: 100%;
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ImgDetails = styled.img`
    width: 400px;
    height: 400px;
`;

export const ContainerDescription = styled.div`
    width: 50%;
    margin-left: 60px;
`;

export const Description = styled.p`
    font-size: 30px;
    color: white;
`;