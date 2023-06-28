import * as C from "../AppStyles";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { Context } from "../../../Context/Context";

const DetailsSeries = () => {
  const { state, dispatch } = useContext(Context);
  const [date, setDate] = useState<any>();

  function teste() {
    console.log(state.marvel);
  }

  return (
    <C.ContainerDescriptions>
      <C.ImgDetails
        ImgDetailsComicsHeight
        ImgDetailsComicsWidth
        src={`${state.marvel.img}.jpg`}
      />

      <C.Description>
        <C.Title>{state.marvel.name}</C.Title>

        {state.marvel.description ? (
          <C.Container>
            <C.Title>Description: </C.Title>
            <C.SubTitle>{state.marvel.description}</C.SubTitle>
          </C.Container>
        ) : null}

        {date ? (
          <C.Container displayFlex alignItems="center">
            <C.Title>Published:</C.Title>
            <C.SubTitle>{date}</C.SubTitle>
          </C.Container>
        ) : null}

        <C.Container displayFlex flexWrap justifyContent="space-between">
          {state.marvel.creators.items.map((item: any, index: number) => (
            <C.Container
              displayFlex
              width="50%"
              alignItems="center"
              key={index}
            >
              <C.Title>{item.role}:</C.Title>
              <C.SubTitle>{item.name}</C.SubTitle>
            </C.Container>
          ))}
        </C.Container>

        <button onClick={teste}>teste</button>
      </C.Description>
    </C.ContainerDescriptions>
  );
};

export default DetailsSeries;
