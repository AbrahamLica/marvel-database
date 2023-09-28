import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { Context } from "../../../Context/Context";
import { RequisicaoType } from "../../../Types/Types";
import * as G from "../../../Helpers/GlobalStyles";
import * as C from "./styles";
import ProgressBar from "../../ProgressBar/ProgressBar";
import LoadingHamster from "../LoadingHamster/LoadingHamster";
import { executarRequisicao, openDetails } from "../../../Helpers/Functions";

const LoadedItems = () => {
  const { state, dispatch } = useContext(Context);
  const [requisicao, setRequisicao] = useState<RequisicaoType[]>([]);
  const [ok, setOK] = useState(false);
  const usenavigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    executarRequisicao(dispatch, setRequisicao, state.marvel.fetch);
  }, [state.marvel.currentPage]);

  function handeClickOpenDetails(item: any) {
    let details = {};

    switch (state.marvel.selectedCategory) {
      case "characters":
        details = {
          id: item.id,
          name: item.name,
          description: item.description,
          // img: item.thumbnail.path,
          // series: item.series.items,
          dispatch,
          usenavigate,
        };
        break;

      case "comics":
        details = {
          id: item.id,
          title: item.title,
          creators: item.creators,
          dates: item.dates,
          description: item.description,
          pageCount: item.pageCount,
          variants: item.variants,
          img: item.thumbnail.path,
          dispatch,
          usenavigate,
        };
        break;

      case "series":
        details = {
          id: item.id,
          title: item.title,
          description: item.description,
          img: item.thumbnail.path,
          series: item.series.items,
          creators: item.creators,
          startYear: item.startYear,
          endYear: item.endYear,
          characters: item.characters,
          comics: item.comics,
          stories: item.stories,
          nextSeries: item.nextSeries,
          previousSeries: item.previousSeries,
        };
        break;
    }

    openDetails(details, dispatch, usenavigate);
  }

  return (
    <C.ContainerCards>
      <ProgressBar></ProgressBar>

      {state.marvel.loading ? (
        <LoadingHamster></LoadingHamster>
      ) : (
        <>
          {requisicao.map((item, index) => (
            <C.ContainerCard key={index}>
              <C.ImgCard
                onClick={(e) => handeClickOpenDetails(e)}
                src={`${item?.thumbnail?.path}.${item?.thumbnail?.extension}`}
                style={{
                  width:
                    state.marvel.selectedCategory == "characters"
                      ? "300px"
                      : state.marvel.selectedCategory == "comics"
                      ? "200px"
                      : "250px",
                }}
              />

              {state.marvel.selectedCategory == "series" ? (
                <C.ContainerNameYear>
                  <C.ItemName
                    onClick={(e) => handeClickOpenDetails(e)}
                    style={{
                      width: "200px",
                      height: "100px",
                    }}
                  >
                    {item.title}
                  </C.ItemName>

                  {item.startYear == item.endYear ? (
                    <C.ItemYear>{item.startYear}</C.ItemYear>
                  ) : (
                    <C.ItemYear>{`${item.startYear} - ${item.endYear}`}</C.ItemYear>
                  )}
                </C.ContainerNameYear>
              ) : (
                <C.ItemName
                  onClick={(e) => handeClickOpenDetails(e)}
                  style={{
                    width:
                      state.marvel.selectedCategory == "characters"
                        ? "300px"
                        : "200px",
                    height:
                      state.marvel.selectedCategory == "characters"
                        ? "50px"
                        : "120px",
                  }}
                >
                  {state.marvel.selectedCategory == "characters"
                    ? item.name
                    : item.title}
                </C.ItemName>
              )}

              <C.ButtonDetails onClick={(e) => handeClickOpenDetails(e)}>
                Details
              </C.ButtonDetails>
            </C.ContainerCard>
          ))}
        </>
      )}
    </C.ContainerCards>
  );
};

export default LoadedItems;
