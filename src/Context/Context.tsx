import { createContext, useReducer } from "react";
import {
  ContextType,
  ActionType,
  ChildrenType,
  InitialStateContextType,
  MarvelReducerInitialStateType,
  Thumbnail,
} from "../Types/Types";

////////////////////////  REDUCER MOVIES  ////////////////////////////////

export const MarvelReducerInitialState: MarvelReducerInitialStateType = {
  id: 0,
  name: "",
  description: "",
  startYear: 0,
  endYear: 0,
  characters: [],
  comics: [],
  stories: [],
  nextSeries: "",
  previousSeries: "",
  detailsCharacterOpen: false,
  detailsComicsOpen: false,
  detailsSeriesOpen: false,
  img: "",
  homePage: true,
  openPageSelectedCategory: false,
  selectedCategory: "",
  currentPage: 0,
  loading: false,
  series: [],
  url: "",
  creators: [],
  dates: [],
  pageCount: "",
  variants: [],
  loadedItems: false,
  fetch: "",
};

export function reducerMarvel(
  state: MarvelReducerInitialStateType,
  action: ActionType
) {
  switch (action.type) {
    case "OPEN_DETAILS":
      return {
        ...state,
        details: action.payload.details,
      };
      break;

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
        loading: action.payload.loading,
      };
      break;

    case "NEXT_PAGE":
      return {
        ...state,
        currentPage: action.payload.currentPage,
        loading: action.payload.loading,
      };
      break;

    case "BACK_HOME":
      return {
        ...state,
        id: action.payload.id,
        name: action.payload.name,
        description: action.payload.description,
        anythingOpen: action.payload.anythingOpen,
        img: action.payload.img,
        series: action.payload.series,
        creators: action.payload.creators,
        dates: action.payload.dates,
        pageCount: action.payload.pageCount,
        variants: action.payload.variants,
        detailsCharacterOpen: action.payload.detailsCharacterOpen,
        openPageSelectedCategory: action.payload.openPageSelectedCategory,
        currentPage: action.payload.currentPage,
      };
      break;

    case "SET_LOADING":
      return {
        ...state,
        loading: action.payload.loading,
      };
      break;

    case "CLEAR_ALL_INFORMATIONS":
      return {
        ...state,
        detailsComicsOpen: action.payload.detailsComicsOpen,
        detailsCreatorsOpen: action.payload.detailsCreatorsOpen,
        detailsEventsOpen: action.payload.detailsEventsOpen,
        detailsSeriesOpen: action.payload.detailsSeriesOpen,
        detailsStoriesOpen: action.payload.detailsStoriesOpen,
        homePage: action.payload.homePage,
        openPageSelectedCategory: action.payload.openPageSelectedCategory,
        selectedCategory: action.payload.selectedCategory,
        loading: action.payload.loading,
        url: action.payload.url,
        id: action.payload.id,
        name: action.payload.name,
        description: action.payload.description,
        anythingOpen: action.payload.anythingOpen,
        img: action.payload.img,
        series: action.payload.series,
        creators: action.payload.creators,
        dates: action.payload.dates,
        pageCount: action.payload.pageCount,
        variants: action.payload.variants,
        detailsCharacterOpen: action.payload.detailsCharacterOpen,
      };
      break;

    case "CLEAR_ALL_INFORMATIONS_2":
      return {
        ...state,
        detailsComicsOpen: action.payload.detailsComicsOpen,
        detailsCreatorsOpen: action.payload.detailsCreatorsOpen,
        detailsEventsOpen: action.payload.detailsEventsOpen,
        detailsSeriesOpen: action.payload.detailsSeriesOpen,
        detailsStoriesOpen: action.payload.detailsStoriesOpen,
        homePage: action.payload.homePage,
        openPageSelectedCategory: action.payload.openPageSelectedCategory,
        selectedCategory: action.payload.selectedCategory,
        loading: action.payload.loading,
        url: action.payload.url,
        id: action.payload.id,
        name: action.payload.name,
        description: action.payload.description,
        anythingOpen: action.payload.anythingOpen,
        img: action.payload.img,
        series: action.payload.series,
        creators: action.payload.creators,
        dates: action.payload.dates,
        pageCount: action.payload.pageCount,
        variants: action.payload.variants,
        currentPage: action.payload.currentPage,
        detailsCharacterOpen: action.payload.detailsCharacterOpen,
      };
      break;
  }
  return state;
}

/////////////////////////  CONTEXT ///////////////////////////////////

const ContextInitialState = {
  marvel: MarvelReducerInitialState,
};

export const Context = createContext<ContextType>({
  state: ContextInitialState,
  dispatch: () => null,
});

const mainReducer = (state: InitialStateContextType, action: ActionType) => ({
  marvel: reducerMarvel(state.marvel, action),
});

export function ContextProvider({ children }: ChildrenType) {
  const [state, dispatch] = useReducer(mainReducer, ContextInitialState);

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
}
