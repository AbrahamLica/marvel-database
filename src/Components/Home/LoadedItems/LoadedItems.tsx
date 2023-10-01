import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../../../Context/Context";
import { RequestType } from "../../../Types/Types";
import * as G from "../../../Helpers/GlobalStyles";
import * as C from "./styles";
import ProgressBar from "../../ProgressBar/ProgressBar";
import LoadingHamster from "../LoadingHamster/LoadingHamster";
import {
  executeRequest,
  goToSelectedCategory,
  OpenDetails,
} from "../../../Helpers/Functions";

const LoadedItems = () => {
  const { state, dispatch } = useContext(Context);
  const [request, setRequest] = useState<RequestType[]>([]);
  const usenavigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    executeRequest(dispatch, setRequest, state.others.fetch);
  }, [state.others.fetch]);

  return (
    <C.ContainerCards>
      <ProgressBar></ProgressBar>

      {state.others.loading ? (
        <LoadingHamster></LoadingHamster>
      ) : (
        <>
          {request.map((item, index) => (
            <C.ContainerCard key={index}>
              <C.ImgCard
                onClick={() => OpenDetails(item, state, dispatch, usenavigate)}
                src={`${item?.thumbnail?.path}.${item?.thumbnail?.extension}`}
                style={{
                  width:
                    state.others.selectedCategory == "characters"
                      ? "300px"
                      : state.others.selectedCategory == "comics"
                      ? "200px"
                      : "250px",
                }}
              />

              {state.others.selectedCategory == "series" ? (
                <C.ContainerNameYear>
                  <C.ItemName
                    onClick={() =>
                      OpenDetails(item, state, dispatch, usenavigate)
                    }
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
                  onClick={() =>
                    OpenDetails(item, state, dispatch, usenavigate)
                  }
                  style={{
                    width:
                      state.others.selectedCategory == "characters"
                        ? "300px"
                        : "200px",
                    height:
                      state.others.selectedCategory == "characters"
                        ? "50px"
                        : "120px",
                  }}
                >
                  {state.others.selectedCategory == "characters"
                    ? item.name
                    : item.title}
                </C.ItemName>
              )}

              <C.ButtonDetails
                onClick={() => OpenDetails(item, state, dispatch, usenavigate)}
              >
                Detalhes
              </C.ButtonDetails>
            </C.ContainerCard>
          ))}
        </>
      )}
    </C.ContainerCards>
  );
};

export default LoadedItems;
