<template>
  <div>{{ result }}</div>
</template>

<script>
import { useQuery } from '@vue/apollo-composable'
import gql from 'graphql-tag'
export default {
  setup () {
    const { result } = useQuery(gql`
      query getCharacters {
        characters {
          results {
            id
            name
            status
            species
          }
        }
      }
    `)
    return {
      result
    }
  }
}
</script>

<style scoped></style>
