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
  detailsCharacterOpen: false,
  detailsComicsOpen: false,
  detailsCreatorsOpen: false,
  detailsEventsOpen: false,
  detailsSeriesOpen: false,
  detailsStoriesOpen: false,
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
  pageCount: '',
  variants: []
};

export function reducerMarvel(
  state: MarvelReducerInitialStateType,
  action: ActionType
) {
  switch (action.type) {
    case "OPEN_DETAILS_CHARACTERS":
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
        detailsCharacterOpen: action.payload.detailsCharacterOpen
      };
      break;

      case "OPEN_DETAILS_COMICS":
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
          detailsComicsOpen: action.payload.detailsComicsOpen
        };
        break;

    case "BACK_PAGE":
      return {
        ...state,
        currentPage: action.payload.currentPage,
        loading: action.payload.loading
      };
      break;

    case "NEXT_PAGE":
      return {
        ...state,
        currentPage: action.payload.currentPage,
        loading: action.payload.loading
      };
      break;

    case "BACK_HOME":
      return {
        ...state,
        currentPage: action.payload.currentPage,
      };
      break;

      case "SET_LOADING":
      return {
        ...state,
        loading: action.payload.loading,
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
