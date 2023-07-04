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

    // teste;..
  }

  return (
    <C.MainContainerDetailsSeries>
      <C.ContainerDescriptions>
        <C.ImgDetailsComics src={`${state.marvel.img}.jpg`} />

        <C.Description>
          <C.Title>{state.marvel.name}</C.Title>

          {state.marvel.description ? (
            <C.Container>
              <C.Title>Description: </C.Title>
              <C.SubTitle>{state.marvel.description}</C.SubTitle>
            </C.Container>
          ) : null}

          {date ? (
            <C.Container alignItems="center">
              <C.Title>Published:</C.Title>
              <C.SubTitle>{date}</C.SubTitle>
            </C.Container>
          ) : null}

          <C.ContainerCreators>
            {state.marvel.creators.items.map((item: any, index: number) => (
              <C.ContainerRoleandName key={index}>
                <C.SubTitle>{item.role}:</C.SubTitle>
                <C.SubTitle>{item.name}</C.SubTitle>
              </C.ContainerRoleandName>
            ))}
          </C.ContainerCreators>
        </C.Description>
      </C.ContainerDescriptions>
    </C.MainContainerDetailsSeries>
  );
};

export default DetailsComics;
