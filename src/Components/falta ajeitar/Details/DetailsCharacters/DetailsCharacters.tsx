import * as C from "../AppStyles";
import React, { useEffect } from "react";
import { useContext } from "react";
import { Context } from "../../../Context/Context";

const DetailsCharacters = () => {
  const { state, dispatch } = useContext(Context);

  return (
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
  );
};

export default DetailsCharacters;
