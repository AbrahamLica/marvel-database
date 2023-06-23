import React from "react";
import * as C from "./AppStyles";
import { useContext, useEffect, useState } from "react";
import { Context } from "../../Context/Context";
import back from "../../../Media/back.svg";
import next from "../../../Media/next.svg";

const Footer = () => {
  const { state, dispatch } = useContext(Context);

  return (
    <C.ContainerMainNextBack>
      <C.ContainerMainPageAtual>
        <C.ContainerPageAtual>
          <C.TextPaginaAtual>{state.marvel.currentPage}</C.TextPaginaAtual>
        </C.ContainerPageAtual>
      </C.ContainerMainPageAtual>

      <C.ContainerNextBack>
        <C.Container displayFlex>
          <C.Container onClick={backPage} cursorPointer>
            <img src={back} alt="" width="40px" />
          </C.Container>

          <C.Container onClick={nextPage} cursorPointer>
            <img src={next} alt="" width="40px" />
          </C.Container>
        </C.Container>
      </C.ContainerNextBack>
    </C.ContainerMainNextBack>
  );
};

export default Footer;
