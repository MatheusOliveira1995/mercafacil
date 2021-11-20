import { ActionTree } from 'vuex'
import { StateInterface } from '../index'
import { CharactersInterface } from './state'

const actions: ActionTree<CharactersInterface, StateInterface> = {
  someAction (/* context */) {
    // your code
  }
}

export default actions
