<template>
  <q-page class="row items-center justify-evenly">
    <AppList v-if="!loading"
      :title="$t('app.characterList')"
      :items="response.characters"
      :pages="response.pages"
    >
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
    const { loading, response } = getCharacters()
    return {
      response,
      loading
    }
  }
  /**
   */
}
</script>

<style scoped></style>
