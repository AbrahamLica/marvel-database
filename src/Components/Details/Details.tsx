import * as G from "../../Helpers/GlobalStyles";
import * as C from "./styles";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { Context } from "../../Context/Context";
import iconBack from "../../Media/back.png";
import ProgressBar from "../../Components/ProgressBar/ProgressBar";
import { useNavigate } from "react-router-dom";
import {
  backToSelectedCategory,
  executeRequestComics,
  goToSelectedCategory,
} from "../../Helpers/Functions";
import { FormatDate } from "../../Helpers/Functions";

const Details = () => {
  const { state, dispatch } = useContext(Context);
  const [date, setDate] = useState<any>();
  const [requisicao, setRequisicao] = useState<any[]>([]);
  const usenavigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    FormatDate(state, setDate);
    if (state.others.selectedCategory == "series") {
      executeRequestComics(state, setRequisicao);
    }
  }, [date]);

  return (
    <C.MainContainerBackground
      background={`linear-gradient(rgba(0, 0, 0, 0.8),
       rgba(0, 0, 0, 0.8)),
       url(${state.marvel.img}.jpg)`}
    >
      <C.HeaderFixed>
        <C.ButtonBack
          onClick={() => backToSelectedCategory(dispatch, usenavigate)}
        >
          <C.IconBack src={iconBack} />
        </C.ButtonBack>
      </C.HeaderFixed>

      <ProgressBar></ProgressBar>

      <C.MainContainerDetails>
        <C.MainContainerDetailsSeries>
          <C.ContainerDescriptions>
            <C.ImgDetailsCharacters src={`${state.marvel.img}.jpg`} />

            <C.Description>
              {state.others.selectedCategory == "characters" ? (
                <C.Title>{state.marvel.name}</C.Title>
              ) : (
                <C.Title>{state.marvel.title}</C.Title>
              )}

              {state.marvel.description ? (
                <>
                  <C.Title>Descrição: </C.Title>
                  <C.SubTitle>{state.marvel.description}</C.SubTitle>
                </>
              ) : null}

              {date ? (
                <G.Container alignItems="center">
                  <C.Title>Published:</C.Title>
                  <C.SubTitle>{date}</C.SubTitle>
                </G.Container>
              ) : null}

              {state.marvel.series && (
                <G.Container margin="10px 0px">
                  <C.Title>Series:</C.Title>
                  {state.marvel.series.items.map((item: any, index: number) => (
                    <C.SubTitle key={index}>{item.name}</C.SubTitle>
                  ))}
                </G.Container>
              )}

              {state.others.selectedCategory == "characters" ? null : (
                <C.ContainerCreators>
                  {state.marvel.creators.items.map(
                    (item: any, index: number) => (
                      <C.ContainerRoleandName key={index}>
                        <C.SubTitle>{item.role}:</C.SubTitle>
                        <C.SubTitle>{item.name}</C.SubTitle>
                      </C.ContainerRoleandName>
                    )
                  )}
                </C.ContainerCreators>
              )}
            </C.Description>
          </C.ContainerDescriptions>

          <G.Container width="90%" displayFlex justifyContent="center" flexWrap>
            {requisicao &&
              requisicao.length > 0 &&
              requisicao.map((item: any, index: number) => (
                <C.ContainerItemSeries key={index}>
                  <C.ImgDetailsSeries
                    src={`${item.data.results[0].thumbnail.path}.jpg`}
                  ></C.ImgDetailsSeries>
                  <C.TitleSeries>{item.data.results[0].title}</C.TitleSeries>
                </C.ContainerItemSeries>
              ))}
          </G.Container>
        </C.MainContainerDetailsSeries>
      </C.MainContainerDetails>
    </C.MainContainerBackground>
  );
};

export default Details;
