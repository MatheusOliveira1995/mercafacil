
export type Location = {
    name: string,
    type: string
}
export type Episode = {
    name:string
}
export type Character = {
    id: number | string,
    name: string,
    status: string,
    species: string
    location: Location,
    episodes: Episode[]
}
