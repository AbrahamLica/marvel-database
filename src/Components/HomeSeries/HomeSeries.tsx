import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { Context } from "../../Context/Context";
import { RequisicaoSeriesType } from "../../Types/Types";
import Header from "../Header/Header";
import back from "../../Media/back.svg";
import next from "../../Media/next.svg";
import "../HomeCharacters/styles.css";
import * as C from "../HomeCharacters/AppStyles";
import ProgressBar from "../ProgressBar/ProgressBar";

const HomeSeries = () => {
  const { state, dispatch } = useContext(Context);
  const [requisicao, setRequisicao] = useState<RequisicaoSeriesType[]>([]);
  const [numberPage, setNumberPage] = useState<number>(0);
  const usenavigate = useNavigate();
  const Hash = "4a8b729d09d1d2ad3fb626dff7e2165d";
  const publicKey = "8df0db429915d47e065eb03b37ca9039";

  useEffect(() => {
    window.scrollTo(0, 0);
    executarRequisicao();
    convertNumberPage();
  }, [state.marvel.currentPage]);

  async function executarRequisicao() {
    dispatch({
      type: "SET_LOADING",
      payload: {
        loading: true,
      },
    });
    let req = await fetch(
      `http://gateway.marvel.com/v1/public/series?ts=1&apikey=${publicKey}&hash=${Hash}&limit=100&offset=${state.marvel.currentPage}`
    );
    let json = await req.json();
    setRequisicao(json.data.results);
    setTimeout(() => {
      dispatch({
        type: "SET_LOADING",
        payload: {
          loading: false,
        },
      });
    }, 1000);
  }

  function openDetails(
    id: number,
    name: string,
    description: string,
    startYear: number,
    endYear: number,
    characters: string[],
    creators: any,
    comics: string[],
    stories: string[],
    nextSeries: any,
    previousSeries: any,
    img: string,
    series: string[]
  ) {
    dispatch({
      type: "OPEN_DETAILS_SERIES",
      payload: {
        id: id,
        name: name,
        description: description,
        startYear: startYear,
        endYear: endYear,
        characters: characters,
        creators: creators,
        comics: comics,
        stories: stories,
        nextSeries: nextSeries,
        previousSeries: previousSeries,
        anythingOpen: true,
        img: img,
        series: series,
        detailsSeriesOpen: true,
        openPageSelectedCategory: false,
      },
    });

    usenavigate("/details");
  }

  function backHome() {
    usenavigate("/");
  }

  function backPage() {
    dispatch({
      type: "BACK_PAGE",
      payload: {
        currentPage: state.marvel.currentPage - 100,
      },
    });
    executarRequisicao();
  }

  function nextPage() {
    dispatch({
      type: "NEXT_PAGE",
      payload: {
        currentPage: (state.marvel.currentPage += 100),
      },
    });
    executarRequisicao();
  }

  function convertNumberPage() {
    if (state.marvel.currentPage == 0) {
      setNumberPage(1);
    } else if (state.marvel.currentPage == 100) {
      setNumberPage(2);
    } else if (state.marvel.currentPage == 200) {
      setNumberPage(3);
    } else if (state.marvel.currentPage == 300) {
      setNumberPage(4);
    } else if (state.marvel.currentPage == 400) {
      setNumberPage(5);
    } else if (state.marvel.currentPage == 500) {
      setNumberPage(6);
    } else if (state.marvel.currentPage == 600) {
      setNumberPage(7);
    } else if (state.marvel.currentPage == 700) {
      setNumberPage(8);
    } else if (state.marvel.currentPage == 800) {
      setNumberPage(9);
    } else if (state.marvel.currentPage == 900) {
      setNumberPage(10);
    } else if (state.marvel.currentPage == 1000) {
      setNumberPage(11);
    } else if (state.marvel.currentPage == 11000) {
      setNumberPage(12);
    } else if (state.marvel.currentPage == 12000) {
      setNumberPage(13);
    }
  }

  return (
    <C.MainContainer>
      <Header></Header>
      <ProgressBar></ProgressBar>
      <C.MainContainerCards>
        {state.marvel.loading ? (
          <div
            aria-label="Orange and tan hamster running in a metal wheel"
            role="img"
            className="wheel-and-hamster"
          >
            <div className="wheel"></div>
            <div className="hamster">
              <div className="hamster__body">
                <div className="hamster__head">
                  <div className="hamster__ear"></div>
                  <div className="hamster__eye"></div>
                  <div className="hamster__nose"></div>
                </div>
                <div className="hamster__limb hamster__limb--fr"></div>
                <div className="hamster__limb hamster__limb--fl"></div>
                <div className="hamster__limb hamster__limb--br"></div>
                <div className="hamster__limb hamster__limb--bl"></div>
                <div className="hamster__tail"></div>
              </div>
            </div>
            <div className="spoke"></div>
          </div>
        ) : (
          <C.ContainerCards>
            {requisicao.map((item, index) => (
              <C.ContainerCard key={index}>
                <C.ImgCardSeries
                  onClick={() =>
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
                    )
                  }
                  src={`${item?.thumbnail?.path}.${item?.thumbnail?.extension}`}
                />
                <C.ContainerNameYear>
                  <C.ItemNameSeries
                    characterWidth
                    characterHeight
                    onClick={() =>
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
                      )
                    }
                  >
                    {item.title}
                  </C.ItemNameSeries>

                  {item.startYear == item.endYear ? (
                    <C.ItemYear>{item.startYear}</C.ItemYear>
                  ) : (
                    <C.ItemYear>{`${item.startYear} - ${item.endYear}`}</C.ItemYear>
                  )}
                </C.ContainerNameYear>

                <C.ButtonDetails
                  onClick={() =>
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
                    )
                  }
                >
                  Details
                </C.ButtonDetails>
              </C.ContainerCard>
            ))}
          </C.ContainerCards>
        )}

        {state.marvel.loading == true ? null : (
          <C.ContainerMainNextBack>
            <C.ContainerMainPageAtual>
              <C.ContainerPageAtual>
                <C.TextPaginaAtual>{numberPage}</C.TextPaginaAtual>
              </C.ContainerPageAtual>
            </C.ContainerMainPageAtual>

            <C.ContainerNextBack>
              <C.Container displayFlex>
                <C.Container cursorPointer>
                  <img src={back} onClick={backPage} alt="" width="40px" />
                </C.Container>

                <C.Container cursorPointer>
                  <img src={next} onClick={nextPage} alt="" width="40px" />
                </C.Container>
              </C.Container>
            </C.ContainerNextBack>
          </C.ContainerMainNextBack>
        )}
      </C.MainContainerCards>
    </C.MainContainer>
  );
};

export default HomeSeries;
