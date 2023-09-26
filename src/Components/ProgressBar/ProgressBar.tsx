import React, { useEffect, useState } from "react";
import * as C from "./styles";
import { useContext } from "react";
import { Context } from "../../Context/Context";
import { updateProgressBar } from "../../Helpers/Functions";

const ProgressBar = () => {
  const { state, dispatch } = useContext(Context);
  const [progressBar, setProgressBar] = useState<any>();
  const [top, setTop] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  window.addEventListener("scroll", () =>
    updateProgressBar(setProgressBar, setTop, state)
  );

  return (
    <>
      <C.ProgressBar width={`${progressBar}%`} top={`${top}px`}></C.ProgressBar>
    </>
  );
};

export default ProgressBar;
