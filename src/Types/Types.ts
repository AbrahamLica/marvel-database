export type MarvelReducerInitialStateType = {
  id: number;
  name: string;
  title: string;
  description: string;
  startYear: number;
  endYear: number;
  characters: string[];
  comics: any;
  stories: string[];
  nextSeries: string;
  previousSeries: string;
  img: string;
  series: any;
  creators: any;
  dates: any;
  variants: string[];
  pageCount: string;
};

export type OthersReducerInitialStateType = {
  url: string;
  currentPage: number;
  fetch: any;
  openPageSelectedCategory: boolean;
  homePage: boolean;
  loading: boolean;
  loadedItems: boolean;
  detailsOpen: boolean;
  selectedCategory: string;
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
  others: OthersReducerInitialStateType;
};
