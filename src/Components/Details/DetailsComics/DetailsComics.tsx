import * as C from "../AppStyles";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { Context } from "../../../Context/Context";

const DetailsComics = () => {
  const { state, dispatch } = useContext(Context);
  const [date, setDate] = useState<any>();

  useEffect(() => {
    FormatDate();
  }, [date]);

  function FormatDate() {
    let datee = state.marvel.dates[0].date;
    let slicedDate = datee.slice(0, 10);
    let day = slicedDate.slice(8, 10);
    let month = slicedDate.slice(5, 7);
    let year = slicedDate.slice(0, 4);
    let dateFormated = `${day}/${month}/${year}`;
    setDate(dateFormated);
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

      </C.Description>
    </C.ContainerDescriptions>
  );
};

export default DetailsComics;
