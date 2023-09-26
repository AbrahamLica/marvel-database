export type MarvelReducerInitialStateType = {
  // numbers and strings
  id: number;
  name: string;
  description: string;
  startYear: number;
  endYear: number;
  characters: string[];
  comics: any;
  stories: string[];
  nextSeries: string;
  previousSeries: string;
  img: string;
  series: string[];
  url: string;
  creators: any;
  dates: any;
  pageCount: string;
  variants: string[];
  selectedCategory: string | number;
  currentPage: number;
  fetch: any;

  // booleans
  detailsCharacterOpen: boolean;
  detailsComicsOpen: boolean;
  detailsSeriesOpen: boolean;
  openPageSelectedCategory: boolean;
  homePage: boolean;
  loading: boolean;
  loadedItems: boolean;
};

export type RequisicaoCharactersType = {
  series: any;
  name: string;
  id: number;
  thumbnail: Thumbnail;
  description: string;
  creators: any[];
};

export type RequisicaoComicsType = {
  id: number;
  title: string;
  characters: string[];
  creators: any;
  dates: any;
  description: string;
  pageCount: string;
  thumbnail: Thumbnail;
  variants: string[];
};

export type RequisicaoSeriesType = {
  id: number;
  title: string;
  description: string;
  startYear: number;
  endYear: number;
  characters: string[];
  creators: string;
  comics: any[];
  stories: string[];
  thumbnail: Thumbnail;
  nextSeries: any;
  previousSeries: any;
  series: any;
};

export type Thumbnail = {
  extension: string;
  path: string;
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
