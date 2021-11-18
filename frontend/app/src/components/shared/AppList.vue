<template>
    <q-list>
       <q-item v-for="item in items" :key="item.id">
           <q-item-section>
               <q-card>
                   <q-card-section>
                       Image
                   </q-card-section>
                   <q-card-section>
                       {{item}}
                   </q-card-section>
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
    items: {
      type: Array,
      required: true
    }
  }

}
</script>
<style scoped>

</style>
