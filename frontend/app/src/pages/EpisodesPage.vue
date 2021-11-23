<template>
    <q-page class="row items-center justify-evenly">
      <AppList v-if="!loading"
        :items="response.episodes"
        :info="response.info"
        @app-list:pageChange="setPage($event)"
        @app-list:filter="filter($event)"
      >
        <template #itemsSlot="{ item }">
          <EpisodeDetail :episode="item"/>
        </template>
      </AppList>
      <LoadingState :loading="loading"/>
    </q-page>
</template>

<script lang="ts">
import AppList from '../components/shared/AppList.vue'
import LoadingState from '../components/shared/LoadingState.vue'
import EpisodeDetail from '../components/episode/EpisodeDetail.vue'
import { getEpisodes } from '../service/api/episodes'
import { ref } from 'vue'
export default {
  /**
   */
  name: 'EpisodesPage',
  /**
   */
  components: {
    AppList,
    LoadingState,
    EpisodeDetail
  },
  /**
   */
  setup () {
    const page = ref(1)
    const filterName = ref('')
    const { loading, response } = getEpisodes({ page, filterName })
    const setPage = (nextPage: number) => {
      page.value = nextPage
    }
    const filter = (name: '') => {
      filterName.value = name
    }
    return {
      response,
      loading,
      setPage,
      filter
    }
  }
}
</script>

<style scoped>

</style>
