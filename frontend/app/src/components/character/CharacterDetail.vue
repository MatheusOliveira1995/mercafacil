<template>
  <div>
    <div class="text-h5">{{ $t('character.title') }}</div>
    <q-separator />
    <div q-pa-sm>
      <p class="text-body1">{{ character.name }}</p>
      <span style="display: flex">
        <p class="text-subtitle2">{{ $t('character.origin') + ': ' }}</p>
        <p>{{ character.origin.name }}</p>
      </span>
      <span style="display: flex">
        <p class="text-subtitle2">{{ $t('character.dimension') + ': ' }}:</p>
        <p>{{ character.origin.dimension }}</p>
      </span>
      <span style="display: flex">
        <p class="text-subtitle2">{{ $t('character.localization') + ': ' }}:</p>
        <p>{{ character.location.name }}</p>
      </span>
      <span style="display: flex" class="q-pt-md">
        <q-btn @click="alert = true" color="primary">{{ $t('character.actions.episodes') }}</q-btn>
      </span>
    </div>
    <q-dialog v-model="alert">
      <q-card>
        <q-card-section>
          <div class="text-h6">{{ $t('character.episodes') }}</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          {{ character.episode.map((item) => item.name).join(", ") }}
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="OK" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
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
    const alert = ref(false)

    return {
      alert
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
</style>
