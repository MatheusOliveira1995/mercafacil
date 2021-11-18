<template>
  <q-page class="row items-center justify-evenly">
      <AppList :items="characters"/>
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
    debugger
    console.log(characters)
    return {
      characters
    }
  }
}
</script>

<style scoped></style>
