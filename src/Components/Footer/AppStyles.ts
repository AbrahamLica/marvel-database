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

export const ContainerMainNextBack = styled.div<ContainerProps>`
  display: flex;
  width: 100%;
  padding: 10px;

  @media (max-width: 560px) {
    flex-direction: column;
  }
`;

export const ContainerMainPageAtual = styled.div<ContainerProps>`
  display: flex;
  width: 50%;
  justify-content: flex-end;

  @media (max-width: 560px) {
    justify-content: center;
    width: 100%;
  }
`;

export const ContainerPageAtual = styled.div<ContainerProps>`
  border-radius: 50%;
  border: 1px solid #ba1200;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  padding: 5px;
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

  @media (max-width: 560px) {
    justify-content: center;
    width: 100%;
    margin-top: 20px;
  }
`;
