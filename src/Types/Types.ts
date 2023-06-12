
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