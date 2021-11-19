<template>
  <q-list class="container q-pa-sm">
    <q-toolbar class="q-pa-lg">
      <q-toolbar-title class="text-h5 text-justify"> {{title}} </q-toolbar-title>
      <q-btn flat round dense icon="whatshot" />
    </q-toolbar>
    <q-item v-for="item in items" :key="item.id">
      <q-item-section>
        <q-card class="row">
          <div v-show="item.image" class="col-xs-12 col-sm-12 col-md-4 image__container">
            <q-img class="image__content shadow-10" :src="item.image" />
          </div>
          <div class="col q-pa-xl detail__container">
            <slot name="itemsSlot" :item="item"></slot>
          </div>
        </q-card>
      </q-item-section>
    </q-item>
  </q-list>
</template>

<script lang="ts">
export default {
  /**
   */
  name: 'AppList',
  /**
   */
  props: {
    title: {
      type: String
    },
    items: {
      type: Array,
      required: true
    }
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
