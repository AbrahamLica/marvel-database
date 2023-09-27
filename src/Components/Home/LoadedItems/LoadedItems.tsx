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
    if (state.marvel.selectedCategory == "characters") {
      openDetails(
        item.id,
        item.name,
        item.description,
        item.thumbnail.path,
        item.series.items,
        dispatch,
        usenavigate
      );
    } else if (state.marvel.selectedCategory == "comics") {
      openDetails(
        item.title,
        item.creators,
        item.dates,
        item.description,
        item.id,
        item.pageCount,
        item.variants,
        item.thumbnail.path
      );
    } else {
      openDetails(
        item.id,
        item.title,
        item.description,
        item.startYear,
        item.endYear,
        item.characters,
        item.creators,
        item.comics,
        item.stories,
        item.nextSeries,
        item.previousSeries,
        item.thumbnail.path,
        item.series
      );
    }
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
