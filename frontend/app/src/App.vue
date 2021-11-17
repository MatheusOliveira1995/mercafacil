<template>
  <router-view />
</template>
<script lang="ts">
import { provide, defineComponent } from 'vue'
import { DefaultApolloClient } from '@vue/apollo-composable'
import { apolloClient } from './apolloClient'

export default defineComponent({
  name: 'App',
  setup () {
    provide(DefaultApolloClient, apolloClient)
  }
})
</script>
