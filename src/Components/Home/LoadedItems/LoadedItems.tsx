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
              />
              <C.ItemName
                characterWidth
                characterHeight
                onClick={(e) => handeClickOpenDetails(e)}
              >
                {item.name}
              </C.ItemName>
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
