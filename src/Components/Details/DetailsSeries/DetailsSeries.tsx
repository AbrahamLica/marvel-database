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

  async function executarRequisicaoComics() {

    var array: any = []

    for (let i = 0; i < state.marvel.comics.items.length; i++) {
      array.push(state.marvel.comics.items[i].resourceURI)
    }
    
    for (let i = 0; i < array.length; i++) {
      array[i] = `${array[i]}?ts=1&apikey=8df0db429915d47e065eb03b37ca9039&hash=4a8b729d09d1d2ad3fb626dff7e2165d`
    }

    console.log(array)

    // let req = await fetch(
    //   `${}?ts=1&apikey=${publicKey}&hash=${Hash}`
    // );

    // let json = await req.json();

    // setRequisicao(json.data.results);

    // fazer req de series:  https://gateway.marvel.com/v1/public/comics/84352?ts=1&apikey=8df0db429915d47e065eb03b37ca9039&hash=4a8b729d09d1d2ad3fb626dff7e2165d
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

        <button onClick={executarRequisicaoComics}>teste</button>
      </C.Description>
    </C.ContainerDescriptions>
  );
};

export default DetailsSeries;
