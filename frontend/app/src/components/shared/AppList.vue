/* eslint-disable @typescript-eslint/no-unsafe-assignment */
<template>
  <q-list class="container q-pa-sm">
    <q-toolbar class="q-pa-md">
      <q-toolbar-title class="text-h5 text-justify"> {{title}} </q-toolbar-title>
      <SearchBar @search-bar:search="performFilter($event)"/>
      <q-btn @click="sortList()" flat round dense icon="sort_by_alpha" />
    </q-toolbar>
    <q-item v-for="item in showing" :key="item.id">
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
    <div class="q-pa-lg flex flex-center">
      <q-pagination
        v-model="currentPage"
        :max="pages"
        input
      />
    </div>

  </q-list>
</template>

<script lang="ts">
import { ref, SetupContext, watch } from 'vue'
import SearchBar from './SearchBar.vue'
/**
 */
type Props = {
  items: Array<unknown>;
  title: string;
};
type SortItem = {
  name: string
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
  setup (props:Props, context: SetupContext) {
    const { emit } = context
    const showing = ref(props.items)
    const storedPage = parseInt(localStorage.getItem('currentPage') || '1')
    localStorage.clear()
    const currentPage = ref(storedPage || 1)
    let ascending = true
    const sorter = (a:unknown, b:unknown) => {
      const item1 = a as SortItem
      const item2 = b as SortItem
      if (item1.name > item2.name) { return ascending ? 1 : -1 }

      if (item1.name < item2.name) { return ascending ? -1 : 1 }

      return 0
    }
    const performFilter = (filter: string) => {
      emit('app-list:filter', filter)
    }
    const sortList = () => {
      ascending = !ascending
      showing.value = showing.value.sort(sorter)
    }
    watch(currentPage, () => {
      localStorage.setItem('currentPage', (currentPage.value ? currentPage.value.toString() : '1'))
      emit('app-list:pageChange', currentPage.value)
    })
    return {
      currentPage,
      performFilter,
      showing,
      sortList
    }
  }
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
