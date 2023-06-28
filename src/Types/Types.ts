export type MarvelReducerInitialStateType = {
  id: number;
  name: string;
  description: string;
  startYear: number;
  endYear: number;
  characters: string[];
  comics: string[];
  stories: string[];
  nextSeries: any;
  previousSeries: any;
  detailsCharacterOpen: boolean;
  detailsComicsOpen: boolean;
  detailsSeriesOpen: boolean;
  img: string;
  homePage: boolean;
  openPageSelectedCategory: boolean;
  selectedCategory: string | number;
  currentPage: number;
  loading: boolean;
  series: string[] | any;
  url: string;
  creators: any;
  dates: string[];
  pageCount: string;
  variants: string[];
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
  id: number;
  title: string;
  characters: string[];
  creators: any;
  dates: string[];
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
  creators: any;
  comics: string[];
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
