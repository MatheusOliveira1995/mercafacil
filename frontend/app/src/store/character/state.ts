import { Character } from 'src/definitions'
export interface CharactersInterface {
  characters: Character[];
}

function state (): CharactersInterface {
  return {
    characters: []
  }
}

export default state
