export type MarvelReducerInitialStateType = {
  id: number;
  name: string;
  description: string;
  anythingOpen: boolean;
  img: string;
  homePage: boolean;
  openPageSelectedCategory: boolean;
  selectedCategory: string | number;
  currentPage: number;
  loading: boolean;
  series: string[] | any;
  url: string
  creators: string[]
  dates: string[]
  pageCount: string
  variants: string[]
};

export type ActionType = {
  type: string;
  payload: {
    [key: string]: any;
  };
};

export type ChildrenType = {
  children: React.ReactNode;
};

export type ContextType = {
  state: InitialStateContextType;
  dispatch: React.Dispatch<any>;
};

export type InitialStateContextType = {
  marvel: MarvelReducerInitialStateType;
};

export type RequisicaoCharactersType = {
  series: any;
  name: string;
  id: number;
  thumbnail: Thumbnail;
  description: string;
};

export type RequisicaoComicsType = {
  title: string
  characters: string[]
  creators: string[]
  dates: string[]
  description: string
  id: number
  pageCount: string
  thumbnail: Thumbnail;
  variants: string[]
};

export type Thumbnail = {
  extension: string;
  path: string;
};
