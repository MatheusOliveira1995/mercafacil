
export type Location = {
    name: string,
    type: string
}
export type Origin = {
    name: string,
    type: string
}
export type Episode = {
    name:string
}
export type Character = {
    id: number | string,
    pages?: number,
    name: string,
    status: string,
    image: string,
    species: string
    location?: Location,
    origin?: Origin,
    episodes?: Episode[]
}
