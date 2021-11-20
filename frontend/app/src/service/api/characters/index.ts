import { useQuery, useResult } from '@vue/apollo-composable'
import gql from 'graphql-tag'
import { Character, Episode, Location, Origin } from '../../../definitions'
import { Ref } from 'vue'

type ReponseData = {
  characters:{
    results: Record<string, unknown>[],
    info: Record <string, unknown>
  },
}
type Result = {
  characters: Character[]
  pages: number
}
type Response = {
  loading: Ref<boolean>,
  response: Readonly<Ref<Readonly<Result | null>>>
}
export function getCharacters (page = 1):Response {
  const { result, loading } = useQuery(gql`
    query getCharacters {
      characters(page:${page}) {
        info{
          pages
        }
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
  const response = useResult(result, null, (data: ReponseData): Result => {
    const response = data.characters.results
    const info = data.characters.info

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

    return {
      characters: characters,
      pages: info.pages as number
    }
  })
  return {
    loading,
    response
  }
}
