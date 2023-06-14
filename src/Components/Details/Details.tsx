import React from "react";
import * as C from "../../AppStyles";
import { useContext } from "react";
import { Context } from "../../Context/Context";

const Details = () => {
  const { state, dispatch } = useContext(Context);

  function back() {
    console.log(state.marvel.series);
  }

  return (
    <C.MainContainerDetails>  
      <C.ContainerDescriptions>
        <C.ImgDetails src={`${state.marvel.img}.jpg`} />
        <C.Description>
          {state.marvel.description}
          <C.Container margin="30px 0px">
            <C.Text>Series:</C.Text>
            {state.marvel.series.map((item, index) => (
              <p>{item.name}</p>
            ))}
          </C.Container>
        </C.Description>
      </C.ContainerDescriptions>

      {/* <button onClick={back}>Back</button> */}
    </C.MainContainerDetails>
  );
};

export default Details;
