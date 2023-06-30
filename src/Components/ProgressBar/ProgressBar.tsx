import React, { useEffect, useState } from "react";
import * as C from "./AppStyles";
import { useContext } from "react";
import { Context } from "../../Context/Context";

const ProgressBar = () => {
  const { state, dispatch } = useContext(Context);
  const [progressBar, setProgressBar] = useState<any>();
  const [top, setTop] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  window.addEventListener("scroll", updateProgressBar);

  function updateProgressBar() {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const progress = (scrollTop / scrollHeight) * 100;
    setProgressBar(progress);
    if (state.marvel.openPageSelectedCategory == true) {
      setTop(0);
    } else if (state.marvel.detailsCharacterOpen == true) {
      setTop(0);
    } else if (state.marvel.detailsComicsOpen == true) {
      setTop(0);
    } else if (state.marvel.detailsSeriesOpen == true) {
      setTop(0);
    }
  }

  return (
    <>
      <C.ProgressBar width={`${progressBar}%`} top={`${top}px`}></C.ProgressBar>
    </>
  );
};

export default ProgressBar;
