import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { Context } from "../../../Context/Context";
import { RequisicaoSeriesType } from "../../../Types/Types";
import * as G from "../../../Helpers/GlobalStyles";
import * as C from "./styles";
import ProgressBar from "../../ProgressBar/ProgressBar";
import LoadingHamster from "../LoadingHamster/LoadingHamster";
import { executarRequisicao, openDetails } from "../../../Helpers/Functions";

const LoadedItems = () => {
  const { state, dispatch } = useContext(Context);
  const [requisicao, setRequisicao] = useState<RequisicaoSeriesType[]>([]);
  const usenavigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    executarRequisicao(dispatch, setRequisicao, state, state.marvel.fetch);
  }, [state.marvel.currentPage]);

  function handeClickOpenDetails(item: any) {
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
      item.series,
      dispatch,
      usenavigate
    );
  }

  console.log(requisicao)

  return (
    <>
      <ProgressBar></ProgressBar>
      <C.ContainerCards>
        {state.marvel.loading ? (
          <LoadingHamster></LoadingHamster>
        ) : (
          <G.Container
            displayFlex
            flexWrap
            alignItems="center"
            justifyContent="center"
          >
            {requisicao.map((item, index) => (
              <C.ContainerCard key={index}>
                <C.ImgCardSeries
                  onClick={(e) => handeClickOpenDetails(e)}
                  src={`${item?.thumbnail?.path}.${item?.thumbnail?.extension}`}
                />
                <C.ContainerNameYear>
                  <C.ItemNameSeries
                    characterWidth
                    characterHeight
                    onClick={(e) => handeClickOpenDetails(e)}
                  >
                    {item.name}
                  </C.ItemNameSeries>

                  {item.startYear == item.endYear ? (
                    <C.ItemYear>{item.startYear}</C.ItemYear>
                  ) : (
                    <C.ItemYear>{`${item.startYear} - ${item.endYear}`}</C.ItemYear>
                  )}
                </C.ContainerNameYear>

                <C.ButtonDetails onClick={(e) => handeClickOpenDetails(e)}>
                  Details
                </C.ButtonDetails>

                
              </C.ContainerCard>
            ))}
          </G.Container>
        )}
       
      </C.ContainerCards>
    </>
  );
};

export default LoadedItems;
