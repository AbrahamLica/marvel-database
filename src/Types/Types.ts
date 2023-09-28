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
  selectedCategory: string;
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

export type RequisicaoType = {
  //IN COMMON
  id?: number;
  description?: string;
  thumbnail?: Thumbnail;
  title?: string;
  series?: any;

  //CHARACTERS TYPE
  name?: string;
  creators?: any[];

  //COMICS TYPE
  characters?: string[];
  creatorss?: any;
  dates?: any;
  pageCount?: string;
  variants?: string[];

  //SERIES TYPE
  startYear?: number;
  endYear?: number;
  comics?: any[];
  stories?: string[];
  nextSeries?: any;
  previousSeries?: any;
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
