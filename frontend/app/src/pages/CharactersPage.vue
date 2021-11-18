<template>
  <q-page class="row items-center justify-evenly">
    <q-toolbar class="q-pa-lg">
      <q-toolbar-title class="text-h6 text-justify"> Personagens do desenho </q-toolbar-title>
      <q-btn flat round dense icon="whatshot" />
    </q-toolbar>
    <AppList :items="characters" />
  </q-page>
</template>

<script>
import { getCharacters } from '../service/api/characters'
import AppList from '../components/shared/AppList.vue'
export default {
  /*
   */
  name: 'CharactersPage',
  /**
   */
  components: {
    AppList
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
