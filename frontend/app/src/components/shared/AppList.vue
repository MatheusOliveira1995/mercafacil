/* eslint-disable @typescript-eslint/no-unsafe-assignment */
<template>
  <q-list class="container q-pa-sm">
    <q-toolbar class="q-pa-md">
      <q-toolbar-title class="text-h5 text-justify">
        {{ title }}
      </q-toolbar-title>
      <SearchBar @search-bar:search="performFilter($event)" />
      <q-btn @click="performSort()" flat round dense icon="sort_by_alpha" />
    </q-toolbar>
    <q-item v-for="item in showing" :key="item.id">
      <q-item-section>
        <div>
          <slot name="itemsSlot" :item="item"></slot>
        </div>
      </q-item-section>
    </q-item>
    <div class="q-pa-lg flex flex-center">
      <q-pagination v-model="currentPage" :max="pages" input />
    </div>
  </q-list>
</template>

<script lang="ts">
import { ref, SetupContext, watch, onMounted } from 'vue'
import SearchBar from './SearchBar.vue'
/**
 */
type Props = {
  items: Array<unknown>;
  title: string;
};
type SortItem = {
  name: string;
};
export default {
  /**
   */
  name: 'AppList',
  /**
   */
  components: {
    SearchBar
  },
  props: {
    title: {
      type: String
    },
    items: {
      type: Array,
      required: true
    },
    pages: {
      type: Number
    }
  },
  /**
   */
  emits: ['app-list:pageChange', 'app-list:filter'],
  /**
   * @param {Props} props
   * @param {SetupContext} SetupContext
   */
  setup (props: Props, context: SetupContext) {
    const { emit } = context
    const showing = ref(props.items)
    const storedPage = parseInt(localStorage.getItem('currentPage') ?? '1')
    localStorage.removeItem('currentPage')
    const currentPage = ref(storedPage)
    const ascending = ref(localStorage.getItem('ordering') === 'asc')
    const sorter = (a: unknown, b: unknown) => {
      const item1 = a as SortItem
      const item2 = b as SortItem
      if (item1.name > item2.name) {
        return ascending.value ? 1 : -1
      }

      if (item1.name < item2.name) {
        return ascending.value ? -1 : 1
      }

      return 0
    }
    const performFilter = (filter: string) => {
      emit('app-list:filter', filter)
    }
    const performSort = () => {
      ascending.value = !ascending.value
      sortList()
    }
    const sortList = () => {
      showing.value = showing.value.sort(sorter)
    }
    watch(currentPage, () => {
      localStorage.setItem('currentPage', currentPage.value ? currentPage.value.toString() : '1')
      emit('app-list:pageChange', currentPage.value)
    })
    watch(ascending, () => {
      if (ascending.value) { localStorage.setItem('ordering', 'asc'); return }
      localStorage.setItem('ordering', 'desc')
    })
    onMounted(() => {
      if (!localStorage.getItem('ordering')) return
      sortList()
    })
    return {
      currentPage,
      performFilter,
      showing,
      performSort
    }
  },
  /**
   */
  unmounted () {
    if (!localStorage.getItem('ordering')) { localStorage.removeItem('ordering') }
  }
}
</script>

<style scoped>
.container {
  max-width: 1200px;
  width: 100%;
}
</style>
