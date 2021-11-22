<template>
    <q-inner-loading :showing="loading">
      <q-spinner-gears size="50px" color="primary" />
    </q-inner-loading>
</template>

<script>
import { ref } from 'vue'
export default {
  /**
    */
  name: 'LoadingState',
  /**
   */
  props: {
    loading: {
      default: ref(false)
    }
  }
}
</script>

<style scoped>

</style>
