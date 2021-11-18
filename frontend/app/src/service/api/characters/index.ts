import { useQuery, useResult } from '@vue/apollo-composable'
import gql from 'graphql-tag'

export function getCharacters (page = 1) {
  const teste = useQuery(gql`
    query getCharacters {
      characters(page:${page}) {
        results {
          id
          name
          status
          species,
          location{
            name,
            type
          },
          episode{
            name
          }
        }
      }
    }
  `)
  const characters = useResult(teste.result, null, data => data.characters.results)
  return characters
}
