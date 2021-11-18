import { useQuery, useResult } from '@vue/apollo-composable'
import gql from 'graphql-tag'

type Result = {
  characters: Record<string, unknown>
}
export function getCharacters (page = 1) {
  const { result } = useQuery(gql`
    query getCharacters {
      characters(page:${page}) {
        results {
          id
          name
          status
          image
          species,
          location{
            name,
            type
          },
          origin{
            name
            dimension
            
          },
          episode{
            name
          }
        }
      }
    }
  `)
  const characters = useResult(result, null, (data: Result) => {
    return data.characters.results
  })
  return characters
}
