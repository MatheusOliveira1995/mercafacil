<template>
  <q-page class="row items-center justify-evenly">
    <AppList v-show="!loading" :title="$t('app.characterList')" :items="characters">
      <template #itemsSlot="{ item }">
        <CharacterDetail :character="item" />
      </template>
    </AppList>
    <q-inner-loading :showing="loading">
        <q-spinner-gears size="50px" color="primary" />
      </q-inner-loading>
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
    const { loading, characters } = getCharacters()
    return {
      characters,
      loading
    }
  }
  /**
   */
}
</script>

<style scoped></style>
