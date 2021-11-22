<template>
  <q-page class="row items-center justify-evenly">
    <AppList v-if="!loading"
      :items="response.characters"
      :pages="response.pages"
      @app-list:pageChange="setPage($event)"
      @app-list:filter="filter($event)"
    >
      <template #itemsSlot="{ item }">
        <CharacterDetail :character="item" />
      </template>
    </AppList>
    <LoadingState :loading="loading"/>
  </q-page>
</template>

<script lang="ts">
import { getCharacters } from '../service/api/characters'
import AppList from '../components/shared/AppList.vue'
import LoadingState from '../components/shared/LoadingState.vue'
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
    CharacterDetail,
    LoadingState
  },
  setup () {
    const page = ref(1)
    const filterName = ref('')
    const { loading, response } = getCharacters({ page, filterName })
    const setPage = (nextPage: number) => {
      page.value = nextPage
    }
    const filter = (name: '') => {
      filterName.value = name
    }
    return {
      filter,
      loading,
      response,
      setPage
    }
  }
  /**
   */
}
</script>

<style scoped></style>
