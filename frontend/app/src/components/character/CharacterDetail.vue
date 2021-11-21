<template>
  <q-card class="row">
    <div
      v-show="character.image"
      class="col-xs-12 col-sm-12 col-md-4 image__container"
    >
      <q-img class="image__content shadow-10" :src="character.image" />
    </div>
    <div class="col q-pa-xl detail__container">
      <span class="text-h5">{{ $t("character.title") }}</span>
      <q-separator />
      <div q-pa-sm>
        <p class="text-body1">{{ character.name }}</p>
        <div class="flex">
          <p class="text-subtitle2">{{ $t("character.origin") + ": " }}</p>
          <p>{{ character.origin.name }}</p>
        </div>
        <div class="flex">
          <p class="text-subtitle2">{{ $t("character.dimension") }}:</p>
          <p>{{ character.origin.dimension }}</p>
        </div>
        <div class="flex">
          <p class="text-subtitle2">{{ $t("character.localization") }}:</p>
          <p>{{ character.location.name }}</p>
        </div>
        <div class="flex q-pt-md">
          <q-btn @click="showEpisodes = true" color="primary">{{
            $t("character.actions.episodes")
          }}</q-btn>
        </div>
      </div>
      <q-dialog v-model="showEpisodes">
        <q-card>
          <q-card-section>
            <div class="text-h6">{{ $t("character.episodes") }}</div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            {{ character.episodes.map((item) => item.name).join(", ") }}
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
  name: 'CharacterDetail',
  /**
   */
  props: {
    character: {
      default: () => ({})
    }
  },
  /**
   */
  setup () {
    const showEpisodes = ref(false)
    return {
      showEpisodes
    }
  }
}
</script>

<style scoped>
.detail__container {
  height: 480px;
  align-items: center;
  justify-content: center;
}
p {
  margin: 0 2px;
}
span {
  display: flex;
}
.image__container {
  padding: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.image__content {
  border-radius: 50%;
  max-width: 300px;
  max-height: 300px;
}
.detail__container {
  height: 350px;
  align-items: center;
  justify-content: center;
}
</style>
