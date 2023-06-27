import * as C from "../AppStyles";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { Context } from "../../../Context/Context";

const DetailsComics = () => {
  const { state, dispatch } = useContext(Context);
  const [date, setDate] = useState<any>(state.marvel.dates);

  useEffect(() => {
    FormatDate()
  }, [state.marvel.dates]);

  function FormatDate() {
    let date = state.marvel.dates[0].date
    let slicedDate = date.slice(0, 10)
    let day = slicedDate.slice(8, 10)
    let month = slicedDate.slice(5, 7)
    let year = slicedDate.slice(0, 4)
    let dateFormated = `${day}/${month}/${year}`
    setDate(dateFormated)
  }

  return (
    <C.ContainerDescriptions>
      <C.ImgDetails ImgDetailsComicsHeight ImgDetailsComicsWidth src={`${state.marvel.img}.jpg`} />

      <C.Description>
        <C.Text>{state.marvel.name}</C.Text>

        {state.marvel.description.length ? (
          <C.Text>{state.marvel.description}</C.Text>
        ) : null}

        <C.Text>{`Published: ${date}`}</C.Text>

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
