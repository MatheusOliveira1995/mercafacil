import { MutationTree } from 'vuex'
import { CharactersInterface } from './state'
import { Character } from 'src/definitions'

const mutation: MutationTree<CharactersInterface> = {
  setCharacters (state: CharactersInterface, characters: Character[]) {
    state.characters = characters
  }
}

export default mutation
