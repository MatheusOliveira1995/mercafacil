<template>
  <q-list class="container q-pa-sm">
    <q-item v-for="item in items" :key="item.id">
      <q-item-section>
        <q-card class="row">
          <div class="col-xs-12 col-sm-12 col-md-4 image__container">
            <q-img class="image__content shadow-10" :src="item.image" />
          </div>
          <div class="col q-pa-xl detail__container">
            <CharacterDetail :character="item" />
          </div>
        </q-card>
      </q-item-section>
    </q-item>
  </q-list>
</template>

<script lang="ts">
import CharacterDetail from '../character/CharacterDetail.vue'
export default {
  /**
   */
  name: 'AppList',
  /**
   */
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  components: {
    CharacterDetail
  }
  /**
   */
}
</script>

<style scoped>
.container {
  max-width: 1200px;
  width: 100%;
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
