import React from "react";
import * as C from "../../AppStyles";
import { useContext } from "react";
import { Context } from "../../Context/Context";

const Details = () => {
  const { state, dispatch } = useContext(Context);

  function back() {
    console.log(state.marvel.name);
    console.log(state.marvel.description);
    console.log(state.marvel.id);
    console.log(state.marvel.img);
  }

  return (
    <C.MainContainerDetails>
      <C.ContainerDetails>
        <C.ImgDetails src={`${state.marvel.img}.jpg`} />
        <C.ContainerDescription>
          <C.Description>{state.marvel.description}</C.Description>
        </C.ContainerDescription>
        {/* <button onClick={back}>Back</button> */}
      </C.ContainerDetails>
    </C.MainContainerDetails>
  );
};

export default Details;
