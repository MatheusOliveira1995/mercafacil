<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          {{ $t('app.title') }}
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          {{ $t('app.navigationTitle') }}
        </q-item-label>

        <SideMenu
          v-for="item in menuItems"
          :key="item.title"
          v-bind="item"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import SideMenu from 'components/home/SideMenu.vue'

import { useI18n } from 'vue-i18n'

import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'MainLayout',

  components: {
    SideMenu
  },

  setup () {
    // eslint-disable-next-line @typescript-eslint/unbound-method
    const { t: $t } = useI18n()

    const leftDrawerOpen = ref(false)

    const menuItems = [
      {
        title: $t('app.menu.characters.label'),
        caption: $t('app.menu.characters.caption'),
        icon: 'person_pin',
        route: '/characters'
      },
      {
        title: $t('app.menu.episodes.label'),
        caption: $t('app.menu.episodes.caption'),
        icon: 'desktop_windows',
        route: '/episodes'
      }
    ]

    return {
      menuItems,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
