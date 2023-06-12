import { createContext, useReducer } from "react";
import { ContextType, ActionType, ChildrenType, InitialStateContextType, MarvelReducerInitialStateType } from "../Types/Types";


////////////////////////  REDUCER MOVIES  ////////////////////////////////

export const MarvelReducerInitialState: MarvelReducerInitialStateType = {
 id: 0,
 name: '',
 description: '',
 anythingOpen: false,
 img: '',
 homePage: true,
 openPageSelectedCategory: false,
 selectedCategory: '',
 paginaAtual: 0,
 loading: false
};

export function reducerMarvel(state: MarvelReducerInitialStateType, action: ActionType) {
  switch (action.type) {
    case "OPEN_DETAILS":
      return {
        ...state,
        id: action.payload.id,
        name: action.payload.name,
        description: action.payload.description,
        anythingOpen: action.payload.anythingOpen,
        img: action.payload.img,
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
