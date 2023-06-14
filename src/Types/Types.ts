export type MarvelReducerInitialStateType = {
    id: number
    name: string
    description: string
    anythingOpen: boolean
    img: string
    homePage: boolean
    openPageSelectedCategory: boolean
    selectedCategory: string | number
    paginaAtual: number
    loading: boolean
    series: string[]
}

export type ActionType = {
    type: string
    payload: {
        [key: string]: any;
    }
}

export type ChildrenType = {
    children: React.ReactNode
}


export type ContextType = {
    state: InitialStateContextType;
    dispatch: React.Dispatch<any>;
}

export type InitialStateContextType = {
    marvel: MarvelReducerInitialStateType
}

export type RequisicaoType = {
    name?: string,
    id?: number,
    thumbnail?: Thumbnail[],
    description?: string
}

export type Thumbnail = {
    extension?: string,
    path?: string
}