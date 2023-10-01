import styled from "styled-components";
import background from "../../Media/wallpaper.jpg";
import { ContainerProps } from "../../Types/GlobalStylesTypes";
import { TextProps } from "../../Types/GlobalStylesTypes";
import { MainContainerDetailsProps } from "../../Types/GlobalStylesTypes";
import { ImgDetailsProps } from "../../Types/GlobalStylesTypes";

export const HeaderFixed = styled.div`
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  padding: 10px;
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

export const MainContainerDetailsSeries = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const ContainerDescriptions = styled.div`
  width: 80%;
  display: flex;
  padding-top: 47px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Description = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-left: 30px;

  @media (max-width: 768px) {
    align-items: center;
    margin-left: 0px;
  }
`;

export const ContainerCreators = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ContainerRoleandName = styled.div`
  display: flex;
  width: 50%;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
`;

export const ImgDetailsCharacters = styled.img<ImgDetailsProps>`
  width: 400px;
  height: 400px;
  margin-top: 30px;

  @media (max-width: 375px) {
    width: 300px;
    height: 300px;
  }
`;

export const ImgDetailsComics = styled.img<ImgDetailsProps>`
  width: 300px;
  height: 400px;
`;

export const ImgDetailsSeries = styled.img<ImgDetailsProps>`
  width: 300px;
  height: 400px;
`;

export const Title = styled.p<TextProps>`
  font-weight: bold;
  font-size: 1.6rem;

  color: white;
`;

export const SubTitle = styled.p<TextProps>`
  text-transform: capitalize;
  font-size: 1.2rem;
  color: white;
  margin-right: 6px;
`;

export const TitleSeries = styled.p<TextProps>`
  text-transform: capitalize;
  font-size: 1.4rem;
  color: white;
`;

export const ContainerSeries = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
`;

export const ContainerItemSeries = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  margin: 25px;
  width: 300px;
`;
