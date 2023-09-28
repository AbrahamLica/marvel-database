import * as G from "../../Helpers/GlobalStyles";
import * as C from "./styles";
import { useEffect } from "react";
import { useContext } from "react";
import { Context } from "../../Context/Context";
import iconBack from "../../Media/back.png";
import ProgressBar from "../../Components/ProgressBar/ProgressBar";
import { useNavigate } from "react-router-dom";

const Details = () => {
  const { state, dispatch } = useContext(Context);
  const usenavigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  function back() {
    dispatch({
      type: "CLEAR_ALL_INFORMATIONS",
      payload: {
        id: 0,
        name: "",
        description: "",
        detailsCharacterOpen: false,
        detailsComicsOpen: false,
        detailsCreatorsOpen: false,
        detailsEventsOpen: false,
        detailsSeriesOpen: false,
        detailsStoriesOpen: false,
        openPageSelectedCategory: true,
        img: "",
        homePage: true,
        selectedCategory: "",
        loading: false,
        series: [],
        url: "",
        creators: [],
        dates: [],
        pageCount: "",
        variants: [],
      },
    });
    usenavigate(-1);
  }

  function teste() {
    console.log(state.marvel)
  }

  return (
    <C.MainContainerBackground
      background={`linear-gradient(rgba(0, 0, 0, 0.8),
       rgba(0, 0, 0, 0.8)),
       url(${state.marvel.img}.jpg)`}
    >
      <C.HeaderFixed>
        <C.ButtonBack onClick={back}>
          <C.IconBack src={iconBack} />
        </C.ButtonBack>

        <button onClick={teste}>teste</button>
      </C.HeaderFixed>

      <ProgressBar></ProgressBar>

      <C.MainContainerDetails>
        <C.MainContainerDetailsSeries>
          <C.ContainerDescriptions>
            <C.ImgDetailsCharacters src={`${state.marvel.img}.jpg`} />

            <C.Description>
              <C.Title>{state.marvel.name}</C.Title>

              {state.marvel.description.length ? (
                <C.SubTitle>{state.marvel.description}</C.SubTitle>
              ) : null}

              <C.Container margin="10px 0px">
                <C.Title>Series:</C.Title>
                {state.marvel.series.map((item: any, index: number) => (
                  <C.SubTitle key={index}>{item.name}</C.SubTitle>
                ))}
              </C.Container>
            </C.Description>
          </C.ContainerDescriptions>
        </C.MainContainerDetailsSeries>
      </C.MainContainerDetails>
    </C.MainContainerBackground>
  );
};

export default Details;
