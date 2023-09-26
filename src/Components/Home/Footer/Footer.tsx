import React, { useEffect, useState } from "react";
import * as C from "./styles";
import * as G from "../../../Helpers/GlobalStyles";
import { useContext } from "react";
import { Context } from "../../../Context/Context";
import back from "../../../Media/back.svg";
import next from "../../../Media/next.svg";
import { backPage } from "../../../Helpers/Functions";
import { nextPage } from "../../../Helpers/Functions";

const Footer = () => {
  const { state, dispatch } = useContext(Context);
  const [numberPage, setNumberPage] = useState<number>(0);

  useEffect(() => {});

  return (
    <>
      {state.marvel.loading == true ? null : (
        <C.ContainerMainNextBack>
          <C.ContainerMainPageAtual>
            <C.ContainerPageAtual>
              <C.TextPaginaAtual>{numberPage}</C.TextPaginaAtual>
            </C.ContainerPageAtual>
          </C.ContainerMainPageAtual>

          <C.ContainerNextBack>
            <G.Container displayFlex>
              <G.Container cursorPointer>
                <img
                  src={back}
                  onClick={() => backPage(dispatch, state)}
                  alt=""
                  width="40px"
                />
              </G.Container>

              <G.Container cursorPointer>
                <img
                  src={next}
                  onClick={() => nextPage(dispatch, state)}
                  alt=""
                  width="40px"
                />
              </G.Container>
            </G.Container>
          </C.ContainerNextBack>
        </C.ContainerMainNextBack>
      )}
    </>
  );
};

export default Footer;
