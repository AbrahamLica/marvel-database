import { Dispatch, SetStateAction } from "react";
import { RequisicaoType } from "../Types/Types";
import { Context } from "../Context/Context";
import { useContext } from "react";

// Requisitions

export async function executarRequisicao(
  dispatch: any,
  setRequisicao: Dispatch<SetStateAction<any>>,
  requisicao: any
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

  if (selectedCategory == "characters") {
    dispatch({
      type: "SELECT_CATEGORY_CHARACTERS",
      payload: {
        loadedItems: true,
        selectedCategory: selectedCategory,
        fetch: `http://gateway.marvel.com/v1/public/characters?ts=1&apikey=${publicKey}&hash=${hash}&limit=100&offset=${state.others.currentPage}`,
      },
    });
  } else if (selectedCategory == "comics") {
    dispatch({
      type: "SELECT_CATEGORY_COMICS",
      payload: {
        loadedItems: true,
        selectedCategory: selectedCategory,
        fetch: `http://gateway.marvel.com/v1/public/comics?ts=1&apikey=${publicKey}&hash=${hash}&limit=100&offset=${state.others.currentPage}`,
      },
    });
  } else {
    dispatch({
      type: "SELECT_CATEGORY_SERIES",
      payload: {
        loadedItems: true,
        selectedCategory: selectedCategory,
        fetch: `http://gateway.marvel.com/v1/public/series?ts=1&apikey=${publicKey}&hash=${hash}&limit=100&offset=${state.others.currentPage}`,
      },
    });
  }
}

export function OpenDetails(
  item: any,
  state: any,
  dispatch: any,
  usenavigate: any
) {
  const {
    id,
    name,
    title,
    description,
    startYear,
    endYear,
    characters,
    comics,
    stories,
    nextSeries,
    previousSeries,
    thumbnail,
    series,
    creators,
    dates,
    variants,
    pageCount,
  } = item;

  let payload;

  if (state.others.selectedCategory == "characters") {
    payload = {
      id,
      name,
      title: "",
      creators: "",
      description,
      startYear: 0,
      endYear: 0,
      characters: "",
      dates: 0,
      variants: "",
      img: thumbnail?.path,
      series,
      comics: "",
      stories: "",
      nextSeries: "",
      previousSeries: "",
      pageCount: "",
    };
  } else if (state.others.selectedCategory == "comics") {
    payload = {
      id,
      name: "",
      title,
      creators,
      description,
      startYear: 0,
      endYear: 0,
      characters: "",
      dates,
      variants,
      img: thumbnail?.path,
      series: "",
      comics: "",
      stories: "",
      nextSeries: "",
      previousSeries: "",
      pageCount,
    };
  } else if (state.others.selectedCategory == "series") {
    payload = {
      id,
      name: "",
      title,
      creators,
      description,
      startYear,
      endYear,
      characters,
      dates: 0,
      variants: "",
      img: thumbnail?.path,
      series,
      comics,
      stories,
      nextSeries,
      previousSeries,
      pageCount: "",
    };
  }

  dispatch({
    type: "OPEN_DETAILS",
    payload,
  });

  usenavigate("/details");
}

// Navigation | routes

export function backToSelectedCategory(dispatch: any, usenavigate: any) {
  usenavigate(-1);
}

export function backHome(usenavigate: any) {
  usenavigate("/");
}

export function backPage(dispatch: any, state: any) {
  dispatch({
    type: "BACK_PAGE",
    payload: {
      currentPage: state.others.currentPage - 100,
    },
  });
}

export function nextPage(dispatch: any, state: any) {
  dispatch({
    type: "NEXT_PAGE",
    payload: {
      currentPage: (state.others.currentPage += 100),
    },
  });
}

// Others

export function convertNumberPage(
  state: any,
  setNumberPage: Dispatch<SetStateAction<number>>
) {
  if (state.others.currentPage == 0) {
    setNumberPage(1);
  } else if (state.others.currentPage == 100) {
    setNumberPage(2);
  } else if (state.others.currentPage == 200) {
    setNumberPage(3);
  } else if (state.others.currentPage == 300) {
    setNumberPage(4);
  } else if (state.others.currentPage == 400) {
    setNumberPage(5);
  } else if (state.others.currentPage == 500) {
    setNumberPage(6);
  } else if (state.others.currentPage == 600) {
    setNumberPage(7);
  } else if (state.others.currentPage == 700) {
    setNumberPage(8);
  } else if (state.others.currentPage == 800) {
    setNumberPage(9);
  } else if (state.others.currentPage == 900) {
    setNumberPage(10);
  } else if (state.others.currentPage == 1000) {
    setNumberPage(11);
  } else if (state.others.currentPage == 11000) {
    setNumberPage(12);
  } else if (state.others.currentPage == 12000) {
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
    type: "CLEAR_ALL_INFORMATIONS_1",
  });

  dispatch({
    type: "CLEAR_ALL_INFORMATIONS_2",
  });
  usenavigate("/");
}
