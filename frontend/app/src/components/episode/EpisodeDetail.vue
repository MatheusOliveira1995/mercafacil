<template>
  <q-card class="row">
    <div class="col q-pa-xl detail__container">
      <span class="text-h5">{{ $t("episode.title") }}</span>
      <q-separator />
      <div q-pa-sm>
        <p class="text-body1">{{ episode.name }}</p>
        <div class="flex">
          <p class="text-subtitle2">{{ $t("episode.airdate") + ": " }}</p>
          <p>{{ episode.airdate }}</p>
        </div>
          <q-btn class="q-mt-sm" @click="showCharacters = true" color="primary">{{
            $t("episode.actions.characters")
          }}</q-btn>

      </div>
      <q-dialog v-model="showCharacters">
        <q-card>
          <q-card-section>
            <div class="text-h6">{{ $t("episode.characters") }}</div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            {{ episode.characters.map((item) => item.name).join(", ") }}
          </q-card-section>

          <q-card-actions align="right">
            <q-btn flat label="OK" color="primary" v-close-popup />
          </q-card-actions>
        </q-card>
      </q-dialog>
    </div>
  </q-card>
</template>

<script>
import { ref } from 'vue'
export default {
  /**
   */
  name: 'EpisodeDetail',
  /**
   */
  props: {
    episode: {
      default: () => ({})
    }
  },
  /**
   */
  setup () {
    const showCharacters = ref(false)
    return {
      showCharacters
    }
  }
}
</script>

<style scoped>
.detail__container {
  height: 200px;
  align-items: center;
  justify-content: center;
}
p {
  margin: 0 2px;
}
span {
  display: flex;
}
</style>
