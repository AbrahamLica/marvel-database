import React, { useEffect, useState } from "react";
import * as C from "./styles";
import * as G from "../../../Helpers/GlobalStyles";
import { useContext } from "react";
import { Context } from "../../../Context/Context";
import back from "../../../Media/back.svg";
import next from "../../../Media/next.svg";
import {
  backPage,
  convertNumberPage,
  goToSelectedCategory,
} from "../../../Helpers/Functions";
import { nextPage } from "../../../Helpers/Functions";

const Footer = () => {
  const { state, dispatch } = useContext(Context);
  const [numberPage, setNumberPage] = useState<number>(0);

  useEffect(() => {
    convertNumberPage(state, setNumberPage);
  }, [state.others.currentPage]);

  function handleBackPage() {
    backPage(dispatch, state);
    // goToSelectedCategory(state.others.selectedCategory, dispatch, state);
  }

  function handleNextPage() {
    nextPage(dispatch, state);
    // goToSelectedCategory(state.others.selectedCategory, dispatch, state);
  }

  return (
    <>
      {state.others.loading == true ? null : (
        <C.ContainerMainNextBack>
          <C.ContainerMainPageAtual>
            <C.ContainerPageAtual>
              <C.TextPaginaAtual>{numberPage}</C.TextPaginaAtual>
            </C.ContainerPageAtual>
          </C.ContainerMainPageAtual>

          <C.ContainerNextBack>
            <G.Container displayFlex>
              <G.Container cursorPointer>
                <img src={back} onClick={handleBackPage} alt="" width="40px" />
              </G.Container>

              <G.Container cursorPointer>
                <img src={next} onClick={handleNextPage} alt="" width="40px" />
              </G.Container>
            </G.Container>
          </C.ContainerNextBack>
        </C.ContainerMainNextBack>
      )}
    </>
  );
};

export default Footer;
