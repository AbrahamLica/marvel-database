import { createContext, useReducer } from "react";
import {
  ActionType,
  MoviesReducerInitialStateType,
  ContextType,
  InitialStateContextType,
  ChildrenType,
} from "../Types/Types";

////////////////////////  REDUCER MOVIES  ////////////////////////////////

export const MoviesReducerInitialState: MoviesReducerInitialStateType = {
  id: 0,
  titulo: "",
  detalhes: "",
  movieOpen: false,
  img: "",
  mediaVotos: 0,
  dataLançamento: "",
  homePage: true,
  openPageSelectedCategory: false,
  selectedCategory: 0,
  searchMovie: false,
  paginaAtual: 1,
  loading: false,
  movie: "",
  genreCard: false,
};

export function reducerMovies(
  state: MoviesReducerInitialStateType,
  action: ActionType
) {
  switch (action.type) {
    case "OPEN_DETAILS":
      return {
        ...state,
        id: action.payload.id,
        titulo: action.payload.titulo,
        detalhes: action.payload.detalhes,
        movieOpen: action.payload.movieOpen,
        img: action.payload.img,
        mediaVotos: action.payload.mediaVotos,
        dataLançamento: action.payload.dataLançamento,
      };
      break;

    case "BACK_HOME":
      return {
        ...state,
        openPageSelectedCategory: action.payload.openPageSelectedCategory,
        homePage: action.payload.homePage,
        paginaAtual: action.payload.paginaAtual,
        genreCard: action.payload.genreCard,
      };

    case "OPEN_POPULARES":
      return {
        ...state,
        openPageSelectedCategory: action.payload.openPageSelectedCategory,
        homePage: action.payload.homePage,
        selectedCategory: action.payload.selectedCategory,
      };

    case "OPEN_LANCAMENTOS":
      return {
        ...state,
        openPageSelectedCategory: action.payload.openPageSelectedCategory,
        homePage: action.payload.homePage,
        selectedCategory: action.payload.selectedCategory,
      };

    case "OPEN_MAISVOTADOS":
      return {
        ...state,
        openPageSelectedCategory: action.payload.openPageSelectedCategory,
        homePage: action.payload.homePage,
        selectedCategory: action.payload.selectedCategory,
      };

    case "NEXT_PAGE":
      return {
        ...state,
        paginaAtual: action.payload.paginaAtual,
      };

    case "BACK_PAGE":
      return {
        ...state,
        paginaAtual: action.payload.paginaAtual,
      };

    case "SEARCH_MOVIE":
      return {
        ...state,
        movie: action.payload.movie,
        homePage: action.payload.homePage,
        openPageSelectedCategory: action.payload.openPageSelectedCategory,
        selectedCategory: action.payload.selectedCategory,
        paginaAtual: action.payload.paginaAtual,
      };

    case "SWITCH_LOADING":
      return {
        ...state,
        loading: action.payload.loading,
      };

    case "OPEN_GENRES":
      return {
        ...state,
        genreCard: action.payload.genreCard,
      };

    case "OPEN_GENRE_LIST":
      return {
        ...state,
        openPageSelectedCategory: action.payload.openPageSelectedCategory,
        homePage: action.payload.homePage,
        selectedCategory: action.payload.selectedCategory,
      };
  }
  return state;
}

/////////////////////////  CONTEXT ///////////////////////////////////

const ContextInitialState = {
  movies: MoviesReducerInitialState,
};

export const Context = createContext<ContextType>({
  state: ContextInitialState,
  dispatch: () => null,
});

const mainReducer = (state: InitialStateContextType, action: ActionType) => ({
  movies: reducerMovies(state.movies, action),
});

export function ContextProvider({ children }: ChildrenType) {
  const [state, dispatch] = useReducer(mainReducer, ContextInitialState);

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
}
