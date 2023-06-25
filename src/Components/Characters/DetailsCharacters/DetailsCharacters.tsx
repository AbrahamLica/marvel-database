import React, { useEffect } from "react";
import * as C from "./AppStyles";
import { useContext } from "react";
import { Context } from "../../../Context/Context";
import { useNavigate } from "react-router-dom";
import iconBack from "../../../Media/back.png";

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
    <C.MainContainerDetails>
      <C.HeaderFixed>
        <C.ButtonBack onClick={back}>
          <C.IconBack src={iconBack} />
        </C.ButtonBack>
      </C.HeaderFixed>
      <C.ContainerDescriptions>
        <C.ImgDetails src={`${state.marvel.img}.jpg`} />
        <C.Description>
          {state.marvel.description}
          <C.Container margin="30px 0px">
            <C.Text>Series:</C.Text>
            {state.marvel.series.map((item: any, index: number) => (
              <p>{item.name}</p>
            ))}
          </C.Container>
        </C.Description>
      </C.ContainerDescriptions>
    </C.MainContainerDetails>
  );
};

export default Details;
