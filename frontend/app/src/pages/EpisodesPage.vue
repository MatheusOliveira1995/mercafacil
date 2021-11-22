<template>
    <q-page class="row items-center justify-evenly">
      <AppList/>
    </q-page>
</template>

<script lang="ts">
import AppList from '../components/shared/AppList.vue'
export default {
  /**
   */
  name: 'EpisodesPage',
  /**
   */
  components: {
    AppList
  }
}
</script>

<style scoped>

</style>
