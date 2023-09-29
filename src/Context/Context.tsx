import { createContext, useReducer } from "react";
import {
  ContextType,
  ActionType,
  ChildrenType,
  InitialStateContextType,
  MarvelReducerInitialStateType,
  Thumbnail,
  OthersReducerInitialStateType,
} from "../Types/Types";

////////////////////////  REDUCER MOVIES  ////////////////////////////////

export const MarvelReducerInitialState: MarvelReducerInitialStateType = {
  id: 0,
  name: "",
  title: "",
  description: "",
  startYear: 0,
  endYear: 0,
  characters: [],
  comics: [],
  stories: [],
  nextSeries: "",
  previousSeries: "",
  img: "",
  series: [],
  creators: [],
  dates: [],
  variants: [],
  pageCount: "",
};

export function reducerMarvel(
  state: MarvelReducerInitialStateType,
  action: ActionType
) {
  switch (action.type) {
    case "OPEN_DETAILS":
      return {
        ...state,
        id: action.payload.id,
        name: action.payload.name,
        title: action.payload.title,
        creators: action.payload.creators,
        description: action.payload.description,
        startYear: action.payload.startYear,
        endYear: action.payload.endYear,
        characters: action.payload.characters,
        dates: action.payload.dates,
        variants: action.payload.variants,
        img: action.payload.img,
        series: action.payload.series,
        comics: action.payload.comics,
        stories: action.payload.stories,
        nextSeries: action.payload.nextSeries,
        previousSeries: action.payload.previousSeries,
        pageCount: action.payload.pageCount,
      };
      break;

    case "CLEAR_ALL_INFORMATIONS":
      return {
        ...state,
        id: 0,
        name: "",
        title: "",
        description: "",
        startYear: 0,
        endYear: 0,
        characters: [],
        comics: [],
        stories: [],
        nextSeries: "",
        previousSeries: "",
        img: "",
        series: [],
        creators: [],
        dates: [],
        variants: [],
        pageCount: "",
      };
      break;
  }
  return state;
}

////////////////////////  REDUCER OTHERS  ////////////////////////////////

export const OthersReducerInitialState: OthersReducerInitialStateType = {
  url: "",
  currentPage: 0,
  fetch: "",
  openPageSelectedCategory: false,
  homePage: true,
  loading: false,
  loadedItems: false,
  detailsOpen: false,
  selectedCategory: "",
};

export function reducerOthers(
  state: OthersReducerInitialStateType,
  action: ActionType
) {
  switch (action.type) {
    case "SELECT_CATEGORY_CHARACTERS":
      return {
        ...state,
        loadedItems: action.payload.loadedItems,
        selectedCategory: action.payload.selectedCategory,
        fetch: action.payload.fetch,
      };
      break;

    case "SELECT_CATEGORY_COMICS":
      return {
        ...state,
        loadedItems: action.payload.loadedItems,
        selectedCategory: action.payload.selectedCategory,
        fetch: action.payload.fetch,
      };
      break;

    case "SELECT_CATEGORY_SERIES":
      return {
        ...state,
        loadedItems: action.payload.loadedItems,
        selectedCategory: action.payload.selectedCategory,
        fetch: action.payload.fetch,
      };
      break;

    case "BACK_PAGE":
      return {
        ...state,
        currentPage: action.payload.currentPage,
        fetch: action.payload.fetch
      };
      break;

    case "NEXT_PAGE":
      return {
        ...state,
        currentPage: action.payload.currentPage,
        fetch: action.payload.fetch
      };
      break;

    case "SET_LOADING":
      return {
        ...state,
        loading: action.payload.loading,
      };
      break;

    case "CLEAR_ALL_INFORMATIONS_2":
      return {
        ...state,
        openPageSelectedCategory: false,
        homePage: true,
        loading: false,
        loadedItems: false,
        detailsOpen: false,
        currentPage: 0,
      };
      break;
  }
  return state;
}

/////////////////////////  CONTEXT ///////////////////////////////////

const ContextInitialState = {
  marvel: MarvelReducerInitialState,
  others: OthersReducerInitialState,
};

export const Context = createContext<ContextType>({
  state: ContextInitialState,
  dispatch: () => null,
});

const mainReducer = (state: InitialStateContextType, action: ActionType) => ({
  marvel: reducerMarvel(state.marvel, action),
  others: reducerOthers(state.others, action),
});

export function ContextProvider({ children }: ChildrenType) {
  const [state, dispatch] = useReducer(mainReducer, ContextInitialState);

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
}
