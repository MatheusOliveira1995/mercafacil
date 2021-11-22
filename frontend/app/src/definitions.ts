/* eslint-disable no-use-before-define */

export type Location = {
    name: string,
    type: string
}
export type Origin = {
    name: string,
    dimension: string
}
export type Episode = {
    name:string,
    characters?: Character[]
}
export type Character = {
    id: number | string,
    pages?: number,
    name: string,
    status?: string,
    image?: string,
    species?: string
    location?: Location,
    origin?: Origin,
    episodes?: Episode[]
}
