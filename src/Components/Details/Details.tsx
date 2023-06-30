import React, { useEffect, useState } from "react";
import * as C from "./AppStyles";
import { useContext } from "react";
import { Context } from "../../Context/Context";
import { useNavigate } from "react-router-dom";
import iconBack from "../../Media/back.png";
import DetailsCharacters from "./DetailsCharacters/DetailsCharacters";
import DetailsComics from "./DetailsComics/DetailsComics";
import DetailsSeries from "./DetailsSeries/DetailsSeries";
import wallpaper from "../../Media/wallpaper.jpg";
import ProgressBar from "../ProgressBar/ProgressBar";

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
      </C.HeaderFixed>

      <ProgressBar></ProgressBar>

      <C.MainContainerDetails>
        {state.marvel.detailsCharacterOpen && (<DetailsCharacters></DetailsCharacters>)}
        {state.marvel.detailsComicsOpen && <DetailsComics></DetailsComics>}
        {state.marvel.detailsSeriesOpen && <DetailsSeries></DetailsSeries>}
      </C.MainContainerDetails>

    </C.MainContainerBackground>
  );
};

export default Details;
