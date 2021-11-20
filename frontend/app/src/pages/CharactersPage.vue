<template>
  <q-page class="row items-center justify-evenly">
    <AppList v-show="!loading" :title="$t('app.characterList')" :items="showingCharacters">
      <template #itemsSlot="{ item }">
        <CharacterDetail :character="item" />
      </template>
    </AppList>
    <q-inner-loading :showing="loading">
        <q-spinner-gears size="50px" color="primary" />
      </q-inner-loading>
  </q-page>
</template>

<script lang="ts">
import { getCharacters } from '../service/api/characters'
import AppList from '../components/shared/AppList.vue'
import CharacterDetail from '../components/character/CharacterDetail.vue'
import { useStore } from '../store'
import { watch, computed } from 'vue'
import { Character } from '../definitions'

type CharacterGetter = {
  ['character/getCharacters']: Character[]
}
export default {
  /*
   */
  name: 'CharactersPage',
  /**
   */
  components: {
    AppList,
    CharacterDetail
  },
  setup () {
    const $store = useStore()
    const { loading, characters } = getCharacters()
    watch(characters, () => {
      if (!characters.value) return
      void $store.commit('character/setCharacters', characters.value)
    })
    const showingCharacters = computed(():Character[] => {
      return ($store.getters as CharacterGetter)['character/getCharacters']
    })
    return {
      showingCharacters,
      loading
    }
  }
  /**
   */
}
</script>

<style scoped></style>
