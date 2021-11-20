<template>
  <q-page class="row items-center justify-evenly">
    <AppList v-if="!loading"
      :title="$t('app.characterList')"
      :items="response.characters"
      :pages="response.pages"
      @app-list:pageChange="setPage($event)"
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

<script lang="ts">
import { getCharacters } from '../service/api/characters'
import AppList from '../components/shared/AppList.vue'
import CharacterDetail from '../components/character/CharacterDetail.vue'
import { ref } from 'vue'
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
    const params = ref({
      page: 1,
      name: ''
    })
    const { loading, response } = getCharacters(params)
    /* const setPage = (nextPage: number) => {
      params.page.value = nextPage
    } */
    return {
      loading,
      response
      // setPage
    }
  }
  /**
   */
}
</script>

<style scoped></style>
