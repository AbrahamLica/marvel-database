import React, { useEffect } from "react";
import * as C from "./AppStyles";
import { useContext } from "react";
import { Context } from "../../Context/Context";
import { useNavigate } from "react-router-dom";
import iconBack from "../../Media/back.png";

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
    console.log(state.marvel);
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
          <C.Text>{state.marvel.name}</C.Text>
          {state.marvel.description.length ? (
            <C.Text>{state.marvel.description}</C.Text>
          ) : null}

          <C.Text>{`Page Count: ${state.marvel.pageCount}`}</C.Text>

          

          <C.Container margin="30px 0px">
            {state.marvel.dates.map((item: any, index: number) => (
              <C.Container>
                <C.Text>{`Published: ${item.date}`}</C.Text>
              </C.Container>
            ))}
          </C.Container>

          <C.Container margin="30px 0px">
            {state.marvel.creators.items.map((item: any, index: number) => (
              <C.Container>
                <C.Text>{`${item.role}: ${item.name}`}</C.Text>
              </C.Container>
            ))}
          </C.Container>

          <button onClick={teste}>teste</button>

          {/* <C.Container margin="30px 0px">
            <C.Text>Series:</C.Text>
            {state.marvel.series.map((item: any, index: number) => (
              <p>{item.name}</p>
            ))}
          </C.Container> */}
        </C.Description>
      </C.ContainerDescriptions>
    </C.MainContainerDetails>
  );
};

export default Details;
