<template>
  <div class="flex justify-end q-gutter-y-md column" style="width: 350px; max-width: 100%">
    <q-toolbar class="flex justify-end text-white rounded-borders">
      <div>
        <q-btn v-show="showingFilterButton" @click="showSearchBar()" flat round dense color="primary" icon="search" />
      </div>
      <div v-show="filtering">
        <q-btn @click="resetFilter()" flat round dense color="primary" icon="filter_alt_off" />
      </div>
      <q-input
        v-show="showInput"
        dense
        standout
        rounded outlined
        v-model="text"
        @keypress="filter($event)"
        input-class="text-right"
        class="q-ml-md"
      >
        <template v-slot:append>
          <q-icon
            name="clear"
            class="cursor-pointer"
            @click="showSearchBar(false)"
          />
        </template>
      </q-input>
    </q-toolbar>
  </div>
</template>

<script lang="ts">
import { ref, SetupContext } from 'vue'
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
    const filtering = ref(localStorage.getItem('filtering') ?? false)
    localStorage.removeItem('filtering')
    const showingFilterButton = ref(true)
    const showSearchBar = (show = true) => {
      text.value = ''
      showInput.value = show
      showingFilterButton.value = !show
    }
    const resetFilter = () => {
      emit('search-bar:search', '')
    }
    const filter = (value: KeyboardEvent) => {
      if (!(value.keyCode === 13)) return
      emit('search-bar:search', text.value)
      localStorage.setItem('filtering', '1')
    }
    return {
      text,
      resetFilter,
      filter,
      filtering,
      showInput,
      showingFilterButton,
      showSearchBar
    }
  }
}
</script>

<style scoped></style>
