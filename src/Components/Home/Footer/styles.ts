import styled from "styled-components";
import { ContainerProps } from "../../../Types/GlobalStylesTypes";

export const ContainerMainNextBack = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 40px;
`;

export const ContainerMainPageAtual = styled.div<ContainerProps>`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
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
  width: 100%;
`;
