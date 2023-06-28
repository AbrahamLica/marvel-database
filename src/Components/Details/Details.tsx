import React, { useEffect } from "react";
import * as C from "./AppStyles";
import { useContext } from "react";
import { Context } from "../../Context/Context";
import { useNavigate } from "react-router-dom";
import iconBack from "../../Media/back.png";
import DetailsCharacters from "./DetailsCharacters/DetailsCharacters";
import DetailsComics from "./DetailsComics/DetailsComics";
import DetailsSeries from "./DetailsSeries/DetailsSeries";
import wallpaper from "../../Media/wallpaper.jpg";

const Details = () => {
  const { state, dispatch } = useContext(Context);
  const usenavigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  function back() {
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

      <C.MainContainerDetails>
        {state.marvel.detailsCharacterOpen && <DetailsCharacters></DetailsCharacters>}
        {state.marvel.detailsComicsOpen && <DetailsComics></DetailsComics>}
        {state.marvel.detailsSeriesOpen && <DetailsSeries></DetailsSeries>}
      </C.MainContainerDetails>
    </C.MainContainerBackground>
  );
};

export default Details;
