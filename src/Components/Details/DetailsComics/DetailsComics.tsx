import * as C from "../AppStyles";
import React, { useEffect } from "react";
import { useContext } from "react";
import { Context } from "../../../Context/Context";

const DetailsComics = () => {
  const { state, dispatch } = useContext(Context);

  return (
    <C.ContainerDescriptions>
      <C.ImgDetails src={`${state.marvel.img}.jpg`} />

      <C.Description>
        <C.Text>{state.marvel.name}</C.Text>

        {state.marvel.description.length ? (
          <C.Text>{state.marvel.description}</C.Text>
        ) : null}

        <C.Text>{`Page Count: ${state.marvel.pageCount}`}</C.Text>


        <C.Text>{`Published: ${state.marvel.dates[0].date}`}</C.Text>

        <C.Container margin="30px 0px">
          {state.marvel.creators.items.map((item: any, index: number) => (
            <C.Container>
              <C.Text>{`${item.role}: ${item.name}`}</C.Text>
            </C.Container>
          ))}
        </C.Container>
      </C.Description>
    </C.ContainerDescriptions>
  );
};

export default DetailsComics;
