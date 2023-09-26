import styled, { keyframes } from "styled-components";
import { ContainerProps } from "../../../Types/GlobalStylesTypes";
import { ImgProps } from "../../../Types/GlobalStylesTypes";
import { ItemNameProps } from "../../../Types/GlobalStylesTypes";

// characters

export const ContainerCards = styled.div<ContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  background-color: black;
  width: 90%;
  margin-top: 120px;
`;

export const ContainerCard = styled.div<ContainerProps>`
  margin: 30px 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 320px) {
    margin: 30px 0px;
  }
`;

export const ImgCard = styled.img<ImgProps>`
  width: 300px;
  height: 300px;
  transition: 0.3s;
  cursor: pointer;

  :hover {
    transform: translateY(-10px);
  }
`;

export const ItemName = styled.div<ItemNameProps>`
  width: 300px;
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
  height: 50px;

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

////////////////// COMICS ///////////////////

export const ImgCardComics = styled.img<ImgProps>`
  width: 200px;
  height: 300px;
  transition: 0.3s;
  cursor: pointer;

  :hover {
    transform: translateY(-10px);
  }
`;

export const ItemNameComics = styled.div<ItemNameProps>`
  width: 200px;
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
  height: 120px;

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

////////////////// SERIES ///////////////////

export const ItemNameSeries = styled.div<ItemNameProps>`
  width: 200px;
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
  height: 100px;

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

export const ImgCardSeries = styled.img<ImgProps>`
  width: 250px;
  height: 300px;
  transition: 0.3s;
  cursor: pointer;

  :hover {
    transform: translateY(-10px);
  }
`;

export const ContainerNameYear = styled.div<ContainerProps>``;

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

export const Logo = styled.img<ContainerProps>`
  height: 100%;
  width: 10%;
  cursor: pointer;
`;
