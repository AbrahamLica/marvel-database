import { Dispatch, SetStateAction } from "react";
import { RequisicaoSeriesType } from "../Types/Types";
import { RequisicaoComicsType } from "../Types/Types";
import { RequisicaoCharactersType } from "../Types/Types";

// Requisitions

export async function executarRequisicao(
  dispatch: any,
  setRequisicao: Dispatch<SetStateAction<any>>,
  state: any,
  requisicao:any
) {
  dispatch({
    type: "SET_LOADING",
    payload: {
      loading: true,
    },
  });
  let req = await fetch(requisicao);
  let json = await req.json();
  setRequisicao(json.data.results);
  setTimeout(() => {
    dispatch({
      type: "SET_LOADING",
      payload: {
        loading: false,
      },
    });
  }, 1000);
}

export function goToSelectedCategory(
  selectedCategory: string,
  dispatch: any,
  state: any
) {
  const publicKey = "8df0db429915d47e065eb03b37ca9039";
  const hash = "4a8b729d09d1d2ad3fb626dff7e2165d";

  console.log('executou');
  if (selectedCategory == "characters") {
    dispatch({
      type: "SELECT_CATEGORY_CHARACTERS",
      payload: {
        loadedItems: true,
        fetch: `http://gateway.marvel.com/v1/public/${selectedCategory}?ts=1&apikey=${publicKey}&hash=${hash}&limit=100&offset=${state.marvel.currentPage}`,
      },
    });
  } else if (selectedCategory == "comics") {
    dispatch({
      type: "SELECT_CATEGORY_COMICS",
      payload: {
        loadedItems: true,
        fetch: `http://gateway.marvel.com/v1/public/${selectedCategory}?ts=1&apikey=${publicKey}&hash=${hash}&limit=100&offset=${state.marvel.currentPage}`,
      },
    });
  } else {
    dispatch({
      type: "SELECT_CATEGORY_SERIES",
      payload: {
        loadedItems: true,
        fetch: `http://gateway.marvel.com/v1/public/${selectedCategory}?ts=1&apikey=${publicKey}&hash=${hash}&limit=100&offset=${state.marvel.currentPage}`,
      },
    });
  }
}

export function openDetails(
  id: number,
  name: string,
  description: string,
  startYear: number,
  endYear: number,
  characters: string[],
  creators: any,
  comics: string[],
  stories: string[],
  nextSeries: any,
  previousSeries: any,
  img: string,
  series: string[],
  dispatch: any,
  usenavigate: any
) {
  dispatch({
    type: "OPEN_DETAILS_SERIES",
    payload: {
      id: id,
      name: name,
      description: description,
      startYear: startYear,
      endYear: endYear,
      characters: characters,
      creators: creators,
      comics: comics,
      stories: stories,
      nextSeries: nextSeries,
      previousSeries: previousSeries,
      anythingOpen: true,
      img: img,
      series: series,
      detailsSeriesOpen: true,
      openPageSelectedCategory: false,
    },
  });

  usenavigate("/details");
}

// Navigation / routes

export function backHome(usenavigate: any) {
  usenavigate("/");
}

export function backPage(dispatch: any, state: any) {
  dispatch({
    type: "BACK_PAGE",
    payload: {
      currentPage: state.marvel.currentPage - 100,
    },
  });
  //   executarRequisicao();
}

export function nextPage(dispatch: any, state: any) {
  dispatch({
    type: "NEXT_PAGE",
    payload: {
      currentPage: (state.marvel.currentPage += 100),
    },
  });
  //   executarRequisicao();
}

// Others

export function convertNumberPage(
  state: any,
  setNumberPage: Dispatch<SetStateAction<number>>
) {
  if (state.marvel.currentPage == 0) {
    setNumberPage(1);
  } else if (state.marvel.currentPage == 100) {
    setNumberPage(2);
  } else if (state.marvel.currentPage == 200) {
    setNumberPage(3);
  } else if (state.marvel.currentPage == 300) {
    setNumberPage(4);
  } else if (state.marvel.currentPage == 400) {
    setNumberPage(5);
  } else if (state.marvel.currentPage == 500) {
    setNumberPage(6);
  } else if (state.marvel.currentPage == 600) {
    setNumberPage(7);
  } else if (state.marvel.currentPage == 700) {
    setNumberPage(8);
  } else if (state.marvel.currentPage == 800) {
    setNumberPage(9);
  } else if (state.marvel.currentPage == 900) {
    setNumberPage(10);
  } else if (state.marvel.currentPage == 1000) {
    setNumberPage(11);
  } else if (state.marvel.currentPage == 11000) {
    setNumberPage(12);
  } else if (state.marvel.currentPage == 12000) {
    setNumberPage(13);
  }
}

export function updateProgressBar(
  setProgressBar: Dispatch<SetStateAction<number>>,
  setTop: Dispatch<SetStateAction<number>>,
  state: any
) {
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



export function backToHome(dispatch: any, usenavigate: any) {
  dispatch({
    type: "BACK_HOME",
    payload: {
      id: 0,
      name: "",
      description: "",
      anythingOpen: false,
      img: "",
      series: [],
      creators: [],
      dates: [],
      pageCount: "",
      variants: [],
      detailsCharacterOpen: false,
      openPageSelectedCategory: true,
      currentPage: 0,
    },
  });
  usenavigate("/");
}
