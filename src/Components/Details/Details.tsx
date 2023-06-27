import React, { useEffect } from "react";
import * as C from "./AppStyles";
import { useContext } from "react";
import { Context } from "../../Context/Context";
import { useNavigate } from "react-router-dom";
import iconBack from "../../Media/back.png";
import DetailsCharacters from "./DetailsCharacters/DetailsCharacters";
import DetailsComics from "./DetailsComics/DetailsComics";

const Details = () => {
  const { state, dispatch } = useContext(Context);
  const usenavigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  function back() {
    usenavigate(-1);
  }

  function teste() {
    
  }

  

  return (
    <C.MainContainerDetails>
      <C.HeaderFixed>
        <C.ButtonBack onClick={back}>
          <C.IconBack src={iconBack} />
        </C.ButtonBack>
      </C.HeaderFixed>

      {state.marvel.detailsCharacterOpen && (
        <DetailsCharacters></DetailsCharacters>
      )}

      {state.marvel.detailsComicsOpen && (
        <DetailsComics></DetailsComics>
      )}

      <button onClick={teste}>teste</button>
    </C.MainContainerDetails>
  );
};

export default Details;
