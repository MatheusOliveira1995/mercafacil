import { useQuery, useResult } from '@vue/apollo-composable'
import gql from 'graphql-tag'
import { Character, Episode, Location, Origin } from '../../../definitions'
import { Ref } from 'vue'

type Result = {
  characters: Record<string, unknown>
}
type Response = {
  loading: Ref<boolean>,
  characters: Readonly<Ref<Readonly<Character[] | null>>>
}
export function getCharacters (page = 1):Response {
  const { result, loading } = useQuery(gql`
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
    const response = data.characters.results as Record<string, unknown>[]
    const characters = response.map((character):Character => {
      const episodesResponse = character.episode as Record<string, unknown>[]
      const episodes = episodesResponse.map((episode):Episode => {
        return {
          name: episode.name as string
        }
      })
      const locationReturned = character.location as Record<string, unknown>

      const location: Location = {
        name: locationReturned.name as string,
        type: locationReturned.name as string
      }
      const originReturned = character.origin as Record<string, unknown>
      const origin: Origin = {
        name: originReturned.name as string,
        type: originReturned.name as string
      }
      return {
        id: character.id as string,
        name: character.name as string,
        image: character.image as string,
        species: character.species as string,
        status: character.status as string,
        episodes,
        location,
        origin
      }
    })
    return characters
  })
  return {
    loading: loading,
    characters: characters
  }
}
