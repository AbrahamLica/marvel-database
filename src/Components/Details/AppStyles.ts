import styled from "styled-components";
import background from "../../Media/wallpaper.jpg";

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

export type ImgDetailsProps = {
  ImgDetailsCharactersWidth?: boolean;
  ImgDetailsCharactersHeight?: boolean;

  ImgDetailsComicsWidth?: boolean;
  ImgDetailsComicsHeight?: boolean;

  ImgDetailsCreatorsWidth?: boolean;
  ImgDetailsCreatorsHeight?: boolean;

  ImgDetailsEventssWidth?: boolean;
  ImgDetailsEventssHeight?: boolean;

  ImgDetailsSeriesWidth?: boolean;
  ImgDetailsSeriesHeight?: boolean;

  ImgDetailsStoriesWidth?: boolean;
  ImgDetailsStoriesHeight?: boolean;
};

export type MainContainerDetailsProps = {
  background: any;
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

////////////////////////// DETAILS ///////////////////////

export const MainContainerBackground = styled.div<MainContainerDetailsProps>`
  width: 100%;
  min-height: 100vh;
  background: ${(props) => props.background};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export const MainContainerDetails = styled.div`
  min-height: 100vh;
  width: 100%;
  backdrop-filter: blur(5px);
`;

export const HeaderFixed = styled.div`
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  padding: 5px;
  position: fixed;
  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8));
`;

export const ButtonBack = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  margin-right: 10px;
  padding: 0.2em 1.2em;
  background-color: #fbca1f;
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
  padding-top: 47px;
`;

export const ImgDetails = styled.img<ImgDetailsProps>`
  width: ${(props) => props.ImgDetailsCharactersWidth && "400px"};
  height: ${(props) => props.ImgDetailsCharactersHeight && "400px"};

  width: ${(props) => props.ImgDetailsComicsWidth && "300px"};
  height: ${(props) => props.ImgDetailsComicsHeight && "400px"};
`;

export const Description = styled.div`
  font-size: 30px;
  width: 60%;
  margin-left: 30px;
  color: white;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.p<TextProps>`
  text-transform: capitalize;
  font-weight: bold;
  font-size: 1.6rem;
  margin-right: 6px;
`;

export const SubTitle = styled.p<TextProps>`
  font-size: 1.5rem;
`;
