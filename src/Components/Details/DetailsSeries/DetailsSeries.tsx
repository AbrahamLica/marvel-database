import * as C from "../AppStyles";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { Context } from "../../../Context/Context";

const DetailsSeries = () => {
  const { state, dispatch } = useContext(Context);
  const [date, setDate] = useState<any>();
  const [requisicao, setRequisicao] = useState<any[]>([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    executarRequisicaoComics();
  }, [state.marvel.currentPage]);

  function teste() {
    console.log(state.marvel);
  }

  async function executarRequisicaoComics() {
    var array: any = [];
    var testeee: any = [];
    var json: any = [];

    for (let i = 0; i < state.marvel.comics.items.length; i++) {
      array.push(state.marvel.comics.items[i].resourceURI);
      array[
        i
      ] = `${array[i]}?ts=1&apikey=8df0db429915d47e065eb03b37ca9039&hash=4a8b729d09d1d2ad3fb626dff7e2165d`;
    }

    for (let i = 0; i < array.length; i++) {
      let req: any = await fetch(array[i]);
      json.push(await req.json());
      setRequisicao((current) => [...current, json[i]]);
    }

    console.log(requisicao);

    // fazer req de series:  https://gateway.marvel.com/v1/public/comics/84352?ts=1&apikey=8df0db429915d47e065eb03b37ca9039&hash=4a8b729d09d1d2ad3fb626dff7e2165d
  }

  return (

    <C.MainContainerDetailsSeries>
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
                <C.SubTitle>{item.role}:</C.SubTitle>
                <C.SubTitle>{item.name}</C.SubTitle>
              </C.Container>
            ))}
          </C.Container>
        </C.Description>
      </C.ContainerDescriptions>

      {requisicao.length ? (
        <C.ContainerSeries>
          {requisicao.map((item: any, index: number) => (
            <C.ContainerItemSeries>
              <C.ImgDetails
                src={`${item.data.results[0].thumbnail.path}.jpg`}
                ImgDetailsSeriesHeight
                ImgDetailsSeriesWidth
              ></C.ImgDetails>
              <C.TitleSeries>{item.data.results[0].title}</C.TitleSeries>
            </C.ContainerItemSeries>
          ))}
        </C.ContainerSeries>
      ) : null}
    </C.MainContainerDetailsSeries>
  );
};

export default DetailsSeries;