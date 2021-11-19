<template>
  <q-page class="row items-center justify-evenly">
    <AppList title="Lista de personagens" :items="characters">
      <template #itemsSlot="{ item }">
        <CharacterDetail :character="item" />
      </template>
    </AppList>
  </q-page>
</template>

<script>
import { getCharacters } from '../service/api/characters'
import AppList from '../components/shared/AppList.vue'
import CharacterDetail from '../components/character/CharacterDetail.vue'
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
    const characters = getCharacters()
    return {
      characters
    }
  }
}
</script>

<style scoped></style>
