<template>
  <div class="flex justify-end q-gutter-y-md column" style="width: 350px; max-width: 100%">
    <q-toolbar class="flex justify-end text-white rounded-borders">
      <div>
        <q-btn v-show="showButton" @click="search()" flat round dense color="primary" icon="search" />
      </div>
      <q-input
        v-show="showInput"
        dense
        standout
        rounded outlined
        v-model="text"
        debounce="1000"
        input-class="text-right"
        class="q-ml-md"
      >
        <template v-slot:append>
          <q-icon
            name="clear"
            class="cursor-pointer"
            @click="search(false)"
          />
        </template>
      </q-input>
    </q-toolbar>
  </div>
</template>

<script lang="ts">
import { ref, watch, SetupContext } from 'vue'
export default {
  /**
   */
  name: 'SearchBar',
  emits: ['search-bar:search'],
  /**
   * @param {SetupContext} SetupContext
   */
  setup (props: unknown, context: SetupContext) {
    const { emit } = context
    const text = ref('')
    const showInput = ref(false)
    const showButton = ref(true)
    const search = (show = true) => {
      text.value = ''
      showInput.value = show
      showButton.value = !show
    }
    watch(text, () => {
      emit('search-bar:search', text.value)
    })
    return {
      text,
      showInput,
      showButton,
      search
    }
  }
}
</script>

<style scoped></style>
