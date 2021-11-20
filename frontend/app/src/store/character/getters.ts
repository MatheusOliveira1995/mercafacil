import { GetterTree } from 'vuex'
import { StateInterface } from '../index'
import { CharactersInterface } from './state'

const getters: GetterTree<CharactersInterface, StateInterface> = {
  getCharacter (state, name: string) {
    return state.characters.find((element) => {
      return element.name === name
    })
  },
  getCharacters (state) {
    return state.characters
  }
}

export default getters
