import React, { Fragment, useEffect, useState } from "react";
import * as C from "../HomeCharacters/AppStyles";
import { RequisicaoComicsType } from "../../Types/Types";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../Context/Context";
import Header from "../Header/Header";
import back from "../../Media/back.svg";
import next from "../../Media/next.svg";
import "../HomeCharacters/styles.css";
import ProgressBar from "../ProgressBar/ProgressBar";

const HomeComics = () => {
  const { state, dispatch } = useContext(Context);
  const [requisicao, setRequisicao] = useState<RequisicaoComicsType[]>([]);
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
      `http://gateway.marvel.com/v1/public/comics?ts=1&apikey=${publicKey}&hash=${Hash}&limit=100&offset=${state.marvel.currentPage}`
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
    title: string,
    creators: string[],
    dates: string[],
    description: string,
    id: number,
    pageCount: string,
    variants: string[],
    img: string
  ) {
    dispatch({
      type: "OPEN_DETAILS_COMICS",
      payload: {
        id: id,
        name: title,
        description: description,
        anythingOpen: true,
        img: img,
        creators: creators,
        dates: dates,
        pageCount: pageCount,
        variants: variants,
        detailsComicsOpen: true,
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
                <C.ImgCardComics
                  onClick={() =>
                    openDetails(
                      item.title,
                      item.creators,
                      item.dates,
                      item.description,
                      item.id,
                      item.pageCount,
                      item.variants,
                      item.thumbnail.path
                    )
                  }
                  src={`${item?.thumbnail?.path}.${item?.thumbnail?.extension}`}
                />
                <C.ItemNameComics
                  comicsWidth
                  comicsHeight
                  onClick={() =>
                    openDetails(
                      item.title,
                      item.creators,
                      item.dates,
                      item.description,
                      item.id,
                      item.pageCount,
                      item.variants,
                      item.thumbnail.path
                    )
                  }
                >
                  {item.title}
                </C.ItemNameComics>
                <C.ButtonDetails
                  onClick={() =>
                    openDetails(
                      item.title,
                      item.creators,
                      item.dates,
                      item.description,
                      item.id,
                      item.pageCount,
                      item.variants,
                      item.thumbnail.path
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

export default HomeComics;
