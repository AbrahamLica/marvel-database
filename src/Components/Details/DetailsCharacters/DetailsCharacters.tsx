import * as C from "../AppStyles";
import React, { useEffect } from "react";
import { useContext } from "react";
import { Context } from "../../../Context/Context";

const DetailsCharacters = () => {
  const { state, dispatch } = useContext(Context);

  return (
    <C.ContainerDescriptions>
      <C.ImgDetails src={`${state.marvel.img}.jpg`} />

      <C.Description>
        <C.Text>{state.marvel.name}</C.Text>

        {state.marvel.description.length ? (
          <C.Text>{state.marvel.description}</C.Text>
        ) : null}

        <C.Container margin="30px 0px">
          <C.Text>Series:</C.Text>
          {state.marvel.series.map((item: any, index: number) => (
            <p>{item.name}</p>
          ))}
        </C.Container>
      </C.Description>
    </C.ContainerDescriptions>
  );
};

export default DetailsCharacters;
